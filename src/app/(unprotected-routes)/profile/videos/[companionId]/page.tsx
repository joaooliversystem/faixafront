import Fotos from "./videos";
import React from "react";
import dynamic from "next/dynamic";
async function VideosPage() {

    const DynamicVideos = dynamic(() => import('./videos'), {
        ssr: false
    })

    return (
        <DynamicVideos />
    )
}

export default VideosPage;
