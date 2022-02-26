import React, { useRef, useState } from "react";
import { useContext } from "react";
import "./style.css";
import closeWhiteIcon from "../images/white-plus.svg";
import CrowdyContext from "./CrowdyContext";
import { useGesture } from "react-use-gesture";

const ImageModal = () => {
  const { openImageModal, setOpenImageModal, currentImageForModal, setCurrentImageForModal } = useContext(CrowdyContext);

  const [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 });
  const imageRef = useRef();

  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        setCrop((crop) => ({ ...crop, x: dx, y: dy }));
      },
      onPinch: ({ offset: [d] }) => {
        setCrop((crop) => ({ ...crop, scale: 1 + d / 200 }));
      },
    },
    { domTarget: imageRef, eventOptions: { passive: false } }
  );

  //스크롤 방지 스크립트 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.position = "relative"; /* [1] */
    body.style.overflow = "hidden"; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";

    scrollBlocked.current = false;
  };

  if (openImageModal) {
    blockScroll();
  }

  return (
    <div className="image-modal-background">
      <img
        src={closeWhiteIcon}
        className="image-modal-close"
        onClick={() => {
          allowScroll();
          setOpenImageModal(false);
        }}
      />
      <img
        src={currentImageForModal}
        ref={imageRef}
        className="image-modal-container"
        style={{ left: crop.x, right: crop.y, transform: `scale(${crop.scale})`, touchAction: "none" }}
      />
    </div>
  );
};

export default ImageModal;
