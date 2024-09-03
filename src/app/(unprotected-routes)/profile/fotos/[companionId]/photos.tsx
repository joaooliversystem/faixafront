/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./photos.css";
import { useSession } from "next-auth/react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { FileUploader } from "react-drag-drop-files";
import UploadPhotoModal from "./(photosComponents)/uploadPhotoModal";
import DeletePhotoModal from "./(photosComponents)/deletePhotoModal";

const fileTypes = ["JPG", "PNG"];

async function Fotos() {
  const [isUserOwner, setIsUserOwner] = useState(true);
  const [photosInfo, setPhotosInfo] = useState([]);
  const [deletePhotos, setDeletePhotos] = useState(false);
  // const companionId = localStorage.getItem('companionId');
  const pathname = usePathname();
  const companionId = pathname.split("/").pop();
  const apiUrl = process.env.API_URL + "companion/photos/" + companionId;
  const apiEditUrl =
    process.env.API_URL + "companion/edit-pictures/" + companionId;
  const { data: session, status } = useSession();
  const [picture, setPicture] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [openUplModal, setOpenUplModal] = useState<boolean>(false);
  const [openDelPhotoModal, setOpenDelPhotoModal] = useState<boolean>(false);
  const [pictureId, setPictureId] = useState<any>();

  const handleChange = (file: any) => {
    if (file) {
      setPicture(file);
      setOpenUplModal(true);
    }
  };

  type User = {
    $id?: string | null | undefined;
    companion?: number | null | undefined;
  };

  const user = session?.user as User;
  const userId = user?.$id;
  const sessionCompanionId = user?.companion;

  // Checking if the page user is also the page companion

  useEffect(() => {
    if (companionId == sessionCompanionId?.toString()) {
      setIsUserOwner(true);
    }
  }, [userId]);

  // Fetch inital page data
  useEffect(() => {
    FetchPhotosData();
  }, []);

  //  Fetch photos tab data from API function
  async function FetchPhotosData() {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "text/plain",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const ApidataJson = await response.text();
        const Apidata = JSON.parse(ApidataJson);

        // Sorting photos according to their sort order

        const sortedPhotos = Apidata.pictures["$values"].sort(
          (a: any, b: any) => a.sort - b.sort
        );

        setPhotosInfo(sortedPhotos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [loading]);

  return (
    <>
      {openUplModal && (
        <UploadPhotoModal
          setOpenUplModal={setOpenUplModal}
          picture={picture}
          setPicture={setPicture}
          companionId={companionId}
        />
      )}
      {openDelPhotoModal && (
        <DeletePhotoModal
          setOpenDelPhotoModal={setOpenDelPhotoModal}
          pictureId={pictureId}
          companionId={companionId}
        />
      )}
      <div className="card d-flex flex-column">
        <div className="card-body">
          <div className="row g-3">
            {/* <div className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center"> */}
            {photosInfo.map((photoInfo: any, index) => (
              <>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center"
                  key={index}
                >
                  <div>
                    <a
                      href={photoInfo.url}
                      data-gallery="image-popup"
                      data-glightbox="description: .custom-desc2; descPosition: left;"
                    >
                      <img
                        className="rounded img-fluid"
                        src={photoInfo.url}
                        alt={`photo ${index}`}
                      />
                    </a>
                  </div>
                  <div className="delete-icon-1-container">
                    {isUserOwner && (
                      <span
                        onClick={() => {
                          setPictureId(photoInfo.picture_id);
                          // setPhotosInfo(photosInfo.filter((_, i) => i !== index))
                          // setDeletePhotos(!deletePhotos)
                          setOpenDelPhotoModal(true);
                        }}
                        className="delete-icon-1 photos"
                      >
                        <i
                          className="bi bi-trash3 delete-icon-1"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </span>
                    )}
                  </div>
                </div>
              </>
            ))}
            {/* {!photosInfo && (
                        <div>
                            <p className="text-center">
                                <i className="bi bi-plus-circle-fill"></i>
                            </p>
                        </div>
                    )} */}
          </div>
        </div>
        <div className="add-photo-container">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          >
            <div className="d-flex ml-20 align-items-center justify-content-center add-photo-icon-container">
              <div className="add-photo-icon d-flex flex-column align-items-center justify-content-center">
                <AddPhotoAlternateIcon style={{ fontSize: "40px" }} />
              </div>
            </div>
          </FileUploader>
        </div>
      </div>
    </>
  );
}

export default Fotos;
