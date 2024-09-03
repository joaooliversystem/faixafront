import Link from 'next/link'
import { useEffect } from 'react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function FormSent() {

    const router = useRouter();
    const { data: session, status } = useSession();

    // Getting user id from session

    type User = {
        $id?: string | null | undefined;
    };

    const user = session?.user as User;
    const userId = user?.$id;

    useEffect(() => {
        localStorage.setItem('newCompanion', 'true');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            signOut({
                redirect: false
            })
            router.replace('/login');
        }, 3000)
    }, []);


    return (
        <>
            <div
                style={{
                    marginTop: "-20px",
                }}
                className="container">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    {/* Main content START */}
                    {/* <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5">
                            <h1 className="mb-2">Formulário enviado</h1>
                            <p className="mb-0">
                                Aguarde aviso por e-mail de aprovação de seu cadastro.
                            </p>
                            <p className="mb-0">
                                Enquanto isso, <Link href={`/profile/feed/${userId}`}>complete seu perfil .</Link>
                            </p>
                        </div>
                    </div> */}
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        {/* Sign in START */}
                        <div className="card card-body text-center p-4 p-sm-5">
                            {/* <h1 className="mb-2 text-primary">Parabéns!</h1> */}
                            <h1 className="mb-2">Conta <span className="mb-2 text-primary">anunciante</span> criada com sucesso!</h1>
                            <p className="mb-0">
                                Rederionando para área de <strong>Login...</strong>
                            </p>
                            {/* <p className="mb-0">
                                Enquanto isso, <Link href={`/profile/feed/${userId}`}>complete seu perfil .</Link>
                            </p> */}
                        </div>
                        {/* Sign in START */}
                    </div>
                </div> {/* Row END */}
            </div>
        </>
    )
}

export default FormSent;
