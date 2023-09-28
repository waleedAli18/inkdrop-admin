import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import "./MultiImageUploader.less";
import CustomButton from "components/uiComponents/CustomButton/CustomButton";
import CloseIcon from "assets/all-clevis-svg-files/closeicon";
import { isStringsArray } from "utils/helper/functions.helper";

const MultiImageUploader = (props) => {
  const { setFil, fil } = props;

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let files = [...fil];
  const customRequest = async (info) => {
    const { onSuccess, onError, file } = info;
    let baseImage = await getBase64(file);
    try {
      await new Promise((resolve, reject) => {
        if (info.file.type == "image/png" || info.file.type == "image/jpeg") {
          files.push({ file: info.file, base: baseImage });
          message.success(`${info.file.name} File Uploaded`);
        } else {
          message.error(`${info.file.name} is not 'jpeg/png'`);
        }

        resolve(true);
      });
      setFil(files);
      onSuccess();
    } catch (err) {
      onError({ err });
    }
  };
  const uploadProps = {
    name: "customFile",
    multiple: true,
    maxCount: 1,
    showUploadList: false,
    accept: "image/*",
    customRequest: customRequest,
    onDrop: customRequest,
  };

  return (
    <div className="multiimage-uploader gx-d-flex ">
      <div className="img-preview-sec">
        {props.savedImages?.length > 0 &&
          props.savedImages.map((image, index) => {
            return (
              <div className="image-preview">
                {/* <button
                  type="button"
                  onClick={() => {
                    let file = [...fil];
                    file.splice(index, 1);
                    setFil(file);
                  }}
                >
                  <CloseIcon />
                </button> */}
                <span
                  style={{
                    backgroundImage: `url("${image}")`,
                  }}
                ></span>
              </div>
            );
          })}
        {fil?.length > 0 &&
          fil.map((image, index) => {
            return (
              <div className="image-preview">
                <button
                  type="button"
                  onClick={() => {
                    let file = [...fil];
                    file.splice(index, 1);
                    setFil(file);
                  }}
                >
                  <CloseIcon />
                </button>
                <span
                  style={{
                    backgroundImage: `url("${
                      typeof image === "string" ? image : image.base
                    }")`,
                  }}
                ></span>
              </div>
            );
          })}
        {props.inlineButton && (
          <Upload accept="image/*" {...uploadProps}>
            <CustomButton
              type="button"
              className={`btn btn-primary gx-mb-3 multiimage-uploader__btn ${
                props.disabled ? "multiimage-uploader__btn-disable" : ""
              }`}
            >
              {props.icon && props.icon}
              {props.btnText && props.btnText}
            </CustomButton>
          </Upload>
        )}
      </div>
      {props.label && <label>{props.label}</label>}
      {props.outsideButton && (
        <Upload accept="image/*" {...uploadProps}>
          <CustomButton
            type="button"
            className={`btn btn-primary gx-mb-3 multiimage-uploader__btn ${
              props.disabled ? "multiimage-uploader__btn-disable" : ""
            }`}
          >
            {props.icon && props.icon}
            {props.btnText && props.btnText}
          </CustomButton>
        </Upload>
      )}
    </div>
  );
};

export default MultiImageUploader;
