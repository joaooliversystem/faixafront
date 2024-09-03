import { useState, useEffect } from "react";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import { useSession } from "next-auth/react";

type UploadPhotoModalProps = {
  setOpenUplModal: any;
  video: any;
  setVideo: React.Dispatch<React.SetStateAction<any>>;
};


  type User = {
    $id?: string | null | undefined;
    companion?: number | null | undefined;
  };

function UploadVideoModal({
  setOpenUplModal,
  video,
  setVideo,
}: UploadPhotoModalProps) {
  const [loadingUplVideo, setLoadingUplVideo] = useState(false);
  const { data: session } = useSession();
  const user = session?.user as User;
  const sessionCompanionId = user?.companion;
  const apiUrl = process.env.API_URL + "companion/upload-video/" + sessionCompanionId;
 

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoadingUplVideo(true);

    const formData = new FormData();
    formData.append("file", video);

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
      } else {
        alert("Video enviado com sucesso!");
        setVideo(null);
        setOpenUplModal(false);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
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
      {loadingUplVideo && (
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
                    <SwitchVideoIcon />
                  </span>
                  <span style={{ marginLeft: "5px" }}>{video.name}</span>
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

export default UploadVideoModal;
