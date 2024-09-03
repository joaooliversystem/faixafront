import Fotos from "./photos";
import React from "react";
import dynamic from "next/dynamic";
async function FotosPage() {

    const DynamicPhotos = dynamic(() => import('./photos'), {
        ssr: false
    })

    return (
        <DynamicPhotos />
    )
}

export default FotosPage;
