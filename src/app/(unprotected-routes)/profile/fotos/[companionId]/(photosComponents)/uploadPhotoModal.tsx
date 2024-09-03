import { useState, useEffect } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { useSession } from "next-auth/react";

type UploadPhotoModalProps = {
  setOpenUplModal: any;
  picture: any;
  setPicture: React.Dispatch<React.SetStateAction<any>>;
  companionId: any;
};

type User = {
  $id?: string | null | undefined;
  companion?: number | null | undefined;
};

function UploadPhotoModal({
  setOpenUplModal,
  picture,
  setPicture,
  companionId,
}: UploadPhotoModalProps) {

  const [loadingUplPhoto, setLoadingUplPhoto] = useState(false);
  const { data: session } = useSession();
  const user = session?.user as User;
  const sessionCompanionId = user?.companion;
  const apiUrl = process.env.API_URL + "companion/upload-image/" + sessionCompanionId;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoadingUplPhoto(true);

    const formData = new FormData();
    formData.append("file", picture);
    
    try {
      const response = await fetch(
        apiUrl,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Foto enviada com sucesso!");
      setPicture(null);
      setOpenUplModal(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoadingUplPhoto(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {loadingUplPhoto && (
        <>
          <div className="position-relative">
            <div
              style={{
                left: "38.5%",
                top: "38.5%",
                backgroundColor: "#EFF2F6",
                opacity: 0.5,
                zIndex: 6,
                position: "fixed",
                width: "470px",
                height: "321px",
              }}
            ></div>
            <div
              className="position-absolute spinner-border"
              style={{
                color: "#FF6883",
                zIndex: 7,
                position: "absolute",
                top: "50%",
                left: "75%",
                width: "3rem",
                height: "3rem",
              }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}
      <div className="back-drop"></div>
      <div className="container overlay">
        <div className="row justify-content-center align-items-center vh-100 py-5">
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div
              className="card card-body text-center p-4 p-sm-5"
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <h1 className="mb-2">Confirma envio imagem?</h1>
              <div
                className="d-flex justify-content-center align-items-center mb-10"
                style={{
                  width: "100%",
                  height: "60px",
                  borderRadius: "5px",
                  marginBottom: "-30px",
                }}
              >
                <div
                  className="d-flex justify-content-space-around"
                  style={{
                    border: "3px solid #D23C77",
                    width: "100%",
                    height: "30px",
                    borderRadius: "5px",
                    backgroundColor: "#FAEBF1",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span style={{ marginLeft: "5px" }}>
                    <ImageIcon />
                  </span>
                  <span style={{ marginLeft: "5px" }}>{picture.name}</span>
                </div>
              </div>
              <form
                style={{ marginTop: "20px" }}
                onSubmit={handleSubmit}
                className="mt-sm-4"
              >
                <div className="d-flex justify-content-center align-items-center gap-3 bts">
                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-secondary"
                      onClick={() => {
                        setOpenUplModal(false);
                      }}
                    >
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
  );
}

export default UploadPhotoModal;
