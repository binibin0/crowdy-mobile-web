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
    <div className="page">
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
        <a href={storeDatas[path].instagramLink}>
          <div style={{ position: "relative" }}>
            <img
              src="https://www.xda-developers.com/files/2020/12/Instagram-Lite-Feature-Image.jpg"
              style={{ width: "138px", height: "138px", objectFit: "cover", marginTop: "-10px" }}
            />
            <span
              className="instagram-text"
              style={{ position: "absolute", bottom: "14px", left: "18px", fontSize: "10px", fontWeight: "500", color: "#e13867" }}
            >
              인스타그램에서 검색하기
            </span>
          </div>
        </a>
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
    </div>
  );
}
