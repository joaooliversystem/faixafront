"use client"
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

function HeaderMobile() {

    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [signUp, setSignUp] = useState(false);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const [displaySearchBar, setDisplaySearchBar] = useState(false);

    useEffect(() => {

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

        setDisplaySearchBar(false);
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
            <header className="navbar-light fixed-top header-static bg-mode">
                <nav>
                    <div
                        className="container d-flex justify-content-center"
                        style={{ flexDirection: 'column' }}
                    >
                        <div
                            className='align-items-center d-flex'
                            style={{ width: '100%', justifyContent: 'space-between' }}
                        >
                            <div
                                style={{ marginTop: '-10px' }}
                                onClick={() => {
                                    setDisplaySearchBar(!displaySearchBar);
                                }}
                            ><span
                                className="nav-link bg-light icon-md btn btn-light p-0"
                            >
                                    <span className="fa fa-search" aria-hidden="true"></span>
                                </span></div>
                            <div
                                style={{ marginLeft: '60px' }}
                                className='d-flex align-items-center justify-content-center'>
                                <div
                                    style={{ marginBottom: '8px' }}
                                    onClick={() => {
                                        if (inputRef.current) {
                                            inputRef.current.value = '';
                                            setSearch('');
                                        }
                                    }}
                                >
                                    <Link href="/home">
                                        <div
                                            className='navbar-brand align-items-center d-flex'
                                        >
                                            <img
                                                className="light-mode-item navbar-brand-item"
                                                src="/files/images/logo.png"
                                                alt="logo"
                                                style={{ width: '18px', height: 'auto' }}
                                            />
                                            <img
                                                className="dark-mode-item navbar-brand-item"
                                                src="/files/images/logo.png"
                                                alt="logo"
                                                style={{ width: '18px', height: 'auto' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    style={{
                                        fontSize: "20px",
                                        background: "-webkit-linear-gradient(45deg, #D23C77, #DD4124)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: "bold",
                                        marginTop: "-7px",
                                    }}
                                    className="text-center px-2 px-md-0"
                                >
                                    <Link href="/home">Faixa Rosa</Link>
                                </div>
                            </div>
                            {session ? (
                                <div>
                                    <ul style={{ listStyleType: 'none', marginTop: '10px' }}>
                                        <li
                                            onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
                                            className="nav-item ms-2 dropdown"
                                            style={{
                                                position: 'relative'
                                            }}
                                        >
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
                                                className={`dropdown-menu dropdown-animation pt-3 small me-md-n3 ${showAvatarDropdown ? 'show' : ''}`}
                                                aria-labelledby="profileDropdown"
                                                style={{
                                                    listStyleType: 'none',
                                                    position: 'absolute',
                                                    right: '10%'
                                                }}
                                            >
                                                {/* Profile info */}
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
                                                                {localStorage.getItem('18yo')}
                                                            </a>
                                                            <p className="small m-0">Cliente</p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                                                        href="#"
                                                    >
                                                        Ver perfil
                                                    </a>
                                                </li>
                                                {/* Links */}
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() => router.replace("/become-advertiser")}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="fa-fw fas fa-bullhorn me-2" style={{ fontSize: '0.85rem' }}></i>
                                                        Quero ser anunciante
                                                    </div>
                                                </li>
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() => router.replace("/advertisers")}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="fa-fw fas fa-bullhorn me-2" style={{ fontSize: '0.85rem' }}></i>
                                                        Área de Anunciantes
                                                    </div>
                                                </li>
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
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="bi bi-gear-fill fs-6" style={{ fontSize: '0.85rem' }}></i>
                                                        <span
                                                            style={{
                                                                marginLeft: '10px'
                                                            }}
                                                        >Configurações</span>
                                                    </div>
                                                </li>
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="bi bi-bell-fill fs-6" style={{ fontSize: '0.85rem' }}></i>
                                                        <span
                                                            style={{
                                                                marginLeft: '10px'
                                                            }}
                                                        >Notificações</span>
                                                    </div>
                                                </li>
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <div className="dropdown-item">
                                                        <i className="bi bi-chat-left-text-fill fs-6" style={{ fontSize: '0.85rem' }}></i>
                                                        <span
                                                            style={{
                                                                marginLeft: '10px'
                                                            }}
                                                        >Mensagens</span>
                                                    </div>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li
                                                    style={{
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={Logout}
                                                >
                                                    <div className="dropdown-item bg-danger-soft-hover">
                                                        <i className="bi bi-power fa-fw me-2" />
                                                        Sair
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        marginRight: '10px'
                                    }}
                                >
                                    <ul style={{ listStyleType: 'none', marginTop: '10px' }}>
                                        <li
                                            onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
                                            className="nav-item ms-2 dropdown"
                                            style={{
                                                position: 'relative'
                                            }}
                                        >
                                            <Link
                                                className="nav-link btn icon-md p-0 primary"
                                                href="/login"
                                                style={{
                                                    color: "#D33B77",
                                                    fontWeight: 'bold',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                LOGIN
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {displaySearchBar && (
                            <div
                                style={{ display: 'flex', marginRight: '13%' }}
                            >
                                <form
                                    onSubmit={HandleKeyPress}
                                    className="rounded position-relative"
                                    style={{ width: '80%' }}
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
                                            style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: signUp ? '7px' : '0px', backgroundColor: 'white' }}

                                        />
                                        <div
                                            onClick={HandleKeyPress}
                                            className="bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                            style={{
                                                cursor: 'pointer',
                                                left: '80%',
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
                            </div>
                        )}
                    </div>
                </nav>
            </header >
        </>
    )
}

export default HeaderMobile;
