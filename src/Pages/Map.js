import React, { useState, useRef, useContext, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, useGoogleMap } from "@react-google-maps/api";
import BSheet from "./BSheet";
import "./style.css";
import MapSearchBar from "./MapSearchBar";
import { storeDatas } from "../datas/storeDatas";
import storePin from "../images/crowdy/crowdy-store-pin.png";
import { useWindowHeight } from "@react-hook/window-size";
import CrowdyContext from "./CrowdyContext";

const storePinSizeConverter = (width) => {
  return (width * 1080) / 662;
};

const Map = () => {
  const {
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
    currentBSheetStore,
    setCurrentBSheetStore,
    crowdedness,
    setCrowdedness,
    crowdednessCount,
    setCrowdednessCount,
    refresh,
    setRefresh,
    drawereVisible,
    setDrawereVisible,
  } = useContext(CrowdyContext);
  const windowHeight = useWindowHeight();

  const [userCurrentLocation, setUserCurrentLocation] = useState({
    //
    center: { lat: 37.3842, lng: 127.1224 },
    zoom: 17,
  });
  const mapRefRef = useRef(null);
  const BSheetRef = useRef();

  const userLocationButton = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCurrentLocation((currentCenter) => ({
            ...currentCenter,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            zoom: 17,
          }));
        },
        (err) => {
          alert("새로고침을 통해 위치 사용을 허락해주세요. 그래도 되지 않는다면 브라우저 설정에서 위치 권한을 허용해주세요");
        },
        {
          enableHighAccuracy: true,
          // maximumAge: 100000000,
          // timeout: 5000,
        }
      );
    }
  };
  console.log(currentBSheetStore);
  const MarkerList = () => {
    const map = useGoogleMap();

    return (
      <>
        {Object.keys(storeDatas).map((store, key) => {
          let storePinWidth = 32;
          if (currentBSheetStore === store) {
            storePinWidth = 42;
          }

          const icon = { url: storePin, scaledSize: { width: storePinWidth, height: storePinSizeConverter(storePinWidth) } };
          return (
            <Marker
              key={key}
              position={storeDatas[store].latlng}
              icon={icon}
              onClick={() => {
                setCurrentBSheetStore(store);
                map.panTo({ lat: storeDatas[store].latlng.lat - 0.003, lng: storeDatas[store].latlng.lng });
                BSheetRef.current.snapTo(({ maxHeight }) => maxHeight);
              }}
            />
          );
        })}
      </>
    );
  };

  const defaultMapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    minZoom: 14,
    maxZoom: 18,
    gestureHandling: "greedy",
  };

  return (
    <>
      <MapSearchBar />
      <LoadScript googleMapsApiKey="AIzaSyCSYjuiuUYQ2tYtEE5V26yBzQhc5M6xjPM">
        <GoogleMap
          ref={mapRefRef}
          options={defaultMapOptions}
          mapContainerStyle={{
            width: "100vw",
            height: "100vh",
          }}
          center={userCurrentLocation.center}
          zoom={userCurrentLocation.zoom}
          onDragStart={() => BSheetRef.current.snapTo(({ maxHeight }) => maxHeight / 3)}
        >
          <MarkerList />
          <BSheet BSheetRef={BSheetRef} userLocationButton={userLocationButton} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default React.memo(Map);
