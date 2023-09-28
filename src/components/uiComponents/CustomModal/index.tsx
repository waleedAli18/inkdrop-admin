import { memo } from "react";
import { Modal, ModalProps } from "antd";
import "./CustomModal.less";

const CustomModal = (props: ModalProps) => {
  return (
    <div className="kl-custom-modal-wrapper">
      <Modal {...props}>{props.children}</Modal>
    </div>
  );
};

export default memo(CustomModal);
