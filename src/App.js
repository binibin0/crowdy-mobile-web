import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StoreList from "./Pages/StoreList";
import Map from "./Pages/Map";
import StoreDetail from "./Pages/StoreDetail";
import Crowdy from "./Pages/Crowdy";
import Survey from "./Pages/Survey";
import AdminLogin from "./Pages/AdminLogin";
import CrowdyContext from "./Pages/CrowdyContext";
import SeeMoreImage from "./Pages/SeeMoreImage";
import { storeDatas } from "./datas/storeDatas";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function App() {
  useEffect(() => {
    onSnapshot(
      collection(db, "active-store"),
      (snapshot) => {
        snapshot.docs.map((doc) => {
          setCrowdednessCount(doc.data().count);
        });
      },
      []
    );
    onSnapshot(collection(db, "active-status"), (snapshot) => {
      snapshot.docs.map((doc) => {
        setStoreOnActive(doc.data().active);
      });
    });
  }, []);
  const handleCrowdednessColor = () => {
    if (crowdedness === "여유로움") {
      return "crowdedness-green";
    }
    if (crowdedness === "보통") {
      return "crowdedness-blue";
    }
    if (crowdedness === "인기") {
      return "crowdedness-orange";
    }
    if (crowdedness === "Crowdy!") {
      return "crowdedness-red";
    }
  };

  const handleCrowdedness = (store) => {
    if (crowdednessCount <= storeDatas[store].chairNumber * 0.3) {
      return setCrowdedness("여유로움");
    }
    if (crowdednessCount <= storeDatas[store].chairNumber * 0.5) {
      return setCrowdedness("보통");
    }
    if (crowdednessCount <= storeDatas[store].chairNumber * 0.7) {
      return setCrowdedness("인기");
    } else {
      return setCrowdedness("Crowdy!");
    }
  };

  const [crowdednessCount, setCrowdednessCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("900");
  const [currentDay, setCurrentDay] = useState("mon");
  const [currentDayKorean, setCurrentDayKorean] = useState("월");
  const [openImageModal, setOpenImageModal] = useState(false);
  const [currentImageForModal, setCurrentImageForModal] = useState("");
  const [currentStore, setCurrentStore] = useState("seohyeon-170");
  const [crowdedness, setCrowdedness] = useState("Crowdy!");
  const [refresh, setRefresh] = useState(true);
  const [drawereVisible, setDrawereVisible] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("전체");
  const [storeOnActive, setStoreOnActive] = useState(false);

  const checkStoreOpen = (store) => {
    if (store) {
      if (currentTime >= storeDatas[store].openHours[currentDay][0] && currentTime <= storeDatas[store].openHours[currentDay][1]) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getCurrentTime = () => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    let minutes = null;
    if (today.getMinutes() < 10) {
      minutes = "0" + today.getMinutes().toString();
    } else {
      minutes = today.getMinutes();
    }
    const getTime = today.getHours().toString() + minutes;
    const getDay = days[today.getDay()];
    const getDayKorea = koreanDays[today.getDay()];
    setCurrentTime(parseInt(getTime));
    setCurrentDay(getDay);
    setCurrentDayKorean(getDayKorea);
  };

  const zoomOutMobile = () => {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
      viewport.content = "initial-scale=0.1";
      viewport.content = "width=414";

      //initial-scale=1.0, maximum-scale=1.0, user-scalable=no
    }
  };
  useEffect(() => {
    zoomOutMobile();
    getCurrentTime();
  }, []);

  return (
    <CrowdyContext.Provider
      value={{
        currentTime,
        setCurrentTime,
        currentDay,
        setCurrentDay,
        currentDayKorean,
        setCurrentDayKorean,
        openImageModal,
        setOpenImageModal,
        currentImageForModal,
        setCurrentImageForModal,
        currentStore,
        setCurrentStore,
        crowdedness,
        setCrowdedness,
        crowdednessCount,
        setCrowdednessCount,
        refresh,
        setRefresh,
        drawereVisible,
        setDrawereVisible,
        currentFilter,
        storeOnActive,
        setStoreOnActive,
        setCurrentFilter,
        checkStoreOpen,
        handleCrowdedness,
        handleCrowdednessColor,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store-list" element={<StoreList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/crowdy" element={<Crowdy />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/:path" element={<StoreDetail />} />
          <Route path="/:path/:page" element={<SeeMoreImage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </CrowdyContext.Provider>
  );
}

export default App;
