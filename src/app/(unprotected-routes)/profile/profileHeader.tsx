"use client"
import { useEffect, useState } from 'react';
import ProfileHeaderEdit from './(profileHeaderComponents)/profileHeaderEdit'
import { usePathname } from 'next/navigation'
import { useSession } from "next-auth/react";

function ProfileHeader() {

    const [isUserOwner, setIsUserOwner] = useState(false);
    const pathname = usePathname();
    const [userName, setUserName] = useState('');
    const [ownPlace, setOwnPlace] = useState('');
    const [workLocation, setWorkLocation] = useState('');
    const [age, setAge] = useState();
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [price, setPrice] = useState(0);
    const [editProfileHeader, setEditProfileHeader] = useState(false);
    const [editProfileHeaderInfo, setEditProfileHeaderInfo] = useState([]);
    const [headerDescription, setHeaderDescription] = useState('');
    const [finishedEditing, setFinishedEditing] = useState(false);
    const [editHeader, setEditHeader] = useState<boolean>(false);
    // const companionId = localStorage.getItem('companionId');
    const companionId = pathname.split('/').pop() || '';
    const apiUrl = process.env.API_URL + 'companion/header/' + companionId;
    const { data: session, status } = useSession();

    const urlencodedtext = 'Ola. Vi seu perfil no portal Faixa Rosa.';

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
    }, [userId, sessionCompanionId])

    useEffect(() => {

        if (finishedEditing) {
            setTimeout(() => {
                alert("Dados editados com sucesso!")
            }, 500);
        }
    }, [finishedEditing])

    // Fecthing profile header data when the page is built

    useEffect(() => {
        FetchProfileHeaderData();
    }, [editProfileHeader]);

    // Fetch profile headerdata from API function
    async function FetchProfileHeaderData() {

        try {
            const response = await
                fetch(
                    apiUrl
                    , {
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
            setUserName(data.fullName);
            setOwnPlace(data.ownPlace);
            setWorkLocation(data.serviceRegion);
            setAge(data.age);
            setCurrentlyWorking(data.inOffice);
            setPrice(data.hourRate);
            setHeaderDescription(data.headerDescription);
            setEditProfileHeaderInfo(data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handle open profile header editor overlay

    const openProfileHdrModal = () => {
        setEditProfileHeader(true);
    }

    return (
        <>
            {editProfileHeader && (
                <>
                    <ProfileHeaderEdit
                        setEditProfileHeader={setEditProfileHeader}
                        editProfileHeaderInfo={editProfileHeaderInfo}
                        setFinishedEditing={setFinishedEditing}
                        companionId={companionId}
                        setEditHeader={setEditHeader}
                    />
                </>
            )}
            <div
                className="h-200px rounded-top"
                style={{
                    backgroundImage: "url(/files/images/advertiser_image_1.jpeg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {/* Card body START */}
            <div className="card-body py-0">
                <div className="d-sm-flex align-items-start text-center text-sm-start">
                    <div>
                        {/* Avatar */}
                        <div className="avatar avatar-xxl mt-n5 mb-3">
                            <img
                                className="avatar-img rounded-circle border border-white border-3"
                                src="/files/images/advertiser_image_1.jpeg"
                                alt="alt"
                            />
                        </div>
                    </div>
                    <div className="ms-sm-4 mt-sm-3">
                        {/* Info */}
                        <h1 className="mb-0 h5">
                            {userName}{" "}
                            <i className="bi bi-patch-check-fill text-success small" />
                            {isUserOwner && (
                                <>
                                    <span className='edit-icon-1' onClick={() => openProfileHdrModal()}>
                                        <i className="bi bi-pencil-square"></i>
                                    </span>
                                </>
                            )}
                        </h1>
                        <p>
                            <i>{headerDescription}</i>
                        </p>
                    </div>
                    {/* Button */}
                    <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                        <button
                            className="btn btn-danger-soft me-2 d-none"
                            type="button"
                        >
                            <i className="bi bi-pencil-fill pe-1" /> Edit profile
                        </button>
                        <button className="btn btn-primary-soft me-2" type="button">
                            5,3KM
                        </button>
                        <button className="btn btn-success-soft me-2" type="button">
                            <i className="bi bi-person-add pe-1" />
                        </button>
                        <a className="btn btn-success-soft me-2" type="button" href={`https://wa.me/5514981114078?text=${urlencodedtext}`} target="_blank">
                            <i className="bi bi-whatsapp pe-1" />
                        </a>
                        <div className="dropdown">
                            {/* Card share action menu */}
                            <button
                                className="icon-md btn btn-light"
                                type="button"
                                id="profileAction2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-three-dots" />
                            </button>
                            {/* Card share action dropdown menu */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="profileAction2"
                            >
                                <li>
                                    <a className="dropdown-item text-danger" href="#">
                                        <i className="bi bi-ban fa-fw pe-2" />
                                        Bloquear
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-danger" href="#">
                                        <i className="bi bi-megaphone fa-fw pe-2" />
                                        Denunciar
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-clipboard fa-fw pe-2" />
                                        Copiar URL
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-share-fill fa-fw pe-2" />
                                        Compartilhar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* List profile */}
                <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                    <li className="list-inline-item fw-bold">
                        <i className="bi bi-coin me-1" /> R${price}/h
                    </li>
                    <li className="list-inline-item">
                        {ownPlace === 'true' && (
                            <span>
                                <i className="bi bi-house-check-fill me-1" /> Com local
                            </span>

                        )}
                        {!(ownPlace === 'true') && (
                            <i className="bi bi-house-check-fill me-1" >
                                {ownPlace ? ' Com local' : ' Sem local'}
                            </i>
                        )}
                    </li>
                    <li className="list-inline-item">
                        <i className="bi bi-pin-map-fill me-1" /> {workLocation}
                    </li>
                    <li className="list-inline-item">
                        <span>
                            <i className="fa-solid fa-id-card me-1" /> {age} anos
                        </span>
                    </li>
                    {currentlyWorking && (
                        <li className="list-inline-item">
                            <span className="badge bg-success">
                                <i className="bi bi-clock-history"></i> em expediente
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
};

export default ProfileHeader;
