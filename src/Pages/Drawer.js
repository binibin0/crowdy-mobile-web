import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";
import "antd/dist/antd.css";

const DrawerP = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "30px",
            top: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={showDrawer}
        >
          <img
            style={{ width: "17px", height: "17px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
        </Button>
      </Space>
      <Drawer
        placement={"left"}
        width={250}
        onClose={onClose}
        visible={visible}
      >
        <Button onClick={onClose}></Button>
        <div>크라우디</div>
        <div>설문조사, 피드백</div>
        <div style={{ position: "absolute", bottom: "20px" }}>
          관리자 페이지
        </div>
      </Drawer>
    </>
  );
};

export default DrawerP;
