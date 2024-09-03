"use client"
import { useEffect, useState } from 'react';
import ServicesEdit from './(serviceComponents)/servicesEdit';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";

function Services() {

    interface ServiceValues {
        id: string;
        title: string;
        description: string;
        servicePrice: number;
        optionTitle: string;
    }

    // Service API data fetch function
    const [serviceValues, setServiceValues] = useState<string[]>([]);
    const [editServices, setEditServices] = useState<boolean>(false);
    const [serviceData, setServiceData] = useState<ServiceValues[]>([]);
    const [generalDescription, setGeneralDescription] = useState<string>('');
    const [finishedEditing, setFinishedEditing] = useState<boolean>(false);
    const [services, setServices] = useState<string[]>([]);
    const [servicesInfo, setServicesInfo] = useState<any[]>([]);;
    const pathname = usePathname();
    const companionId = pathname.split('/').pop() || '';
    const apiUrlCompanion = process.env.API_URL + 'companion/service/' + companionId;
    const apiUrL = process.env.API_URL + 'api/services';
    const { data: session, status } = useSession();
    const [isUserOwner, setIsUserOwner] = useState(false);

    type User = {
        $id?: string | null | undefined;
        companion?: number | null | undefined;
    };

    const user = session?.user as User;
    const userId = user?.$id;
    const sessionCompanionId = (user?.companion);

    // Checking if the page user is also the page companion 

    useEffect(() => {
        if (companionId == sessionCompanionId?.toString()) {
            setIsUserOwner(true);
        }
    }, [userId])

    useEffect(() => {
        if (finishedEditing) {
            setTimeout(() => {
                alert("Dados editados com sucesso!")
            }, 500);
        }
    }, [finishedEditing])

    useEffect(() => {
        FetchServicesData();
    }, [editServices]);

    // Second data fetch (specific companion services)
    async function FetchServicesData() {

        try {
            const response = await fetch
                (
                    apiUrlCompanion,
                    {
                        method: 'GET',
                        headers: {
                            'Accept': 'text/plain'
                        }
                    });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataJson = await response.text();
            const data = JSON.parse(dataJson);

            // Edit props states setting

            setServicesInfo(data.attributes.services.selections)

            // UI Data

            const servicesArr = data.attributes.services.label.split(',').map((label: string) => label.trim());

            setServiceValues(servicesArr);

            setServices(servicesArr);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            {editServices && (
                <ServicesEdit
                    setFinishedEditing={setFinishedEditing}
                    setEditServices={setEditServices}
                    editServices={editServices}
                    companionId={companionId}
                    servicesInfo={servicesInfo}
                />
            )}
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h5>Serviços
                        {isUserOwner && (
                            <span className='edit-icon-1' style={{ display: 'inline', marginLeft: '8px' }} onClick={() => setEditServices(true)}>
                                <i className="bi bi-pencil-square"></i>
                            </span>
                        )}
                    </h5>
                </div>
                <div className="card-body">
                    {/* <span>
                        {generalDescription}
                    </span> */}
                    <div className="d-flex flex-column align-items-left mb-2 mt-n2">
                        <ul
                            className="list-group list-group-flush"
                            style={{ width: "90%", maxWidth: "900px" }}
                        >
                            {services.map((item, index) => (
                                <li key={index} className="list-group-item" style={{ marginLeft: '-15px' }}>
                                    <div className="">
                                        <span className="fw-bold">{item.split('-')[0]}</span>
                                    </div>
                                    <div className="mt-2">
                                        <i>
                                            {item.split('-').slice(1).join('-')}
                                        </i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;