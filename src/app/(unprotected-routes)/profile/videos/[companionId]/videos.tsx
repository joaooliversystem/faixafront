/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";
import "./videos.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FileUploader } from "react-drag-drop-files";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import UploadVideoModal from "../(videosComponents)/uploadVideoModal";
import DeleteVideoModal from "../(videosComponents)/deleteVideoModal";

async function Videos() {
  const [isUserOwner, setIsUserOwner] = useState(true);
  const [videosInfo, setVideosInfo] = useState([]);
  const [deleteVideos, setDeleteVideos] = useState(false);
  // const companionId = localStorage.getItem('companionId');
  const pathname = usePathname();
  const companionId = pathname.split("/").pop();
  const apiUrl = process.env.API_URL + "companion/videos/" + companionId;
  const apiEditUrl =
    process.env.API_URL + "companion/edit-videos/" + companionId;
  const { data: session, status } = useSession();
  const [openUplModal, setOpenUplModal] = useState<boolean>(false);
  const [openDelVideoModal, setOpenDelVideoModal] = useState<boolean>(false);
  const [video, setVideo] = useState<any>();
  const [videoId, setVideoId] = useState<any>();

  type User = {
    $id?: string | null | undefined;
    companion?: number | null | undefined;
  };

  const user = session?.user as User;
  const userId = user?.$id;
  const sessionCompanionId = user?.companion;

  const fileTypes = ["MP4"];

  const handleChange = (file: any) => {
    setOpenUplModal(true);
    setVideo(file);
    // setFile(file);
  };

  // Checking if the page user is also the page companion

  useEffect(() => {
    if (companionId == sessionCompanionId?.toString()) {
      setIsUserOwner(true);
    }
  }, [userId]);

  useEffect(() => {
    FetchVideosData();
  }, []);

  //   Fetch locality tab data from API function
  async function FetchVideosData() {
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

        // Sorting videos according to their sort order

        const sortedVideos = Apidata.videos["$values"].sort(
          (a: any, b: any) => a.sort - b.sort
        );

        setVideosInfo(sortedVideos);
      }

      // Setting states
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Edit videos every time delete button is clicked
  useEffect(() => {
    EditVideossData();
  }, [deleteVideos]);

  //  Edited videos data sending to API
  async function EditVideossData() {
    const videosInfoWithoutId = videosInfo.map((videoInfo: any) => {
      const { $id, ...videoWithoutId } = videoInfo;
      return videoWithoutId;
    });

    const finalDataObject = {
      companion_id: 3,
      videos: videosInfoWithoutId,
    };

    try {
      const response = await fetch(apiEditUrl, {
        method: "PUT",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalDataObject),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const dataJson = await response.text();
      const data = JSON.parse(dataJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      {openUplModal && (
        <UploadVideoModal
          setOpenUplModal={setOpenUplModal}
          video={video}
          setVideo={setVideo}
        />
      )}
      {openDelVideoModal && (
        <DeleteVideoModal
          setOpenDelVideoModal={setOpenDelVideoModal}
          video={video}
          videoId={videoId}
          companionId={companionId}
        />
      )}
      <div className="card">
        <div className="card-body">
          <div className="row g-3">
            <div className="d-flex flex-column align-items-center gap-3">
              {/* <div className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center gap-3"> */}
              {videosInfo.map((videoInfo: any, index) => (
                <div
                  key={index}
                  className="card p-0 shadow-none border-0 position-relative d-flex justify-content-center align-items-center"
                >
                  <video width="640" height="200" controls>
                    <source src={videoInfo.url} type="video/mp4" />
                  </video>
                  {isUserOwner && (
                    <i
                      className="bi bi-trash3 delete-video-icon"
                      style={{ fontSize: "20px" }}
                      onClick={() => {
                        setVideoId(videoInfo.video_id);
                        // setVideosInfo(videosInfo.filter((_, i) => i !== index));
                        setOpenDelVideoModal(true);
                      }}
                    ></i>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{ height: "200px" }}
              className="add-video-container d-flex justify-content-center"
            >
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <div
                  style={{
                    width: "360px",
                    height: "200px",
                    marginLeft: "-50px",
                  }}
                  className="d-flex ml-20 align-items-center justify-content-center add-video-icon-container"
                >
                  <div className="add-video-icon d-flex flex-column align-items-center justify-content-center">
                    <VideoCallIcon style={{ fontSize: "40px" }} />
                  </div>
                </div>
              </FileUploader>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
