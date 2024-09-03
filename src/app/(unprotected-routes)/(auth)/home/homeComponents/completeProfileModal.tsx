import router from 'next/router';
import './completeProfileModal.css'
import Link from 'next/link';

interface CompleteProfileModalProps {
    setDisplayCompleteProfileModal: any;
    session: any
}

function CompleteProfileModal({ setDisplayCompleteProfileModal, session }: CompleteProfileModalProps) {


    return (
        <>
            <div className="container overlay">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <h1 className="mb-2">Complete seu perfil agora mesmo!</h1>
                            <form
                                className="mt-sm-4 mb-6">
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => {
                                            setDisplayCompleteProfileModal(false)
                                        }}>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div className="d-grid">
                                        <Link
                                            href={'/profile/fotos/' + session?.user.companion}
                                        >
                                            <button className="btn btn-lg btn-primary">
                                                Completar perfil
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CompleteProfileModal;



