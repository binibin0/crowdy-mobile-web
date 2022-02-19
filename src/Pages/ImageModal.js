import React from "react";
import { useContext } from "react";
import "./style.css";
import closeWhiteIcon from "../images/white-plus.svg";
import CrowdyContext from "./CrowdyContext";

const ImageModal = () => {
  const { openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal } = useContext(CrowdyContext);

  return (
    <div className="image-modal-background">
      <img
        src={closeWhiteIcon}
        className="image-modal-close"
        onClick={() => {
          setOpenImageModal(() => false);
        }}
      />
      <img className="iamge-modal-container" src={currentImageForModal} />
    </div>
  );
};

export default ImageModal;
