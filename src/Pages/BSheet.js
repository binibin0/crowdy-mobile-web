import React, { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useWindowHeight } from "@react-hook/window-size";
import "./style.css";
import "react-spring-bottom-sheet/dist/style.css";
import myLocationIcon from "../images/my-location.png";

function getMaxSnap(maxHeight) {
  return Math.max(maxHeight - 400, maxHeight / 2);
}

const maxSnap = {
  1: getMaxSnap,
  2: getMaxSnap / 3,
};

// const changeBSheet = () => {
//     snapPoints =
// }

function BSheet({ userLocationButton, BSheetRef }) {
  const maxHeight = useWindowHeight();
  const maxSnap = getMaxSnap(maxHeight);

  return (
    <BottomSheet
      className="DetailBottomSheet"
      open
      ref={BSheetRef}
      blocking={false}
      defaultSnap={({ snapPoints }) => Math.min(...snapPoints)}
      snapPoints={() => [maxSnap, maxSnap / 3]}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        매장 정보가 들어갈 곳
        <div className="DetailForm">
          <button id="myLocation" onClick={userLocationButton}>
            <img src={myLocationIcon} style={{ width: "30px", height: "30px" }} />
          </button>
        </div>
      </div>
    </BottomSheet>
  );
}
export default BSheet;
