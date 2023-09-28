import React, { useEffect, useState } from "react";
import { Button, Upload, UploadProps } from "antd";
import logo from "../../../assets/images/dashboard-logo.png";
import { imageUploadProps } from "../../../utils/interface";
import "./ImageUploader.less";

interface CustomImageUploader extends UploadProps {
  setFile: object | null;
  image: string;
  btnIcon: React.JSX.Element;
  uploadProps: imageUploadProps;
  icon: React.JSX.Element | boolean;
  // imgUrl: string;
}

const ImageUploader: React.FC<CustomImageUploader> = (props) => {
  const [image, setImage] = useState<string | { src: string } | null>(logo);
  useEffect(() => {
    setImage(null);
    if (props.image) {
      setImage(props.image);
    }
  }, [props.image]);

  return (
    <div className="image-uploader gx-d-flex ">
      <div className="image-preview">
        <span
          style={{
            backgroundImage: `url("${
              image && typeof image !== "string" && image?.src
                ? image?.src
                : image
            }")`,
          }}
        >
          {!image ? <>{props.icon}</> : null}
          &nbsp;
        </span>
      </div>
      <Upload listType="picture" {...props.uploadProps}>
        <Button
          style={{ opacity: props.image === undefined ? 1 : 0 }}
          type="default"
          className={`btn btn-primary gx-mb-3 image-uploader-btn ${
            props.disabled ? "image-uploader__btn-disable" : ""
          }`}
        >
          {props.btnIcon}
        </Button>
      </Upload>
    </div>
  );
};

export default ImageUploader;
