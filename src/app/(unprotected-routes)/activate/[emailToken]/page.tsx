"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';

function PageActivation({ params }: { params: { emailToken: string } }) {

    const [userValidated, setUserValidated] = useState<boolean>(false);
    const apiUrl = process.env.API_URL + 'auth/activation/effect/' + params.emailToken;

    useEffect(() => {
        VerifyUser();
    }, []);

    async function VerifyUser() {
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                setUserValidated(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setUserValidated(false);
        }
    }

    return (
        <>
            {userValidated && (
                <>
                    <div className="row justify-content-center align-items-center vh-100 py-5">
                        {/* Main content START */}
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                            {/* Sign in START */}
                            <div className="card card-body text-center p-4 p-sm-5">
                                {/* Title */}
                                <h1 className="mb-2">Deu tudo certo!</h1>
                                <p className="mb-0">
                                    <Link
                                        href="/login">
                                        Clique aqui {` `}
                                    </Link>
                                    para fazer <strong>login</strong>
                                </p>
                            </div>
                            {/* Sign in START */}
                        </div>
                    </div> {/* Row END */}
                </>
            )}
            {!userValidated && (
                <>
                    <div className="row justify-content-center align-items-center vh-100 py-5">
                        {/* Main content START */}
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                            {/* Sign in START */}
                            <div className="card card-body text-center p-4 p-sm-5">
                                {/* Title */}
                                <h1 className="mb-2">Ocorreu um erro. Por favor, tente novamante</h1>
                            </div>
                            {/* Sign in START */}
                        </div>
                    </div> {/* Row END */}
                </>
            )}
        </>
    )
}

export default PageActivation