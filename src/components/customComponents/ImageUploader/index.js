import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button, Upload } from "antd";
import logo from "../../../assets/images/dashboard-logo.png";
import "./ImageUploader.less";
const ImageUploader = (props) => {
    const [image, setImage] = useState(logo);
    useEffect(() => {
        setImage(null);
        if (props.image) {
            setImage(props.image);
        }
    }, [props.image]);
    return (_jsxs("div", { className: "image-uploader gx-d-flex ", children: [_jsx("div", { className: "image-preview", children: _jsxs("span", { style: {
                        backgroundImage: `url("${image && typeof image !== "string" && image?.src
                            ? image?.src
                            : image}")`,
                    }, children: [!image ? _jsx(_Fragment, { children: props.icon }) : null, "\u00A0"] }) }), _jsx(Upload, { listType: "picture", ...props.uploadProps, children: _jsx(Button, { style: { opacity: props.image === undefined ? 1 : 0 }, type: "default", className: `btn btn-primary gx-mb-3 image-uploader-btn ${props.disabled ? "image-uploader__btn-disable" : ""}`, children: props.btnIcon }) })] }));
};
export default ImageUploader;
