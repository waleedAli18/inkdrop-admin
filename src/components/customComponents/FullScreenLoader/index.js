import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spin } from "antd";
import "./FullScreenLoader.less";
const FullScreenLoader = (props) => {
    return (_jsxs("div", { className: "fullScreenLoaderWrapper", style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)",
            background: "#fff",
        }, children: [_jsx(Spin, { ...props }), ";"] }));
};
export default FullScreenLoader;
