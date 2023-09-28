import { Spin } from "antd";
import "./FullScreenLoader.less";

const FullScreenLoader = (props: any) => {
  return (
    <div
      className="fullScreenLoaderWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
        background: "#fff",
      }}
    >
      <Spin {...props}></Spin>;
    </div>
  );
};

export default FullScreenLoader;
