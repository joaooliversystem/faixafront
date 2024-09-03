"use client"
import { useState, useEffect } from 'react';
import SearchResults from './searchResults';
import { useRouter } from "next/navigation";
function SearchLayout() {

    const [isWomen, setIsWomen] = useState(true);
    const [isMen, setIsMen] = useState(false);
    const [isTrans, setIsTrans] = useState(false);
    const [category, setCategory] = useState('woman');
    const [searchValue, setSearchValue] = useState('');
    const [newSearchValue, setNewSearchValue] = useState('');

    function SelectCategory(selectedCategory: any) {
        setCategory(selectedCategory);
    }

    useEffect(() => {

        const savedSearchValue = localStorage.getItem('search');
        if (savedSearchValue) {
            setSearchValue(savedSearchValue);
        }
    }, []);

    function HandleSearch(value: any) {
        localStorage.setItem('search', searchValue);
        setNewSearchValue(value);
    }

    function HandleKeyPress(event: any) {

        if (event.code === "Enter") {
            event.preventDefault();
            localStorage.setItem('search', searchValue);
            setNewSearchValue(searchValue);
        }
    }

    return (
        <>
            <section
                className="pt-5 pb-0 position-relative"
                style={{
                    backgroundImage: "url(files/images/banner_home.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    marginTop: "40px",
                }}
            >
                <div className="bg-overlay bg-dark opacity-8" />
                {/* Container START */}
                <div className="container">
                    <div className="py-5">
                        <div className="row position-relative">
                            <div className="col-lg-9 mx-auto d-flex flex-column">
                                <div className="text-center">
                                    {/* Title */}
                                    <h1 className="text-white">
                                        Procure acompanhantes perto de você
                                    </h1>
                                </div>
                                <div className="mx-auto d-inline-block bg-mode shadow rounded p-4 mt-5">
                                    {/* Form START */}
                                    <form
                                        onKeyDown={HandleKeyPress}
                                        className="row align-items-end g-4"
                                        onSubmit={(e) => HandleSearch(e)}>
                                        {/* Duration */}
                                        <div
                                            className="col-sm-5">
                                            <label className="form-label">Local</label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control ps-5 pe-5"
                                                    placeholder="Busque por cidade..."
                                                    value={searchValue}
                                                    onChange={(e) => setSearchValue(e.target.value)}
                                                    style={{
                                                        paddingRight: '30px'
                                                    }}
                                                />
                                                <i className="fa-solid fa-location-dot font-20 px-3 py-0"
                                                    style={{
                                                        position: 'absolute',
                                                        width: '40px',
                                                        height: '40px',
                                                        left: '0px',
                                                        top: '29%',
                                                    }}
                                                />
                                                <div
                                                    onClick={() => HandleSearch(searchValue)}
                                                    style={{
                                                        position: "absolute",
                                                        top: "30%",
                                                        right: "14px",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <span

                                                        className="fa fa-search" aria-hidden="true">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Time */}
                                        <div className="col-sm-7">
                                            <span className="d-inline-block form-label">
                                                Categoria
                                            </span>
                                            <div className="d-flex gap-2 ">
                                                <label
                                                    onClick={() => {
                                                        if (category !== 'woman') {
                                                            SelectCategory('woman')
                                                            setIsWomen(!isWomen);
                                                            setIsMen(false);
                                                            setIsTrans(false);
                                                        }

                                                    }}
                                                    className={`btn btn-outline-primary ${isWomen ? 'active' : ''}`}
                                                    htmlFor="btn-check1"
                                                >
                                                    Mulheres
                                                </label>
                                                <label
                                                    onClick={() => {
                                                        if (category !== 'man') {
                                                            SelectCategory('man');
                                                            setIsMen(!isMen);
                                                            setIsWomen(false);
                                                            setIsTrans(false);
                                                        }
                                                    }}
                                                    className={`btn btn-outline-primary ${isMen ? 'active' : ''}`}
                                                    htmlFor="btn-check2"
                                                >
                                                    Homens
                                                </label>
                                                <label
                                                    onClick={() => {
                                                        if (category !== 'trans') {
                                                            SelectCategory('trans');
                                                            setIsTrans(!isTrans);
                                                            setIsWomen(false);
                                                            setIsMen(false);
                                                        }
                                                    }}
                                                    className={`btn btn-outline-primary ${isTrans ? 'active' : ''}`}
                                                    htmlFor="btn-check3"
                                                >
                                                    Trans
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Form END */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SearchResults
                category={category}
                newSearchValue={newSearchValue}
            />
        </>
    )
}

export default SearchLayout;