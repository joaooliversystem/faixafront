
"use client"
import { useEffect, useState } from 'react';
import PricesEdit from './(priceComponents)/pricesEdit';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";

function Prices() {

    interface PeriodPriceData {
        id: string;
        period: string;
        periodPrice: number;
    }

    const [credit, setCredit] = useState(false);
    const [debit, setDebit] = useState(false);
    const [pix, setPix] = useState(false);
    const [cash, setCash] = useState(false);
    const [oneHourPrice, setOneHourPrice] = useState<number>(0);
    const [twoHourPrice, setTwoHourPrice,] = useState<number>(0);
    const [overnightPrice, setOvernightPrice] = useState<number>(0);
    const [dailyRate, setDailyRate] = useState<number>(0);
    const [editPrices, setEditPrices] = useState(false);
    const [finishedEditing, setFinishedEditing] = useState(false);
    const [pricesEditInfo, setPricesEditInfo] = useState([]);
    // const companionId = localStorage.getItem('companionId');
    const pathname = usePathname();
    const companionId = pathname.split('/').pop() || '';
    const apiUrl = process.env.API_URL + 'companion/prices/' + companionId;
    const { data: session, status } = useSession();
    const [isUserOwner, setIsUserOwner] = useState(false);

    type User = {
        $id?: string | null | undefined;
        companion?: number | null | undefined;
    };

    const user = session?.user as User;
    const userId = user?.$id;
    const sessionCompanionId = (user?.companion);

    // Checking if the page user is also the page companion (to show edit button) 

    useEffect(() => {
        if (companionId == sessionCompanionId?.toString()) {
            setIsUserOwner(true);
        }
    }, [userId])

    // Fetching page data
    useEffect(() => {
        FetchPricesData();
    }, [editPrices]);


    // Alert for successfully finish editing
    useEffect(() => {
        if (finishedEditing) {
            setTimeout(() => {
                alert("Dados editados com sucesso!")
            }, 500);
        }
    }, [finishedEditing])

    // Prices API data fetch function
    async function FetchPricesData() {

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

            // Setting response data and parsing JSON

            const dataJson = await response.text();
            const data = JSON.parse(dataJson);

            // Prices

            setOneHourPrice(data.oneHour);
            setTwoHourPrice(data.twoHours);
            setOvernightPrice(data.overnight);
            setDailyRate(data.dailyRate);

            // Payment methods

            setPix(data.pix);
            setCredit(data.credit);
            setDebit(data.debit);
            setCash(data.cash);

            // preparing Data for edit component

            const dataCopy = data;
            delete dataCopy['$id'];
            delete dataCopy.paymentMethod['$id'];
            delete dataCopy.prices['$id'];
            setPricesEditInfo(data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            {editPrices && (
                <>
                    <PricesEdit
                        setEditPrices={setEditPrices}
                        pricesEditInfo={pricesEditInfo}
                        setFinishedEditing={setFinishedEditing}
                        companionId={companionId}
                        oneHourPrice={oneHourPrice}
                        twoHourPrice={twoHourPrice}
                        overnightPrice={overnightPrice}
                        dailyRatePrice={dailyRate}
                        pixInfo={pix}
                        cashInfo={cash}
                        debitInfo={debit}
                        creditInfo={credit}
                    />
                </>
            )}
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h5 className="card-title">Valores
                        {isUserOwner && (
                            <span className='edit-icon-1' style={{ display: 'inline', marginLeft: '8px' }} onClick={() => setEditPrices(true)}>
                                <i className="bi bi-pencil-square"></i>
                            </span>
                        )}
                    </h5>
                </div>
                <div className="card-body d-flex flex-column align-items-center ">
                    <ul
                        className="list-group list-group-flush"
                        style={{ width: "90%", maxWidth: "900px" }}
                    >
                        <li className="list-group-item d-flex align-items-center justify-content-between">
                            <span>1 hora</span>
                            <span className="fw-bold">
                                R$ {oneHourPrice}
                            </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between">
                            <span>2 horas</span>
                            <span className="fw-bold">
                                R$ {twoHourPrice}
                            </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between">
                            <span>Pernoite</span>
                            <span className="fw-bold">
                                R$ {overnightPrice}
                            </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between">
                            <span>Diária</span>
                            <span className="fw-bold">
                                R$ {dailyRate}
                            </span>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-center flex-column mt-4 ">
                        <h6 className="mb-4">Formas de Pagamento:</h6>
                        <div className="d-flex align-items-center justify-content-center gap-4">
                            <div className={`d-flex align-items-center justify-content-center flex-column ${cash ? 'text-primary' : 'opacity-50'}`}>
                                <i className="bi bi-cash-stack fs-2"></i>
                                <span>Dinheiro</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center flex-column ${pix ? 'text-primary' : 'opacity-50'}`}>
                                <i className="fa-brands fa-pix fs-2 d-flex align-items-center"
                                    style={{ height: "42px" }}
                                ></i>
                                <span>Pix</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center flex-column ${debit ? 'text-primary' : 'opacity-50'}`}>
                                <i className="bi bi-credit-card-fill fs-2"></i>
                                <span>Debito</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center flex-column ${credit ? 'text-primary' : 'opacity-50'}`}>
                                <i className="bi bi-credit-card-fill fs-2"></i>
                                <span>Credito</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prices;