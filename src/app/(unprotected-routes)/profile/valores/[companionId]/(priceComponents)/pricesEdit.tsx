import { useEffect, useState, SyntheticEvent } from 'react';
import './pricesEdit.css'

interface PricesEditProps {
    setEditPrices: (value: boolean) => void;
    pricesEditInfo: any;
    setFinishedEditing: (value: boolean) => void;
    companionId: string;
    oneHourPrice: Number;
    twoHourPrice: Number;
    overnightPrice: Number;
    dailyRatePrice: Number;
    pixInfo: boolean;
    cashInfo: boolean;
    debitInfo: boolean;
    creditInfo: boolean;
}

function PricesEdit({ setEditPrices, pricesEditInfo, setFinishedEditing, companionId, cashInfo, debitInfo, creditInfo, pixInfo, oneHourPrice, twoHourPrice, overnightPrice, dailyRatePrice }: PricesEditProps) {
    const [pix, setPix] = useState(pixInfo);
    const [credit, setCredit] = useState(creditInfo);
    const [debit, setDebit] = useState(debitInfo);
    const [cash, setCash] = useState(cashInfo);
    const [oneHour, setOneHour] = useState(oneHourPrice.toString());
    const [twoHours, setTwoHours] = useState(twoHourPrice.toString());
    const [overnight, setOvernight] = useState(overnightPrice.toString());
    const [dailyRate, setDailyRate] = useState(dailyRatePrice.toString());

    const apiUrl = process.env.API_URL + 'companion/edit-prices/' + companionId;

    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        setFinishedEditing(false);


        // Prices to integer and remove payment method keys

        const body = {
            pix: pix,
            cash: cash,
            debit: debit,
            credit: credit,
            oneHour: oneHour,
            twoHours: twoHours,
            overnight: overnight,
            dailyRate: dailyRate
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
                    body: JSON.stringify(body)
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // This will be executed if the request was successful
            const data = await response.json();

            setFinishedEditing(true);
            setEditPrices(false);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const toggleStyle = { width: '55px', height: '35px', outline: 'none', boxShadow: 'none' }


    return (
        <>
            <div className="back-drop"></div>
            <div className="container overlay">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <h1 className="mb-2">Editar Valores</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-sm-4">
                                <div className="mb-3 position-relative">
                                    <div className="services-edit-inputs-container">
                                        <div className="services-edit-inputs-container">
                                            <div className="input-title" >
                                                1 hora
                                            </div>
                                            <div
                                                className="mb-3 input-group-lg"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={oneHour}
                                                    onChange={(e) => {
                                                        const inputOneHour = e.target.value;
                                                        const regex = /^\d*\.?\d*$/;
                                                        if (regex.test(inputOneHour) || inputOneHour === '') {
                                                            setOneHour(inputOneHour);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="services-edit-inputs-container">
                                            <div className="input-title" >
                                                2 horas
                                            </div>
                                            <div
                                                className="mb-3 input-group-lg"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={twoHours}
                                                    onChange={(e) => setTwoHours(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="services-edit-inputs-container">
                                            <div className="input-title" >
                                                Pernoite
                                            </div>
                                            <div
                                                className="mb-3 input-group-lg"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={overnight}
                                                    onChange={(e) => setOvernight(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="services-edit-inputs-container">
                                            <div className="input-title" >
                                                Diária
                                            </div>
                                            <div
                                                className="mb-3 input-group-lg"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={dailyRate}
                                                    onChange={(e) => setDailyRate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-title prices-title" >
                                    Formas de pagamento
                                </div>
                                <div className="divider-line"></div>
                                <div className="d-flex gap-3 justify-content-between align-items-center toggles-container w-100">
                                    {/* <div className="mb-3 position-relative"> */}
                                    <div>
                                        <div className="input-title">
                                            Pix
                                        </div>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                checked={pix}
                                                onChange={(event) => {
                                                    setPix(event.target.checked);
                                                }}
                                                style={toggleStyle}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-title">
                                            Crédito
                                        </div>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                checked={credit}
                                                onChange={(event) => {
                                                    setCredit(event.target.checked);
                                                }}
                                                style={toggleStyle}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-title">
                                            Débito
                                        </div>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                checked={debit}
                                                onChange={(event) => {
                                                    setDebit(event.target.checked);
                                                }}
                                                style={toggleStyle}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-title">
                                            Dinheiro
                                        </div>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                checked={cash}
                                                onChange={(event) => {
                                                    setCash(event.target.checked);
                                                }}
                                                style={toggleStyle}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => {
                                            setEditPrices(false)
                                        }}>
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

export default PricesEdit;
