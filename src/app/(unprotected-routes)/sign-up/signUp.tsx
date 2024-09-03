"use client"
import { useState } from 'react';
import { SyntheticEvent } from 'react';
import Link from 'next/link'

function SignUp() {

    const [name, setName] = useState<string>('');
    const [surName, setSurName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const apiUrl = process.env.API_URL + 'sign-up';

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        if (!(email && password && confirmPassword)) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailRegex.test(email)) {
            alert('Por favor, informe um e-mail válido')
            return
        }

        if (password !== confirmPassword) {
            alert('As senhas informadas devem ser iguais. Por favor, tente novamente')
            return
        }

        if (password.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres. Por favor, tente novamente')
            return
        }

        // Api Call for user registyer

        try {
            setLoading(true)

            const requestBody = {
                name: name,
                surName: surName,
                email: email,
                password: password,
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                setLoading(false);
                setTimeout(() => {
                    alert(`Já existe um usuário com email ${email}`);
                }, 200);
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
                                <h1 className="mb-2">Cadastre-se</h1>
                                <p className="mb-0">Informe seus dados abaixo:</p>
                            </>
                        )}
                        {emailSent && (
                            // {emailSent && (
                            <>
                                <h1 className="mb-2">E-mail enviado</h1>
                                <p className="mb-0">
                                    Seu cadastro foi realizado.
                                </p>
                                <p className="mb-0">
                                    <Link href="/login">Faça login</Link> e aproveite!
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
                                    {/* Password */}
                                    <div className="mb-3 position-relative">
                                        {/* Password */}
                                        <div className="input-group input-group-lg">
                                            <input
                                                value={password}
                                                className="form-control fakepassword"
                                                type="password"
                                                id="psw-input"
                                                placeholder="Senha *"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <span className="input-group-text p-0">
                                                {/* <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" /> */}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Confirm Password */}
                                    <div className="mb-3 position-relative">
                                        {/* Password */}
                                        <div className="input-group input-group-lg">
                                            <input
                                                value={confirmPassword}
                                                className="form-control fakepassword"
                                                type="password"
                                                id="psw-cfm-input"
                                                placeholder="Confirme sua senha *"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <span className="input-group-text p-0">
                                                {/* <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" /> */}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Remember me */}
                                    <div className="mb-3 d-sm-flex justify-content-between">
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                            <span
                                                style={{
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                <label className="form-check-label" htmlFor="rememberCheck">Lembrar de mim</label>
                                            </span>
                                        </div>
                                        <Link href="/login">Já tem conta?</Link>
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

export default SignUp;