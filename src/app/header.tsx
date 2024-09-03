"use client";
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { isMobile as detectMobile } from "react-device-detect";
import HeaderMobile from "./headerMobile";

export default function Header() {

    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [signUp, setSignUp] = useState(false);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const authenticated = status == "authenticated";

    // Getting user id by sesssion

    // type User = {
    //     $id?: string | null | undefined;
    // };

    type CompanionId = {
        companion?: number | null | undefined;
    };

    const user = session?.user;

    if (user && 'companion' in user) {
        const companionId = user.companion;
    }

    useEffect(() => {

        // Set mobile detection on the client side
        setIsMobile(detectMobile);

        // Clean input field before going to search results page

        if (pathname.includes('/profile')) {
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }

        // Setting signUp state in order to hide header in sign up page

        if (pathname.includes('/sign-up')) {
            setSignUp(true);
        } else {
            setSignUp(false);
        }

        if (pathname.includes('/search')) {
            if (inputRef.current) {
                inputRef.current.value = '';
                setSearch('');
            }
        }

    }, [pathname])

    // Handle user search
    const HandleKeyPress = (e: any) => {

        // Setting the search value in local storage

        localStorage.setItem('search', search);

        if (pathname.includes('/search')) {
            window.location.reload()

        } else {

            // Clean input field befora goint to search results page

            if (inputRef.current) {
                inputRef.current.value = '';
                // setSearch('');
            }

            // Navigate to search results

            e.preventDefault();
            if (search) {
                router.replace('/search');
            }
        }
    };

    // Handle user logout

    async function Logout() {
        router.replace('/logout');
        await signOut({
            redirect: false
        })
    }

    return (
        <>
            {!isMobile ? (
                <header className="navbar-light fixed-top header-static bg-mode">
                    {/* Logo Nav START */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Responsive navbar toggler */}
                            <button
                                className="navbar-toggler ms-auto icon-md btn btn-light p-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                                aria-controls="navbarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-animation">
                                </span>
                            </button>
                            {/* Main navbar START */}
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                {/* Logo START */}
                                <div
                                    onClick={() => {
                                        if (inputRef.current) {
                                            inputRef.current.value = '';
                                            setSearch('');
                                        }
                                    }}
                                >
                                    <Link href="/home">
                                        <span
                                            className='navbar-brand align-items-center d-flex'
                                            style={{
                                                // marginLeft: session ? '180px' : '-90%',
                                                marginLeft: signUp ? '320px' : '0px',
                                                position: signUp ? 'fixed' : 'static',
                                                top: signUp ? '0px' : '0px',
                                            }}
                                        >
                                            <img
                                                className="light-mode-item navbar-brand-item"
                                                src="/files/images/logo.png"
                                                alt="logo"
                                            />
                                            <img
                                                className="dark-mode-item navbar-brand-item"
                                                src="/files/images/logo.png"
                                                alt="logo"
                                            />
                                        </span>
                                    </Link>
                                </div>
                                {/* Logo END */}
                                {/* Nav Search START */}
                                {/* Top bar start */}
                                <div
                                    style={{
                                        width: '300px',
                                        marginLeft: signUp ? '32%' : '0',
                                    }}
                                    className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                                    <div
                                        className="nav-item w-100"
                                        style={{
                                            position: 'relative',
                                        }}
                                    >
                                        <form
                                            onSubmit={HandleKeyPress}
                                            className="rounded position-relative"
                                            style={{ width: '100%' }}
                                        >
                                            <div style={{ position: 'relative' }}>
                                                <input
                                                    ref={inputRef}
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    className="form-control ps-5 bg-light"
                                                    type="text"
                                                    placeholder="Busque por cidade..."
                                                    aria-label="Search"
                                                    style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: signUp ? '7px' : '0px' }}

                                                />
                                                <div
                                                    onClick={HandleKeyPress}
                                                    className="bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                                    style={{
                                                        cursor: 'pointer',
                                                        left: '85%',
                                                        bottom: '2%',
                                                        transform: 'translateY(-50%)',
                                                    }}
                                                >
                                                    <span className="fa fa-search" aria-hidden="true"></span>
                                                </div>
                                                <button
                                                    className="btn"
                                                    type="submit"
                                                    style={{
                                                        position: 'absolute',
                                                        width: '40px',
                                                        height: '40px',
                                                        left: '-8px',
                                                        top: '0px',

                                                    }}

                                                >
                                                    <i className="fa-solid fa-location-dot font-20 px-3 py-0" />
                                                </button>
                                            </div>
                                        </form>
                                        {/* Top bar end */}
                                    </div>
                                </div>
                                {/* Nav Search END */}
                            </div>
                            {/* Main navbar END */}
                            {/* Nav right START */}
                            <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                                {/* User Logged in icons START */}

                                {(session && (
                                    <>
                                        <li className="nav-item ms-2">
                                            <a
                                                className="nav-link bg-light icon-md btn btn-light p-0"
                                                href="#"
                                            >
                                                <i className="bi bi-chat-left-text-fill fs-6"> </i>
                                            </a>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <a
                                                className="nav-link bg-light icon-md btn btn-light p-0"
                                                href="#"
                                            >
                                                <i className="bi bi-gear-fill fs-6"> </i>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown ms-2">
                                            <a
                                                className="nav-link bg-light icon-md btn btn-light p-0"
                                                href="#"
                                                id="notifDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-bs-auto-close="outside"
                                            >
                                                <span className="badge-notif animation-blink" />
                                                <i className="bi bi-bell-fill fs-6"> </i>
                                            </a>
                                            <div
                                                className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                                                aria-labelledby="notifDropdown"
                                            >
                                                <div className="card">
                                                    <div className="card-header d-flex justify-content-between align-items-center">
                                                        <h6 className="m-0">
                                                            Notificações
                                                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                                                                4 novas
                                                            </span>
                                                        </h6>
                                                        <a className="small" href="#">
                                                            Limpar tudo
                                                        </a>
                                                    </div>
                                                    <div className="card-body p-0">
                                                        <ul className="list-group list-group-flush list-unstyled p-2">
                                                            {/* Notif item */}
                                                            <li>
                                                                <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                                        <img
                                                                            className="avatar-img rounded-circle"
                                                                            src="/assets/images/avatar/11.jpg"
                                                                            alt="mockup"
                                                                        />
                                                                    </div>
                                                                    <div className="ms-sm-3">
                                                                        <div className="d-flex">
                                                                            <p className="small mb-2">
                                                                                <b>Jamile Braga</b> visitou o seu perfil
                                                                            </p>
                                                                            <p className="small ms-3 text-nowrap">
                                                                                Agora
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer text-center">
                                                        <a href="#" className="btn btn-sm btn-primary-soft">
                                                            Ver todas as notificações
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Avatar start */}
                                        <li
                                            onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
                                            className="nav-item ms-2 dropdown">
                                            <a
                                                className="nav-link btn icon-md p-0"
                                                href="#"
                                                id="profileDropdown"
                                                role="button"
                                                data-bs-auto-close="outside"
                                                data-bs-display="static"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    className="avatar-img rounded-2"
                                                    src="/assets/images/avatar/07.jpg"
                                                    alt="mockup"
                                                />
                                            </a>
                                            <ul
                                                className={`dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3 ${showAvatarDropdown ? 'show' : ''}`}
                                                style={{ left: '-200%', transform: 'translateX(-50%)', marginTop: '5px' }}
                                                aria-labelledby="profileDropdown"
                                            >
                                                {(session.user as any).companion && (session.user as any).companion > 0 && (
                                                    <li className="px-3">
                                                        <div className="d-flex align-items-center position-relative">
                                                            {/* Avatar */}
                                                            <div className="avatar me-3">
                                                                <img
                                                                    className="avatar-img rounded-circle"
                                                                    src="/assets/images/avatar/07.jpg"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div>
                                                                <a className="h6 stretched-link" href="#">
                                                                    {session.user?.image}
                                                                </a>
                                                                <p className="small m-0">{session.user?.email}</p>
                                                            </div>
                                                        </div>
                                                        <Link className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href={"/profile/fotos/" + (session.user as any).companion}>
                                                            Meu perfil
                                                        </Link>
                                                    </li>
                                                )}
                                                {/* Links */}
                                                {/* {authenticated && (
                                                    <>
                                                        {(session.user as any).companion && (session.user as any).companion <= 0 && (
                                                            <li
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => router.replace("/become-advertiser")}
                                                            >
                                                                <div className="dropdown-item">
                                                                    <i className="fa-fw fas fa-bullhorn me-2" style={{ fontSize: '0.85rem' }}></i>
                                                                    Quero ser anunciante
                                                                </div>
                                                            </li>
                                                        )}
                                                    </>
                                                )} */}
                                                {/* <>
                                                    {(session.user as any).companion && (session.user as any).companion > 0 && (
                                                        <li
                                                            style={{
                                                                cursor: "pointer"
                                                            }}
                                                            onClick={() => router.replace("/advertisers")}>
                                                            <div
                                                                className="dropdown-item">
                                                                <i className="fa-fw fas fa-bullhorn me-2" style={{ fontSize: '0.85rem' }}></i>
                                                                Área do Anunciante
                                                            </div>
                                                        </li>
                                                    )}
                                                </> */}
                                                <>
                                                    {(session.user as any).companion === 0 && (
                                                        <li
                                                            style={{
                                                                cursor: "pointer"
                                                            }}
                                                            onClick={() => router.replace("/become-advertiser")}>
                                                            <div
                                                                className="dropdown-item">
                                                                <i className="fa-fw fas fa-bullhorn me-2" style={{ fontSize: '0.85rem' }}></i>
                                                                Quero ser anunciante
                                                            </div>
                                                        </li>
                                                    )}
                                                </>
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="fa-fw fas fa-lock me-2" style={{ fontSize: '0.85rem' }}></i>
                                                        Alterar senha
                                                    </div>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={Logout}>
                                                    <div className="dropdown-item bg-danger-soft-hover">
                                                        <i className="bi bi-power fa-fw me-2" />
                                                        Sair
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* Avatar end */}
                                    </>
                                )
                                )}
                                {/* User Logged in icons END */}
                                {/* Notification dropdown END */}
                                {/* User not Logged in icons START */}
                                {(!session && (
                                    <>
                                        {!signUp && (
                                            <div
                                                style={{
                                                    marginLeft: "20px",
                                                    width: '100px'
                                                }}
                                            >
                                                <Link
                                                    style={{
                                                        width: '100px',
                                                        display: 'flex',
                                                        marginLeft: '10px',
                                                        alignItems: 'center',
                                                    }}
                                                    href="/login">
                                                    <div
                                                        className="fa-solid fa-sign-in"
                                                        style={{
                                                            fontSize: "18px",
                                                            color: "#D33B77",
                                                        }}
                                                    ></div>
                                                    <div
                                                        style={{
                                                            fontSize: "18px",
                                                            marginLeft: "8px",
                                                            fontWeight: 'bold',
                                                            color: "#D33B77",
                                                        }}
                                                    >LOGIN</div>
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )
                                )}
                                {/* User not Logged in icons END */}
                                {/* Profile START */}
                            </ul>
                            {/* Nav right END */}
                        </div>
                    </nav >
                    {/* Logo Nav END */}
                </header >
            ) :
                (
                    <HeaderMobile />
                )
            }
        </>
    )
}