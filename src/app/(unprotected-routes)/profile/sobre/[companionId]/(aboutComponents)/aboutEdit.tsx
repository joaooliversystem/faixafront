import { useEffect, useState, SyntheticEvent } from 'react';
import './aboutEdit.css'
//imports material
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

interface EditAboutPage {
    setEditAboutPage: (value: boolean) => void;
    aboutInfo: any;
    setFinishedEditing: (value: boolean) => void;
    companionId: string;
    FetchAboutData: () => void;
    description: any;
    genderInfo: any;
    sexualBehaviorInfo: any;
    genitaliaInfo: any;
    languagesInfo: any;
    preferenceInfo: any;
    multipleInfo: any;
    ethnicityInfo: any;
    hairStyleInfo: any;
    hairLengthInfo: any;
    eyesInfo: any;
    sexualAttractionInfo: any;
    smoker: any;
    weight: any;
    height: any;
    tattoo: any;
    piercings: any;
    silicone: any;
    footSize: any;
}

function AboutEdit({ setEditAboutPage, setFinishedEditing, companionId, FetchAboutData, genderInfo, sexualBehaviorInfo, genitaliaInfo, eyesInfo, description, languagesInfo, smoker, weight, height, preferenceInfo, multipleInfo, sexualAttractionInfo, ethnicityInfo, hairStyleInfo, hairLengthInfo, tattoo, piercings, silicone, footSize }: EditAboutPage) {

    const [descriptionToEdit, setDescriptionToEdit] = useState(description);
    const [smokerEdit, setSmokerEdit] = useState(smoker);
    const [weightEdit, setWeightEdit] = useState(weight);
    const [heightEdit, setHeightEdit] = useState(height);
    const [piercingsEdit, setPiercingsEdit] = useState(piercings);
    const [siliconeEdit, setSiliconeEdit] = useState(silicone);
    const [tattooEdit, setTattooEdit] = useState(tattoo);
    const [footSizeEdit, setFootSizeEdit] = useState(footSize);
    const apiUrl = process.env.API_URL + 'companion/edit-about/' + companionId;
    const [selectedSeuxualBehaviors, setSelectedSexualBehaviors] = useState<string[]>([]);
    const [selectedEyes, setSelectedEyes] = useState<string[]>([]);
    const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedSmoker, setSelectedSmoker] = useState<string[]>([]);
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [selectedPreference, setSelectedPreference] = useState<string[]>([]);
    const [selectedGenitalia, setSelectedGenitalia] = useState<string[]>([]);
    const [selectedEthnicity, setSelectedEthnicity] = useState<string[]>([]);
    const [selectedHairStyle, setSelectedHairStyle] = useState<string[]>([]);
    const [selectedHairLength, setSelectedHairLength] = useState<string[]>([]);
    const [selectedSexualAttraction, setSelectedSexualAttraction] = useState<string[]>([]);
    const [reqBehaviorData, setReqBehaviorData] = useState<ReqBehaviorData>({
        selectedOptionIds: sexualBehaviorInfo.selections['$values']
    });
    const [reqPreferenceData, setReqPreferenceData] = useState<ReqPreferenceData>({
        selectedOptionIds: preferenceInfo.selections['$values']
    });
    const [reqEyesData, setReqEyesData,] = useState<ReqEyesData>({
        selectedOptionIds: eyesInfo.selections['$values']
    });
    const [reqMultipleData, setReqMultipleData,] = useState<ReqMultipleData>({
        selectedOptionIds: multipleInfo.selections['$values']
    });
    const [reqLanguageData, setReqLanguageData] = useState<ReqLanguageData>({
        selectedOptionIds: languagesInfo.selections['$values']
    });
    const [reqGenderData, setReqGenderData] = useState<ReqGenderData>({
        selectedOptionIds: genderInfo.selections['$values']
    });
    const [reqGenitalData, setReqGenitalData] = useState<ReqGenitalData>({
        selectedOptionIds: genitaliaInfo.selections['$values']
    });
    const [reqSexualAttractionData, setReqSexualAttractionData] = useState<ReqSexualAttractionData>({
        selectedOptionIds: sexualAttractionInfo.selections['$values']
    });

    const [reqEthnicityData, setReqEthnicityData] = useState<ReqEthnicityData>({
        selectedOptionIds: ethnicityInfo.selections['$values']
    });

    const [reqHairStyleData, setReqHairStyleData] = useState<ReqHairStyleData>({
        selectedOptionIds: hairStyleInfo.selections['$values']
    });

    const [reqHairLengthData, setReqHairLengthData] = useState<ReqHairLengthData>({
        selectedOptionIds: hairLengthInfo.selections['$values']
    });

    // Req data states types

    type ReqBehaviorData = {
        selectedOptionIds: number[];
    }

    type ReqPreferenceData = {
        selectedOptionIds: number[];
    }

    type ReqEyesData = {
        selectedOptionIds: number[];
    }

    type ReqMultipleData = {
        selectedOptionIds: number[];
    }

    type ReqLanguageData = {
        selectedOptionIds: number[];
    }

    type ReqGenderData = {
        selectedOptionIds: number[];
    }

    type ReqGenitalData = {
        selectedOptionIds: number[];
    }

    type ReqSexualAttractionData = {
        selectedOptionIds: number[];
    }

    type ReqEthnicityData = {
        selectedOptionIds: number[];
    }

    type ReqHairStyleData = {
        selectedOptionIds: number[];
    }

    type ReqHairLengthData = {
        selectedOptionIds: number[];
    }

    // Api data states

    const [sexualBehaviorData, setSexualBehaviorData] = useState<BehaviorData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });
    const [preferenceData, setPreferenceData] = useState<PreferenceData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });
    const [eyesData, setEyesData] = useState<EyesData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });
    const [hairStyleData, setHairStyleData] = useState<HairStyleData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [hairLengthData, setHairLengthData] = useState<HairLengthData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [ethnicityData, setEthnicityData] = useState<EthnicityData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [sexualAttractionData, setSexualAttractionData] = useState<SexualAttractionData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    })

    const [multipleData, setMultipleData] = useState<MultipleData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [languageData, setLanguageData] = useState<BehaviorData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [genderData, setGenderData] = useState<GenderData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    const [genitaliaData, setGenitaliaData,] = useState<GenitaliaData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    // Getting fields options
    useEffect(() => {
        HandleGetAboutEditFieldsData();
    }, [])

    useEffect(() => {
        if (genderData && genderInfo) {
            const defaultSelected = genderData.options['$values']
                .filter(option => genderInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedGender(defaultSelected);
        }

        if (sexualBehaviorData && sexualBehaviorInfo) {
            const defaultSelected = sexualBehaviorData.options['$values']
                .filter(option => sexualBehaviorInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedSexualBehaviors(defaultSelected);
        }

        if (languageData && languagesInfo) {
            const defaultSelected = languageData.options['$values']
                .filter(option => languagesInfo.selections['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedLanguages(defaultSelected);
        }

        if (eyesData && eyesInfo) {
            const defaultSelected = eyesData.options['$values']
                .filter(option => eyesInfo.selections['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedEyes(defaultSelected);
        }

        if (preferenceData && preferenceInfo) {
            const defaultSelected = preferenceData.options['$values']
                .filter(option => preferenceInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedPreference(defaultSelected);
        }

        if (multipleData && multipleInfo) {
            const defaultSelected = multipleData.options['$values']
                .filter(option => multipleInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedMultiple(defaultSelected);
        }

        if (genitaliaData && genitaliaInfo) {
            const defaultSelected = genitaliaData.options['$values']
                .filter(option => genitaliaInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedGenitalia(defaultSelected);
        }

        if (ethnicityData && ethnicityInfo) {
            const defaultSelected = ethnicityData.options['$values']
                .filter(option => ethnicityInfo.selections['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedEthnicity(defaultSelected);
        }

        if (hairStyleData && hairStyleInfo) {
            const defaultSelected = hairStyleData.options['$values']
                .filter(option => hairStyleInfo.selections['$values'].includes(option.option_id))
                .map(option => option.optionTitle);

            setSelectedHairStyle(defaultSelected);
        }

        if (hairLengthData && hairLengthInfo) {
            const defaultSelected = hairLengthData.options['$values']
                .filter(option => hairLengthInfo.selections['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedHairLength(defaultSelected);
        }

        if (sexualAttractionData && sexualAttractionInfo) {
            const defaultSelected = sexualAttractionData.options['$values']
                .filter(option => sexualAttractionInfo.selections['$values'].includes(option.option_id))
                .map(option => option.title);
            setSelectedSexualAttraction(defaultSelected);
        }

    }, [genderData, genderInfo, sexualBehaviorData, sexualBehaviorInfo, languageData, languagesInfo, eyesData, eyesInfo, preferenceData, preferenceInfo, multipleData, multipleInfo, genitaliaData, genitaliaInfo, ethnicityData, ethnicityInfo, hairStyleData, hairStyleInfo, hairLengthData, hairLengthInfo, sexualAttractionData, sexualAttractionInfo]);

    // Material multi select variables interfaces

    interface BehaviorData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface PreferenceData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface EyesData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface GenderData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface GenitaliaData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface Option {
        $id: string;
        option_id: number;
        title: string;
        optionTitle: string;
    }

    interface MultipleData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface SexualAttractionData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface EthnicityData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface HairStyleData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface HairLengthData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    // Change option functions

    const handleChangeBehaviors = (event: SelectChangeEvent<typeof selectedSeuxualBehaviors>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedSexualBehaviors(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = sexualBehaviorData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const sexualBehaviorInfoResponse = {
            selectedOptionIds
        };

        setReqBehaviorData(sexualBehaviorInfoResponse);
    };

    const handleChangePreference = (event: SelectChangeEvent<typeof selectedPreference>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedPreference(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = preferenceData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const preferenceInfoResponse = {
            selectedOptionIds
        };

        setReqPreferenceData(preferenceInfoResponse);
    }

    const handleChangeEyes = (event: SelectChangeEvent<typeof selectedEyes>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;
        setSelectedEyes(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = eyesData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const selectedEyesInfoResponse = {
            selectedOptionIds
        };

        setReqEyesData(selectedEyesInfoResponse);
    }

    const handleChangeMultiple = (event: SelectChangeEvent<typeof selectedMultiple>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;
        setSelectedMultiple(
            typeof value === 'string' ? value.split(',') : value,
        );


        // Data for API request

        const selectedOptionIds = multipleData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const selectedMultipleInfoResponse = {
            selectedOptionIds
        };

        setReqMultipleData(selectedMultipleInfoResponse);
    }


    const handleChangeLanguages = (event: SelectChangeEvent<typeof selectedLanguages>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;
        setSelectedLanguages(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = languageData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const selectedLanguagesInfoResponse = {
            selectedOptionIds
        }

        setReqLanguageData(selectedLanguagesInfoResponse);
    }

    const handleChangeGender = (event: SelectChangeEvent<typeof selectedGender>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;
        setSelectedGender(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = genderData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const selectedGenderInfoResponse = {
            selectedOptionIds
        }

        setReqGenderData(selectedGenderInfoResponse);
    }

    const handgleChangeGenitalia = (event: SelectChangeEvent<typeof selectedGenitalia>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;
        setSelectedGenitalia(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = genitaliaData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const selectedGenitaliaInfoResponse = {
            selectedOptionIds
        }

        setReqGenitalData(selectedGenitaliaInfoResponse);
    }

    const handleChangeEthnicity = (event: SelectChangeEvent<typeof selectedEthnicity>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedEthnicity(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = ethnicityData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const ethnicityInfoResponse = {
            selectedOptionIds
        };

        setReqEthnicityData(ethnicityInfoResponse);
    };

    const handleChangeHairLength = (event: SelectChangeEvent<typeof selectedHairLength>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedHairLength(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = hairLengthData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const hairLengthInfoResponse = {
            selectedOptionIds
        };

        setReqHairLengthData(hairLengthInfoResponse);
    };

    const handleChangeHairStyle = (event: SelectChangeEvent<typeof selectedHairStyle>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedHairStyle(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = hairStyleData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const hairStyleInfoResponse = {
            selectedOptionIds
        };

        setReqHairLengthData(hairStyleInfoResponse);
    };

    const handleChangeSexualAttracion = (event: SelectChangeEvent<typeof selectedSexualAttraction>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedSexualAttraction(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = sexualAttractionData.options.$values
            .filter(option => value.includes(option.title))
            .map(option => option.option_id);

        const sexualAttractionInfoResponse = {
            selectedOptionIds
        };

        setReqHairLengthData(sexualAttractionInfoResponse);
    };

    // Material multi select menu props

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    // Handle page overflow
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    // Handle form submit 
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        setFinishedEditing(false);

        const body = {

            // Particulars

            preferenceSelectedOptions: reqPreferenceData.selectedOptionIds,
            behaviorSelectedOptions: reqBehaviorData.selectedOptionIds,
            eyesSelectedOptions: reqEyesData.selectedOptionIds,
            multipleSelectedOptions: reqMultipleData.selectedOptionIds,
            languageSelectedOptions: reqLanguageData.selectedOptionIds,
            genderSelectedOptions: reqGenderData.selectedOptionIds,
            genitalSelectedOptions: reqGenitalData.selectedOptionIds,
            hairLengthSelectedOptions: reqHairLengthData.selectedOptionIds,
            hairStyleSelectedOptions: reqHairStyleData.selectedOptionIds,
            attractionSelectedOptions: reqSexualAttractionData.selectedOptionIds,
            ethnicitySelectedOptions: reqEthnicityData.selectedOptionIds,

            // Attributes

            description: descriptionToEdit,
            piercings: piercingsEdit,
            smoker: smokerEdit,
            silicone: siliconeEdit,
            tattoo: tattooEdit,
            footSize: parseFloat(footSizeEdit),
            height: parseFloat(heightEdit),
            weight: parseFloat(weightEdit),
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
                    body: JSON.stringify(body),
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            FetchAboutData();
            setEditAboutPage(false);
            setFinishedEditing(true);
            const data = await response.json();

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handle get about edit fields data based on tags
    async function HandleGetAboutEditFieldsData() {

        const tags = ['behavior', 'preference', 'eyes', 'location', 'multiple', 'language', 'gender', 'genital', 'ethnicity', 'hair_style', 'hair_length', 'attraction', 'smoker', 'tattoo', 'silicone', 'footSize', 'height', 'weight', 'description', 'piercings']

        tags.map(async (tag: string) => {

            const apiUrlSaveData = process.env.API_URL + 'companion/attributes/' + tag + '/options'

            const response = await fetch(
                apiUrlSaveData,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if (tag === 'behavior') setSexualBehaviorData(data);
            if (tag === 'preference') setPreferenceData(data);
            if (tag === 'eyes') { setEyesData(data) };
            if (tag === 'multiple') setMultipleData(data);
            if (tag === 'language') { setLanguageData(data); }
            if (tag === 'gender') setGenderData(data);
            if (tag === 'genital') setGenitaliaData(data);
            if (tag === 'ethnicity') setEthnicityData(data);
            if (tag === 'hair_style') setHairStyleData(data);
            if (tag === 'hair_length') setHairLengthData(data);
            if (tag === 'attraction') setSexualAttractionData(data);
        })
    }

    return (
        <>
            <div className="back-drop"></div>
            <div className="container overlay">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <h1 className="mb-2">Editar Área Sobre</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-sm-4">
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Sobre
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={descriptionToEdit}
                                            onChange={(e) => setDescriptionToEdit(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Gênero
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedGender}
                                                onChange={handleChangeGender}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {genderData.options && genderData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title">
                                        Comportamento sexual
                                    </div>
                                    <div>
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={selectedSeuxualBehaviors}
                                                onChange={handleChangeBehaviors}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {sexualBehaviorData.options && sexualBehaviorData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <Checkbox checked={selectedSeuxualBehaviors.indexOf(option.title) > -1}
                                                            sx={{
                                                                color: '#D23C77',
                                                                '&.Mui-checked': {
                                                                    color: '#D23C77',
                                                                },
                                                            }}
                                                        />
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Idiomas
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={selectedLanguages}
                                                onChange={handleChangeLanguages}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {languageData.options && languageData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <Checkbox checked={selectedLanguages.indexOf(option.optionTitle) > -1}
                                                            sx={{
                                                                color: '#D23C77',
                                                                '&.Mui-checked': {
                                                                    color: '#D23C77',
                                                                },
                                                            }}
                                                        />
                                                        <ListItemText primary={option.optionTitle} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Peso
                                    </div>
                                    <div className="mb-3 position-relative">
                                        <div className="mb-3 input-group-lg">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={weightEdit}
                                                onChange={(e) => {
                                                    const inputWeight = e.target.value;
                                                    const regex = /^[0-9]*$/;

                                                    if (regex.test(inputWeight) || inputWeight === '') {
                                                        setWeightEdit(inputWeight);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Tamanho do pé
                                    </div>
                                    <div className="mb-3 input-group-lg">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={footSizeEdit}
                                            onChange={(e) => {
                                                const footSize = e.target.value;
                                                const regex = /^\d*\.?\d*$/;
                                                if (regex.test(footSize) || footSize === '') {
                                                    setFootSizeEdit(footSize);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Altura
                                    </div>
                                    <div className="mb-3 input-group-lg">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={heightEdit}
                                            onChange={(e) => {
                                                const inputHeight = e.target.value;
                                                const regex = /^\d*\.?\d*$/;
                                                if (regex.test(inputHeight) || inputHeight === '') {
                                                    setHeightEdit(inputHeight);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Etnia
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedEthnicity}
                                                onChange={handleChangeEthnicity}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {ethnicityData.options && ethnicityData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <ListItemText primary={option.optionTitle} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Comprimento do cabelo
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedHairLength}
                                                onChange={handleChangeHairLength}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {hairLengthData.options && hairLengthData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <ListItemText primary={option.optionTitle} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Cor do cabelo
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedHairStyle}
                                                onChange={handleChangeHairStyle}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {hairStyleData.options && hairStyleData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <ListItemText primary={option.optionTitle} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Atração sexual
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedSexualAttraction}
                                                onChange={handleChangeSexualAttracion}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {sexualAttractionData.options && sexualAttractionData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Cor dos olhos
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            {/* <InputLabel>Comportamento sexual</InputLabel> */}
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedEyes}
                                                onChange={handleChangeEyes}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {eyesData.options && eyesData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <ListItemText primary={option.optionTitle} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Atendimento em conjunto
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedMultiple}
                                                onChange={handleChangeMultiple}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {multipleData.options && multipleData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Preferênia de comportamento
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedPreference}
                                                onChange={handleChangePreference}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {preferenceData.options && preferenceData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-title" >
                                        Genitália
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={selectedGenitalia}
                                                onChange={handgleChangeGenitalia}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {genitaliaData.options && genitaliaData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.title}>
                                                        <ListItemText primary={option.title} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between toggles-container flex-column mb-3">
                                    <div className="input-title">
                                        Fumante
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            checked={smokerEdit}
                                            onChange={(event) => {
                                                setSmokerEdit(event.target.checked ? true : false);
                                            }}
                                            style={{ width: '50px', height: '30px', outline: 'none', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between toggles-container flex-column mb-3">
                                    <div className="input-title">
                                        Tatuagens
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            checked={tattooEdit}
                                            onChange={(event) => {
                                                setTattooEdit(event.target.checked ? true : false);
                                            }}
                                            style={{ width: '50px', height: '30px', outline: 'none', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between toggles-container flex-column mb-3">
                                    <div className="input-title">
                                        Silicone
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            checked={siliconeEdit}
                                            onChange={(event) => {
                                                setSiliconeEdit(event.target.checked ? true : false);
                                            }}
                                            style={{ width: '50px', height: '30px', outline: 'none', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between toggles-container flex-column mb-3">
                                    <div className="input-title">
                                        Piercings
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            checked={piercingsEdit}
                                            onChange={(event) => {
                                                setPiercingsEdit(event.target.checked ? true : false);
                                            }}
                                            style={{ width: '50px', height: '30px', outline: 'none', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => setEditAboutPage(false)}>
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

export default AboutEdit;
