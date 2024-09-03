"use client"
import { useState } from 'react';
import { SyntheticEvent } from 'react';
import Link from 'next/link'

function ForgotPassword() {

    const [email, setEmail] = useState<string>('');
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const apiUrl = process.env.API_URL + 'forgot-password/';

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        if (!(email)) {
            alert('Por favor, preencha todos os campos');
            return;
        } else {

            try {
                setLoading(true)

                const requestBody = {
                    email: email,
                };

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    // throw new Error('Network response was not ok');
                    setTimeout(() => {
                        setLoading(false);
                        setTimeout(() => {
                            alert(`O e-mail ${email} não foi encontrado. Por favor verifique o e-mail fornecido`);
                        }, 200);
                    }, 1500);
                } else {
                    const data = await response.json();
                    setTimeout(() => {
                        setLoading(false);
                        setEmailSent(true);
                    }, 1500);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }


    return (
        <div className="container" style={{ position: 'relative', pointerEvents: loading ? 'none' : 'auto' }}>
            {loading && (
                <>
                    <div style={{ backgroundColor: '#EFF2F6', opacity: 0.5, zIndex: 1, position: 'fixed', width: '2000px', height: '2000px' }} ></div>
                    <div style={{ color: '#FF6883', zIndex: 2, position: 'absolute', top: '45%', left: '48%', width: '3rem', height: '3rem' }} className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </>
            )}
            <div className="row justify-content-center align-items-center vh-100 py-5">
                {/* Main content START */}
                <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                    {/* Sign in START */}
                    <div className="card card-body text-center p-4 p-sm-5">
                        {/* Title */}
                        {!emailSent && (
                            // {!emailSent && (
                            <>
                                <h1 className="mb-2">Esqueceu sua senha?</h1>
                                <p className="mb-0">Informe seu e-mail:</p>
                            </>
                        )}
                        {emailSent && (
                            // {emailSent && (
                            <>
                                <h1 className="mb-2">Email enviado!</h1>
                                <p className="mb-0">
                                    {`Um email de recuperação de senha foi enviado para: `}
                                    <strong>{email}</strong>
                                </p>
                            </>
                        )}
                        {!emailSent && (
                            // {!emailSent && (
                            <>
                                {/* Form START */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-sm-4">
                                    {/* Email */}
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={email}
                                            type="text"
                                            className="form-control"
                                            placeholder="E-mail *"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/* Button */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-lg btn-primary">
                                            Confirmar
                                        </button>
                                    </div>
                                    {/* Copyright */}
                                    <p className="mb-0 mt-3">©2024 <a target="_blank" href="https://faixarosa.com.br/">Faixa Rosa.</a> Todos os direitos reservados</p>
                                </form>
                                {/* Form END */}
                            </>
                        )}
                    </div>
                    {/* Sign in START */}
                </div>
            </div> {/* Row END */}
        </div>
    )
}

export default ForgotPassword;