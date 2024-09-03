"use client"
import { Console } from "console";
import ResultCard from "./(searchComponents)/ResultCard";
import Link from 'next/link'
import { useEffect, useState } from 'react';
// import FuzzySearch from 'fuzzy-search';
// import unorm from 'unorm';

function SearchResults({ category }: any, { newSearchValue }: any) {
    interface CardData {
        cardType?: any;
        name?: any;
        companionId?: number;
        onlineStatus?: string;
        cardDescription?: string;
        serviceInfo?: string;
        servicePrice?: number;
        age?: number;
        ownPlace?: boolean;
        location?: string;
        cardLongDescription?: string;
        wppButton?: boolean;
        trans?: boolean;
        man?: boolean;
        woman?: boolean;
    }

    const searchValue = localStorage.getItem('search');
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [searchResult, setSearchResult] = useState<string[]>([]);
    const [emptyState, setEmptyState] = useState(false);


    // useEffect(() => {
    //     fuzzySearch(searchValue);
    // }, [searchValue]);

    useEffect(() => {

        if (newSearchValue) {
            // fuzzySearch(newSearchValue);
            FetchCardsData(searchValue, category);
        } else {
            FetchCardsData(searchValue, category);
        }
    }, [searchValue, category, newSearchValue, searchResult]);


    // Fuzzy search function in order to for companions based on location

    // function fuzzySearch(searchValue: any) {

    //     // This will change latter
    //     const possiblePlaces = ['Araçatuba - SP', 'São Paulo - SP'];

    //     if (searchValue) {
    //         const normalizedSearchValue = searchValue
    //             .toLowerCase()
    //             .normalize('NFD')
    //             .replace(/[\u0300-\u036f]/g, '');

    //         const searchResults = possiblePlaces.filter(place => {
    //             const normalizedPlace = place
    //                 .toLowerCase()
    //                 .normalize('NFD')
    //                 .replace(/[\u0300-\u036f]/g, '');

    //             const regex = new RegExp(normalizedSearchValue, 'i');
    //             return regex.test(normalizedPlace);
    //         });

    //         setSearchResult(searchResults);
    //     }
    // }


    // Cards API data fetch function
    async function FetchCardsData(searchValue: any, category: string) {

        // if (searchResult.length === 0) {
        //     setEmptyState(true);
        //     setCardsData([]);
        //     return;
        // }

        try {
            const requestBody = {
                location: searchValue,
                category: category
            };

            const response = await fetch(process.env.API_URL + 'companion/search', {
                method: 'POST',
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataJson = await response.text();
            const data = JSON.parse(dataJson);

            setCardsData(data.cards[`$values`]);

            if (data.cards[`$values`].length === 0) {
                setEmptyState(true);
            } else {
                setEmptyState(false);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <section className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 vstack">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row g-4">
                                        {/* Loop through cardsData and create columns */}
                                        {!emptyState && (
                                            cardsData.map((card, index) => (
                                                <div className="col-12 col-md-6 col-lg-4" key={index}
                                                >
                                                    <Link
                                                        // href={'/profile/feed/' + card.companionId}
                                                        href={'/profile/fotos/' + card.companionId}
                                                    >
                                                        <ResultCard
                                                            onClick={() => {
                                                                if (card.companionId) {
                                                                    localStorage.setItem('companionId', card.companionId.toString());
                                                                }
                                                            }}
                                                            cardType={card.cardType}
                                                            name={card.name}
                                                            onlineStatus={card.onlineStatus}
                                                            servicePrice={card.servicePrice}
                                                            age={card.age}
                                                            ownPlace={card.ownPlace}
                                                            location={card.location}
                                                            cardDescription={card.cardDescription}
                                                            cardLongDescription={card.cardLongDescription}
                                                        />
                                                    </Link>
                                                </div>
                                            ))
                                        )}
                                        {emptyState && (
                                            <div className="col-12">
                                                <div className="alert alert-danger text-center" role="alert">
                                                    Não encontramos resultados para sua busca
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchResults;