import { useState } from "react";
import { message, Form } from "antd";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomHeading from "../../../uiComponents/CustomHeading/CustomHeading";
import CustomInput from "../../../uiComponents/CustomInput/CustomInput";
import CustomPhoneInput from "../../../uiComponents/CustomPhoneInput/CustomPhoneInput";
import CustomRow from "../../../uiComponents/CustomRow/CustomRow";
import ImageUploader from "../../ImageUploader";
import { imageUploadProps } from "../../../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import { USER_DATA } from "../../../../utils/data/user.data";
import "./MyProfile.less";

const MyProfile = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState<object | null>();
  const [image, setImage] = useState<any>();
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);
  const [logoFile, setLogoFile] = useState(null);
  // const [loader, setLoader] = useState<boolean>(false);

  console.log(logoFile, "logoFile");
  console.log(file, "file");

  const customRequest = async (info: any) => {
    const { onSuccess, onError, file } = info;
    setButtonLoader(true);
    try {
      await new Promise((resolve) => {
        if (info.file.type == "image/png" || info.file.type == "image/jpeg") {
          setFile(info.file);
          setButtonLoader(false);

          message.success(`${info.file.name} File Uploaded`);
          form.setFieldsValue({
            profilePicture: info.file,
          });
          setLogoFile(info.file);
        } else {
          setFile(null);
          setButtonLoader(false);
          message.error(`${info.file.name} is not 'jpeg/png'`);
        }

        const reader = new FileReader();
        const formData = new FormData();
        formData.append("file", file);
        const data = {
          src: "",
          formData,
          type: file.type,
          name: file.name,
        };
        reader.readAsDataURL(file);
        reader.onload = () => {
          data.src = reader.result?.toString() ?? "";
          setImage(data);
          resolve(data);
        };
      });
      onSuccess();
    } catch (err) {
      onError({ err });
    }
  };

  const uploadProps: imageUploadProps = {
    name: "customFile",
    multiple: false,
    maxCount: 1,
    showUploadList: false,
    accept: "image/png, image/jpeg",
    customRequest: customRequest,
    onDrop: customRequest,
  };

  const onFinish = (values: FormData) => {
    console.log("values", values);
    // window.location.href = "/";
  };

  return (
    <div className="edit-profile-wrapper">
      <CustomRow>
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24} className="head">
          <CustomHeading>My Profile</CustomHeading>
        </CustomColumn>
      </CustomRow>{" "}
      <CustomForm
        initialValues={{ remember: true }}
        name="editProfileForm"
        form={form}
        onFinish={onFinish}
        className="gx-signin-form gx-form-row0"
      >
        <CustomRow>
          <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24} className="left">
            <CustomFormItem
              name="profilePicture"
              colon={false}
              className="profile-img"
              initialValue={USER_DATA?.profilePicture}
            >
              <ImageUploader
                setFile={setFile}
                image={image}
                icon={false}
                btnIcon={<FontAwesomeIcon icon={faCamera} color="white" />}
                uploadProps={uploadProps}
              />
            </CustomFormItem>
          </CustomColumn>

          <CustomColumn
            xl={16}
            lg={16}
            md={24}
            sm={24}
            xs={24}
            className="right"
          >
            <div className="disabled-head">
              <CustomHeading>Profile Settings</CustomHeading>
            </div>
            <CustomFormItem
              name="name"
              label="Name"
              colon={false}
              validateTrigger="onBlur"
              initialValue={USER_DATA?.name}
              rules={[
                {
                  required: true,
                  message: "Name is required!",
                },
              ]}
            >
              <CustomInput placeholder="Name" />
            </CustomFormItem>

            <CustomFormItem
              name="email"
              label="Email"
              colon={false}
              validateTrigger="onBlur"
              initialValue={USER_DATA?.email}
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                },
              ]}
            >
              <CustomInput placeholder="Email" />
            </CustomFormItem>

            <CustomFormItem
              label="Phone"
              colon={false}
              name="phone"
              initialValue={USER_DATA?.phone}
              rules={[
                {
                  required: true,
                  message: "The phone number is not valid number!",
                },

                {
                  max: 320,
                },
                {
                  min: 3,
                },
              ]}
            >
              <CustomPhoneInput placeholder="Phone" />
            </CustomFormItem>
          </CustomColumn>

          <CustomColumn
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="text-center"
          >
            <CustomButton
              type="primary"
              htmlType="submit"
              className="gx-mb-0 add-update-update-btn btn default-btn "
              loading={buttonLoader}
            >
              Update Profile
            </CustomButton>
          </CustomColumn>
        </CustomRow>
      </CustomForm>
    </div>
  );
};

export default MyProfile;
