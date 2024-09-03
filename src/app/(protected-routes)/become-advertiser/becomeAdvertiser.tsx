"use client"
import { signOut, useSession, } from "next-auth/react";
import React, { useState, SyntheticEvent, useEffect } from 'react';
import FormSent from './formSent';

function BecomeAdvertiser() {

    const [isCompanion, setIsCompanion] = useState(false);
    const { data: session, status, update } = useSession();
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [birth, setBirth] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [identityNumber, setIdentityNumber] = useState('');
    const [mobile, setMobile] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [townShip, setTownShip] = useState('');
    const [district, setDistrict] = useState('');
    const [formSent, setFormSent] = useState(false);
    const InputMask = require("react-input-mask")
    const [loading, setLoading] = useState<boolean>(false);
    const apiUrl = process.env.API_URL + 'advertiser-data/';

    // Getting user ID from session

    type Companion = {
        companion?: number | null | undefined;
    };

    type User = {
        companion: Companion;
    };

    type CustomSession = {
        user?: User;
    };

    const companionId = (session as CustomSession)?.user?.companion;

    const sessionInfo = session as CustomSession

    // Checking if user is companion

    useEffect(() => {

        if (typeof companionId === 'number' && companionId !== 0) {
            setIsCompanion(true);
        }

    }, [companionId, isCompanion]);


    // useEffect(() => {
    //     if (status === 'authenticated') {
    //         setIsCompanion(true);
    //     }
    // }, [status])

    // Function to request submission of form data to API

    const HandleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (!(name && surName && birth && motherName && fatherName && identityNumber && mobile && street && number && townShip && district)) {
            alert('Por favor, preencha todos os campos');
            return;
        } else {
            setLoading(true);

            try {

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${session?.accessToken}`,
                    },
                    body: JSON.stringify({
                        name: name,
                        surname: surName,
                        birth: birth,
                        mother: motherName,
                        father: fatherName,
                        identity: identityNumber,
                        mobile: mobile,
                        street: street,
                        number: number,
                        township: townShip,
                        district: district
                    })
                });

                if (!response.ok) {
                    // throw new Error('Network response was not ok');
                    setLoading(false);
                    setTimeout(() => {
                        alert('Usuário já cadastrado como anunciente. Por favor, confira os dados fornecidos:');
                    }, 200);
                } else {
                    setLoading(false);
                    setFormSent(true);
                }

                const dataJson = await response.text();
                const data = JSON.parse(dataJson);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <>
            {!formSent && (
                <div className="container">
                    {loading && (
                        <>
                            <div style={{ backgroundColor: '#EFF2F6', opacity: 0.5, zIndex: 1, position: 'fixed', width: '100%', height: '100%' }} ></div>
                            <div style={{ color: '#FF6883', zIndex: 2, position: 'absolute', top: '53%', left: '49%', width: '3rem', height: '3rem' }} className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </>
                    )}
                    <div className="row justify-content-center align-items-center vh-100 py-5">
                        {/* Main content START */}
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                            {/* Sign in START */}
                            <div className="card card-body text-center p-4 p-sm-5">
                                <h1 className="mb-2">Seja um anunciante</h1>
                                <p className="mb-0">Informe seus dados abaixo:</p>
                                {/* Form satart */}
                                <form
                                    onSubmit={HandleSubmit}
                                    onKeyDown={(e) =>
                                    (
                                        e.key === 'Enter' && e.preventDefault(), HandleSubmit
                                    )
                                    }
                                    className="mt-sm-4">
                                    {/* Name */}
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={name}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nome *"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    {/* Sobrenome */}
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={surName}
                                            type="text"
                                            className="form-control"
                                            placeholder="Sobrenome *"
                                            onChange={(e) => setSurName(e.target.value)}
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="mb-3 input-group-lg">
                                        <InputMask
                                            mask="99/99/9999"
                                            value={birth}
                                            onChange={(e: any) => setBirth(e.target.value)}
                                        >
                                            {(inputProps: any) => <input {...inputProps} type="text" className="form-control" placeholder="Data de nascimento *" />}
                                        </InputMask>
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={motherName}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nome da mãe *"
                                            onChange={(e) => setMotherName(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={fatherName}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nome do pai *"
                                            onChange={(e) => setFatherName(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <InputMask
                                            mask="99.999.999-9"
                                            value={identityNumber}
                                            onChange={(e: any) => setIdentityNumber(e.target.value)}
                                        >
                                            {(inputProps: any) => <input {...inputProps} type="text" className="form-control" placeholder="Número de identidade *" />}
                                        </InputMask>
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <InputMask
                                            mask="(99) 99999-9999"
                                            value={mobile}
                                            onChange={(e: any) => setMobile(e.target.value)}
                                        >
                                            {(inputProps: any) => <input {...inputProps} type="text" className="form-control" placeholder="Número de celular *" />}
                                        </InputMask>
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={street}
                                            type="text"
                                            className="form-control"
                                            placeholder="Logradouro *"
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={number}
                                            type="text"
                                            className="form-control"
                                            placeholder="Número *"
                                            onChange={(e) => setNumber(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={townShip}
                                            type="text"
                                            className="form-control"
                                            placeholder="Cidade *"
                                            onChange={(e) => setTownShip(e.target.value)}
                                        />
                                    </div>
                                    <div
                                        className="mb-3 input-group-lg"
                                    >
                                        <input
                                            value={district}
                                            type="text"
                                            className="form-control"
                                            placeholder="Bairro *"
                                            onChange={(e) => setDistrict(e.target.value)}
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
                            </div>
                            {/* Form end */}
                        </div>
                    </div> {/* Row END */}
                </div>
            )}
            {isCompanion && (
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    {/* Main content START */}
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        {/* Sign in START */}
                        <div className="card card-body text-center p-4 p-sm-5">
                            <h1 className="mb-2">Você já é anunciente</h1>
                            {/* Form satart */}
                        </div>
                        {/* Form end */}
                    </div>
                </div>
            )}
            {formSent && (
                <FormSent />
            )}
        </>
    );
}

export default BecomeAdvertiser;