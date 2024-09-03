"use client"
import { useEffect, useState } from 'react';
import LocalityEdit from './(localityComponents)/localityEdit';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";

function Locality() {

    const [locality, setLocality] = useState('');
    const [amenities, setAmenities] = useState<string[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const [amenitiesInfo, setAmenitiesInfo] = useState<any[]>([]);
    const [locationsInfo, setLocationsInfo] = useState<any[]>([]);
    const [editLocality, setEditLocality] = useState<boolean>(false);
    const [finishedEditing, setFinishedEditing] = useState<boolean>(false);
    const [localityData, setLocalityData] = useState<any>({});
    const pathname = usePathname();
    const companionId = pathname.split('/').pop() || '';
    const apiUrl = process.env.API_URL + 'companion/locality/' + companionId;
    const { data: session, status } = useSession();
    const [isUserOwner, setIsUserOwner] = useState(false);
    const [town, setTown] = useState<string>('');

    type User = {
        $id?: string | null | undefined;
        companion?: number | null | undefined;
    };

    const user = session?.user as User;
    const userId = user?.$id;
    const sessionCompanionId = (user?.companion);

    // Getting data from API

    useEffect(() => {
        FetchLocalityData();
    }, []);

    // Checking if the page user is also the page companion 

    useEffect(() => {
        if (companionId == sessionCompanionId?.toString()) {
            setIsUserOwner(true);
        }
    }, [userId])

    // Handling finish editing

    useEffect(() => {
        if (finishedEditing) {
            setTimeout(() => {
                alert("Dados editados com sucesso!")
            }, 500);
        }
    }, [finishedEditing])

    //   Fetch locality tab data from API function
    async function FetchLocalityData() {

        try {
            const response = await fetch(
                apiUrl,
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

            setTown(data.particulars.townShip);

            const amenitiesArr = data.attributes.amenities.label.split(',').map((label: string) => label.trim());
            const locationsArr = data.attributes.locations.label.split(',').map((label: string) => label.trim());

            // Ui states setting

            setAmenities(amenitiesArr);
            setLocations(locationsArr);

            // Edit props states setting

            setAmenitiesInfo(data.attributes.amenities.selections);
            setLocationsInfo(data.attributes.locations.selections);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            {editLocality && (
                <>
                    <LocalityEdit
                        setEditLocality={setEditLocality}
                        localityData={localityData}
                        setFinishedEditing={setFinishedEditing}
                        companionId={companionId}
                        amenitiesInfo={amenitiesInfo}
                        locationsInfo={locationsInfo}
                    />
                </>
            )}
            <div className="card">
                <div className="card-header border-0 pb-0 d-flex">
                    <h5>Localidade
                        {isUserOwner && (
                            <span className='edit-icon-1' style={{ display: 'inline', marginLeft: '8px' }} onClick={() => setEditLocality(true)}>
                                <i className="bi bi-pencil-square"></i>
                            </span>
                        )}
                    </h5>
                </div>
                <div className="card-body">
                    <div className="fs-6 fw-medium text-primary d-flex align-items-center gap-2">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>
                            <strong>{town}</strong>
                        </span>
                    </div>
                    <div className="mt-4">
                        <h6>Locais que Atendo</h6>
                        {locations.map((location, index) => (
                            <ul key={index}>
                                <li key={index}>
                                    <div className="d-flex align-items-center gap-2 fs-5 mb-2" key={index}>
                                        {/* <i className={`${amenity.icon} fw-bold`}></i> */}
                                        <span key={index}>{location}</span>
                                    </div>
                                </li>
                            </ul>
                        ))}

                    </div>
                    <div className="mt-4">
                        <h6>Comodidades do Meu Local</h6>
                        {amenities.map((amenity, index) => (
                            <ul key={index}>
                                <li key={index}>
                                    <div className="d-flex align-items-center gap-2 fs-5 mb-2" key={index}>
                                        {/* <i className={`${amenity.icon} fw-bold`}></i> */}
                                        <span>{amenity}</span>
                                    </div>
                                </li>
                            </ul>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Locality;