import { useEffect, useState, SyntheticEvent } from 'react';
import './profileHeaderEdit.css'

interface ProfileHeaderEditProps {
    setEditProfileHeader: (value: boolean) => void;
    editProfileHeaderInfo: any;
    setFinishedEditing: (value: boolean) => void;
    companionId: string;
    setEditHeader: (value: boolean) => void;
}

function ProfileHeaderEdit({ setEditProfileHeader, editProfileHeaderInfo, setFinishedEditing, companionId, setEditHeader }: ProfileHeaderEditProps) {

    const [fullName, setFullName] = useState(editProfileHeaderInfo.fullName);
    const [hourRate, setHourRate] = useState(editProfileHeaderInfo.hourRate);
    const [serviceRegion, setServiceRegion] = useState(editProfileHeaderInfo.serviceRegion);
    const [age, setAge] = useState(editProfileHeaderInfo.age);
    const [headerDescription, setHeaderDescription] = useState(editProfileHeaderInfo.headerDescription);
    const [ownPlace, setOwnPlace] = useState(editProfileHeaderInfo.ownPlace);
    // const companionId = localStorage.getItem('companionId');
    const apiUrl = process.env.API_URL + 'companion/edit-header/' + companionId;

    // Handle toggle function
    const handleToggle = () => {
        setOwnPlace(!ownPlace);
    };


    // Handle page overflow
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        setFinishedEditing(false);

        const hourRateNumber = parseInt(hourRate);
        if (isNaN(hourRateNumber)) {
            console.error('hourRate must be a valid number');
            return;
        }

        const names = fullName.split(' ');

        const body = {
            name: fullName.split(' ')[0],
            surname: names.slice(1).join(' '),
            headerDescription: headerDescription,
            hourRate: hourRateNumber,
            ownPlace: ownPlace,
            serviceRegion: serviceRegion,
            age: parseInt(age),
        }

        try {
            const response = await fetch(
                apiUrl,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: (JSON.stringify(body))
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setEditProfileHeader(false);
            setEditHeader(false);
            setFinishedEditing(true);

            const data = await response.json();

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="back-drop"></div>
            <div className="container overlay">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <h1 className="mb-2">Editar perfil</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-sm-4">
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Nome completo
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Descrição
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={headerDescription}
                                            onChange={(e) => setHeaderDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Valor
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={hourRate}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (Number(value) >= 0) {
                                                    setHourRate(parseInt(value));
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Cidade
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={serviceRegion}
                                            onChange={(e) => setServiceRegion(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Idade
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={age}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (Number(value) >= 0) {
                                                    setAge(parseInt(value));
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        {ownPlace ? 'Com local' : 'Sem local'}
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                            checked={ownPlace}
                                            onChange={handleToggle}
                                            style={{ width: '40px', height: '24px', outline: 'none', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => setEditProfileHeader(false)}>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-lg btn-primary">
                                            Confirmar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default ProfileHeaderEdit;
