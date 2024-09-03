import { useEffect, useState, SyntheticEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
// import './profileHeaderEdit.css'

interface LocalityEditProps {
    setEditLocality: (value: boolean) => void;
    localityData: any;
    setFinishedEditing: (value: boolean) => void;
    companionId: string;
    amenitiesInfo: any;
    locationsInfo: any;
}

function LocalityEdit({ setEditLocality, localityData, setFinishedEditing, companionId, amenitiesInfo, locationsInfo }: LocalityEditProps) {

    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const [reqLocationData, setReqLocationData] = useState<ReqLocation>({
        selectedOptionIds: locationsInfo['$values']
    });
    const [reqAmenitiesData, setReqAmenitiesData] = useState<ReqAmenities>({
        selectedOptionIds: amenitiesInfo['$values']
    });
    const apiUrl = process.env.API_URL + 'companion/edit-locality/' + companionId;

    // Req data states types

    type ReqAmenities = {
        selectedOptionIds: number[];
    }

    type ReqLocation = {
        selectedOptionIds: number[];
    }

    // Api data states

    const [locationsData, setLocationsData] = useState<LocationData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });
    const [amenitiesData, setAmenitiesData] = useState<AmenitiesData>({
        $id: '',
        multiSelection: false,
        options: {
            $values: []
        }
    });

    // Material multi select variables interfaces

    interface Option {
        $id: string;
        option_id: number;
        optionTitle: string;
    }

    interface LocationData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

    interface AmenitiesData {
        $id: string;
        multiSelection: boolean;
        options: {
            $values: Option[];
        };
    }

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

    // Getting fields options
    useEffect(() => {
        HandleGetlocalityEditFieldsData();
    }, [])

    useEffect(() => {
        if (amenitiesData && amenitiesInfo) {
            const defaultSelected = amenitiesData.options['$values']
                .filter(option => amenitiesInfo['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedAmenities(defaultSelected);
        }

        if (locationsData && locationsInfo) {
            const defaultSelected = locationsData.options['$values']
                .filter(option => locationsInfo['$values'].includes(option.option_id))
                .map(option => option.optionTitle);
            setSelectedLocations(defaultSelected);
        }

    }, [amenitiesData, amenitiesInfo, locationsData, locationsInfo]);


    // Change option functions

    const handleChangeLocations = (event: SelectChangeEvent<typeof selectedLocations>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedLocations(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = locationsData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const locationsInfoResponse = {
            selectedOptionIds
        };

        setReqLocationData(locationsInfoResponse);
    };

    const handleChangeAmenities = (event: SelectChangeEvent<typeof selectedAmenities>) => {

        // Data for UI change

        const {
            target: { value },
        } = event;

        setSelectedAmenities(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Data for API request

        const selectedOptionIds = amenitiesData.options.$values
            .filter(option => value.includes(option.optionTitle))
            .map(option => option.option_id);

        const amenitiesInfoResponse = {
            selectedOptionIds
        };

        setReqAmenitiesData(amenitiesInfoResponse);
    };

    async function HandleGetlocalityEditFieldsData() {
        const tags = ['locations', 'amenities',]

        tags.map(async (tag: string) => {

            const apiUrlFieldsData = process.env.API_URL + 'companion/attributes/' + tag + '/options';

            const response = await fetch(
                apiUrlFieldsData,
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



            if (tag === 'locations') {
                setLocationsData(data);
            }
            if (tag === 'amenities') {
                setAmenitiesData(data);
            }
        })
    }

    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

    };

    // Handle confirm final data sending

    const finalDataSending = async () => {

        const body = {
            locationsSelectedOptions: reqLocationData.selectedOptionIds,
            amenitiesSelectedOptions: reqAmenitiesData.selectedOptionIds
        }

        setFinishedEditing(false);

        // Send data to API
        try {
            const response = await fetch(

                apiUrl,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFinishedEditing(true);
            setEditLocality(false);

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
                            <h1 className="mb-2">Editar Localidade</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-sm-4">
                                <div className="mb-3 position-relative">
                                    <div className="input-title">
                                        Locais que atendo
                                    </div>
                                    <div>
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            {/* <InputLabel>Comportamento sexual</InputLabel> */}
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={selectedLocations}
                                                onChange={handleChangeLocations}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {locationsData.options && locationsData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <Checkbox checked={selectedLocations.indexOf(option.optionTitle) > -1}
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
                                        Comodidades do Meu Local
                                    </div>
                                    <div>
                                        <FormControl sx={{ m: 1, width: '100%', marginLeft: '-1px' }} className="custom-select">
                                            {/* <InputLabel>Comportamento sexual</InputLabel> */}
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={selectedAmenities}
                                                onChange={handleChangeAmenities}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                                sx={{
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#D23C77',
                                                    },
                                                }}
                                                style={{ borderColor: '#ff4668' }}
                                            >
                                                {amenitiesData.options && amenitiesData.options['$values'].map((option: Option) => (
                                                    <MenuItem key={option.$id} value={option.optionTitle}>
                                                        <Checkbox checked={selectedAmenities.indexOf(option.optionTitle) > -1}
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
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => setEditLocality(false)}>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            onClick={finalDataSending}
                                            type="submit" className="btn btn-lg btn-primary">
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

export default LocalityEdit;
