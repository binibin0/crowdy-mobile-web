import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { storeDatas } from "../datas/storeDatas";
import Header from "./Header";
import CrowdyContext from "./CrowdyContext";
import ImageModal from "./ImageModal";

export default function SeeMoreImage() {
  const { path, page } = useParams();
  const { openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal } = useContext(CrowdyContext);

  return (
    <>
      <Header path={path} page={page} />
      {openImageModal ? <ImageModal /> : null}
      <div
        style={{
          //
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          margin: "0 auto",
        }}
      >
        {storeDatas[path].images.map((image, key) => (
          <img
            key={key}
            src={image}
            style={{ width: "138px", height: "138px", objectFit: "cover" }}
            onClick={(event) => {
              setOpenImageModal(true);
              setCurrentImageForModal(event.target.src);
            }}
          />
        ))}
      </div>
    </>
  );
}
