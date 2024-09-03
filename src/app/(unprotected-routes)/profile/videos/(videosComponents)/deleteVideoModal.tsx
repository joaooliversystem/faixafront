import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

type UploadPhotoModalProps = {
    setOpenDelVideoModal: any;
    video: any;
    videoId: any;
    companionId: any;
};


type User = {
    $id?: string | null | undefined;
    companion?: number | null | undefined;
  };
  

function DeleteVideoModal({ setOpenDelVideoModal, videoId, companionId }: UploadPhotoModalProps) {

    const { data: session } = useSession();
    const user = session?.user as User;
    const sessionCompanionId = user?.companion;
    const apiUrl = process.env.API_URL + "companion/delete-videos/" + sessionCompanionId;

    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])


    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        const body = {
            videoId,
        };
    
        try {
          const response = await fetch(
            apiUrl,
            {
              method: "POST",
              headers: {
                Accept: "text/plain",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          alert("Video removido com sucesso!");
          setOpenDelVideoModal(false);
    
          const data = await response.json();
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    return (
        <>
            <div className="back-drop"></div>
            <div className="container overlay">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body text-center p-4 p-sm-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <h1 className="mb-2">Confirma remoção do vídeo?</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-sm-4">
                                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                                    <div className="d-grid">
                                        <button className="btn btn-lg btn-secondary" onClick={() => {
                                            setOpenDelVideoModal(false)
                                        }}>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-lg btn-primary">
                                            Confirmar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteVideoModal;