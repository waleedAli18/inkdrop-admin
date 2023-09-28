import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Modal } from "antd";
import "./CustomModal.less";
const CustomModal = (props) => {
    return (_jsx("div", { className: "kl-custom-modal-wrapper", children: _jsx(Modal, { ...props, children: props.children }) }));
};
export default memo(CustomModal);
