import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useGoogleMap,
} from "@react-google-maps/api";
import BSheet from "./BSheet";
import DrawerP from "./Drawer";
import "./style.css";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function App() {
  const [state, setState] = useState({
    center: { lat: 37.3842, lng: 127.1224 },
  });
  const [zoomLv, setzoomLv] = useState(16);
  const BSheetRef = useRef();

  const EventMarkerContainer = ({ position }) => {
    const map = useGoogleMap();

    return (
      <Marker
        position={position}
        onClick={(marker) => {
          setzoomLv(17);
          map.panTo(marker.latLng);
          BSheetRef.current.snapTo(({ maxHeight }) => maxHeight);
        }}
      ></Marker>
    );
  };
  const data = [
    {
      content: <div style={{ color: "#000" }}>투썸플레이스서현로데오</div>,
      latlng: { lat: 37.3842, lng: 127.1224 },
    },
    {
      content: <div style={{ color: "#000" }}>할리스 분당 서현점</div>,
      latlng: { lat: 37.38521, lng: 127.12076 },
    },
    {
      content: <div style={{ color: "#000" }}>아티제 분당 서현점</div>,
      latlng: { lat: 37.38331, lng: 127.1215 },
    },
    {
      content: <div style={{ color: "#000" }}>스타벅스 서현역점</div>,
      latlng: { lat: 37.38605, lng: 127.12399 },
    },
  ];

  const userLocationButton = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position.coords);
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
          }));
          setzoomLv(18);
        },
        (err) => {
          console.log("실패....");
        },
        {
          enableHighAccuracy: true,
          // maximumAge: 100000000,
          // timeout: 5000,
        }
      );
    } else {
      alert("새로고침을 통해 위치 사용을 허락해주세요!..");
    }
  };
  const defaultMapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    minZoom: 7,
    maxZoom: 20,
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCSYjuiuUYQ2tYtEE5V26yBzQhc5M6xjPM">
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyle}
          center={state.center}
          zoom={zoomLv}
          onDragStart={() =>
            BSheetRef.current.snapTo(({ maxHeight }) => maxHeight / 3)
          }
        >
          {data.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}

          <DrawerP />
          <BSheet
            BSheetRef={BSheetRef}
            userLocationButton={userLocationButton}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(App);
