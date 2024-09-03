
"use client"
import { useEffect, useState } from 'react';
import AboutEdit from './(aboutComponents)/aboutEdit';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";

function About() {

    const [description, setDrescription] = useState('');
    const [height, setHeight] = useState('');
    const [wheight, setWheight] = useState('');
    const [footSize, setFootSize] = useState('');
    const [tattoo, setTattoo] = useState('');
    const [piercings, setPiercings] = useState('');
    const [silicone, setSilicone] = useState('');
    const [smoker, setSmoker] = useState('');
    const [editingAbout, setEditingAbout] = useState(false);
    const [editAboutPage, setEditAboutPage] = useState(false);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [finishedEditing, setFinishedEditing] = useState(false);
    const [eyesColor, setEeyesColor] = useState('');
    const [ethnicityInfo, setEthnicityInfo] = useState<EthnicityInfo | null>(null);
    const [sexualAttractionInfo, setSexualAttractionInfo] = useState<SexualAttractionInfo | null>(null);
    const [hairLengthInfo, setHairLengthInfo] = useState<HairLengthInfo | null>(null);
    const [hairStyleInfo, setHairStyleInfo] = useState<HairStyleInfo | null>(null);
    const [attributesValues, setAttributesValues] = useState<AttributeValue[]>([]);
    const [genderInfo, setGenderInfo] = useState<GenderInfo | null>(null);
    const [sexualBehaviorInfo, setSexualBehaviorInfo] = useState<SexualBehaviorInfo | null>(null);
    const [genitaliaInfo, setGenitaliaInfo] = useState<GenitaliaInfo | null>(null);
    const [eyesInfo, setEyesInfo] = useState<EyesInfo | null>(null);
    const [languagesInfo, setLanguagesInfo] = useState<LanguageInfo | null>(null);
    const [multipleInfo, setMultipleInfo] = useState<MultipleInfo | null>(null);
    const [preferenceInfo, setPreferenceInfo] = useState<PreferenceInfo | null>(null);
    // const companionId = localStorage.getItem('companionId');
    const pathname = usePathname();
    const companionId = pathname.split('/').pop() || '';
    const apiUrl = process.env.API_URL + 'companion/about/' + companionId;
    const { data: session, status } = useSession();
    const [isUserOwner, setIsUserOwner] = useState(false);

    // State types

    type SexualAttractionInfo = {
        label: string;
        selections: {};
    }

    type GenderInfo = {
        label: string;
        selections: {};
    }

    type SexualBehaviorInfo = {
        label: string;
        selections: {};
    }

    interface GenitaliaInfo {
        label: string;
        selections: {};
    }

    type EyesInfo = {
        label: string;
        selections: {};
    }

    type LanguageInfo = {
        label: string;
        selections: {};
    }

    type MultipleInfo = {
        label: string;
        selections: {};
    }

    type PreferenceInfo = {
        label: string;
        selections: {};
    }

    type HairStyleInfo = {
        label: string;
        selections: {};
    }

    type HairLengthInfo = {
        label: string;
        selections: {};
    }

    type EthnicityInfo = {
        label: string;
        selections: {};
    }

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

    // Fetching about data

    useEffect(() => {
        FetchAboutData();
    }, [])

    // Handling finish editing

    useEffect(() => {
        if (finishedEditing) {
            setTimeout(() => {
                alert("Dados editados com sucesso!")
            }, 500);
        }
    }, [finishedEditing])

    useEffect(() => {

        // Afterwords editingProfileHeader will be true if the user on the page is the owner of the profile

        if (true) {
            setEditingAbout(true);
        }
    }, [])

    type AttributeValue = {
        id: string;
        title: string;
        description: string;
    }

    // About API data fetch function
    async function FetchAboutData() {
        try {

            const response = await fetch
                (
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

            // Setting data states

            setDrescription(data.description);
            setAttributesValues(data.attributes['$values'])
            setHeight(data.particulars.height);
            setWheight(data.particulars.weight);
            setEeyesColor(data.particulars.eyesColor);
            setFootSize(data.particulars.footSize);
            setSilicone(data.particulars.silicone);
            setTattoo(data.particulars.tattoo);
            setPiercings(data.particulars.piercings);
            setSmoker(data.particulars.smoker);
            setAboutInfo(data);

            // States for about and about edit

            setGenitaliaInfo(data.attributes.genital);
            setSexualBehaviorInfo(data.attributes.behavior);
            setGenderInfo(data.attributes.gender);
            setEyesInfo(data.attributes.eyes);
            setLanguagesInfo(data.attributes.language);
            setMultipleInfo(data.attributes.multiple);
            setPreferenceInfo(data.attributes.preference);
            setHairStyleInfo(data.attributes.hairStyle);
            setHairLengthInfo(data.attributes.hairLength);
            setSexualAttractionInfo(data.attributes.attraction)
            setEthnicityInfo(data.attributes.ethnicity);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            {editAboutPage && (
                <>
                    <AboutEdit
                        setEditAboutPage={setEditAboutPage}
                        aboutInfo={aboutInfo}
                        setFinishedEditing={setFinishedEditing}
                        companionId={companionId}
                        FetchAboutData={FetchAboutData}
                        description={description}
                        genderInfo={genderInfo}
                        sexualBehaviorInfo={sexualBehaviorInfo}
                        genitaliaInfo={genitaliaInfo}
                        languagesInfo={languagesInfo}
                        multipleInfo={multipleInfo}
                        preferenceInfo={preferenceInfo}
                        eyesInfo={eyesInfo}
                        sexualAttractionInfo={sexualAttractionInfo}
                        ethnicityInfo={ethnicityInfo}
                        hairStyleInfo={hairStyleInfo}
                        hairLengthInfo={hairLengthInfo}
                        smoker={smoker}
                        weight={wheight}
                        height={height}
                        tattoo={tattoo}
                        piercings={piercings}
                        silicone={silicone}
                        footSize={footSize}
                    />
                </>
            )}
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h5>
                        Sobre
                        {isUserOwner && (
                            <span className='edit-icon-1' style={{ display: 'inline', marginLeft: '8px' }} onClick={() => setEditAboutPage(true)}>
                                <i className="bi bi-pencil-square"></i>
                            </span>
                        )}
                    </h5>
                </div>
                <div className="card-body">
                    <p>
                        {description}
                    </p>
                    <div className="mt-5">
                        <h6 className="mb-4">
                            Informações Sobre Mim
                        </h6>
                        {/* {
                            attributesValues.map((item) => (
                                <div className="d-flex flex-column mb-2" key={item.id}>
                                    <span className="fw-bold">
                                        {item.title}
                                    </span>
                                    <span>
                                        {item.description === "Sim" ?
                                            <i className="bi bi-check-lg text-primary fs-6 m-1"></i> :
                                            (item.description === "Não" ? <i className="bi bi-x text-primary fs-5"></i> : item.description)
                                        }
                                    </span>
                                </div>
                            ))
                        } */}
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Gênero</span>
                            <span>{genderInfo?.label}</span>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            {/* aqui */}
                            <span className="fw-bold">Genitália</span>
                            <span>{genitaliaInfo?.label}</span>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Comportamento sexual</span>
                            <span>{sexualBehaviorInfo?.label}</span>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Atração sexual</span>
                            <span>{sexualAttractionInfo?.label}</span>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Idiomas</span>
                            <span>{languagesInfo?.label}</span>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Fumante</span>
                            {!smoker ? <span>Não</span> : <span>Sim</span>}
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Atendimento conjunto</span>
                            {multipleInfo?.label}
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <span className="fw-bold">Preferência de comportamento</span>
                            {preferenceInfo?.label}
                        </div>
                    </div>
                    <div className="row mt-5">
                        <h6 className="mb-4">Características</h6>
                        <div className="col-md-5 mb-3">
                            <div className="w-100 bg-primary bg-opacity-25 d-flex justify-content-center">
                                <video width="100" controls style={{ width: "unset" }}>
                                    <source type="video/mp4" src="/files/videos/video.mp4" />
                                </video>
                            </div>
                            <span className="mt-2 d-inline-block">
                                <i>verificada em 09/03/2024</i>
                            </span>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Peso</span>
                                        <span>
                                            {wheight} Kg
                                        </span>
                                    </div>
                                    <div className="d-flex flex-column mb-4">
                                        {/* fix latter */}
                                        <span className="fw-bold">Cor dos olhos</span>
                                        <span>
                                            {eyesInfo?.label}
                                        </span>
                                    </div>
                                    {/* fix latter */}
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Cor de cabelo</span>
                                        <span>
                                            {hairStyleInfo?.label}
                                        </span>
                                    </div>
                                    {/* fix latter */}
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Comprimento de cabelo</span>
                                        <span>
                                            {hairLengthInfo?.label}
                                        </span>
                                    </div>
                                    {/* fix latter */}
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Tamanho do pé</span>
                                        <span>
                                            {footSize}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Altura</span>
                                        <span>
                                            {height} m
                                        </span>
                                    </div>
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold">Etnia</span>
                                        <span>
                                            {ethnicityInfo?.label}
                                        </span>
                                    </div>
                                    <div className="d-flex flex-column mb-4">
                                        <span className="fw-bold mb-1">Silicone</span>
                                        <span className="check-icon mt-n2">
                                            {silicone && (<i className="bi bi-check-lg text-primary fs-6 mt-1"> </i>)}
                                            {!silicone && (<i className="bi bi-x text-primary fs-5"> </i>)}
                                        </span>
                                    </div>
                                    <div className="d-flex flex-column mb-4 mt-n1">
                                        <span className="fw-bold">Tatuagem</span>
                                        <span>
                                            <span className="check-icon mt-n1">
                                                {tattoo && (<i className="bi bi-check-lg text-primary fs-6"></i>)}
                                                {!tattoo && (<i className="bi bi-x text-primary fs-5"></i>)}
                                            </span>
                                        </span>
                                    </div>
                                    <div style={{ marginBottom: "-1px" }} className="d-flex flex-column mt-n1">
                                        <span className="fw-bold mt-1">Piercings</span>
                                        <span className="check-icon">
                                            {piercings && (<i style={{ marginTop: "-5px" }} className="bi bi-check-lg text-primary fs-6 mb-n3"></i>)}
                                            {!piercings && (<i className="bi bi-x text-primary fs-5"></i>)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;