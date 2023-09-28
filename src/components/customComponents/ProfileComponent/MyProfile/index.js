import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import { USER_DATA } from "../../../../utils/data/user.data";
import "./MyProfile.less";
const MyProfile = () => {
    const [form] = Form.useForm();
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [buttonLoader, setButtonLoader] = useState(false);
    const [logoFile, setLogoFile] = useState(null);
    // const [loader, setLoader] = useState<boolean>(false);
    const customRequest = async (info) => {
        const { onSuccess, onError, file } = info;
        setButtonLoader(true);
        try {
            await new Promise((resolve, reject) => {
                if (info.file.type == "image/png" || info.file.type == "image/jpeg") {
                    setFile(info.file);
                    setButtonLoader(false);
                    message.success(`${info.file.name} File Uploaded`);
                    form.setFieldsValue({
                        profilePicture: info.file,
                    });
                    setLogoFile(info.file);
                }
                else {
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
                    data.src = reader.result?.toString() || "";
                    setImage(data);
                    resolve(data);
                };
            });
            onSuccess();
        }
        catch (err) {
            onError({ err });
        }
    };
    const uploadProps = {
        name: "customFile",
        multiple: false,
        maxCount: 1,
        showUploadList: false,
        accept: "image/png, image/jpeg",
        customRequest: customRequest,
        onDrop: customRequest,
    };
    const onFinish = (values) => {
        console.log("values", values);
        // window.location.href = "/";
    };
    return (_jsxs("div", { className: "edit-profile-wrapper", children: [_jsx(CustomRow, { children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, className: "head", children: _jsx(CustomHeading, { children: "My Profile" }) }) }), " ", _jsx(CustomForm, { initialValues: { remember: true }, name: "editProfileForm", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, className: "left", children: _jsx(CustomFormItem, { name: "profilePicture", colon: false, className: "profile-img", initialValue: USER_DATA?.profilePicture, children: _jsx(ImageUploader, { setFile: setFile, image: image, icon: false, btnIcon: _jsx(FontAwesomeIcon, { icon: faCamera, color: "white" }), uploadProps: uploadProps }) }) }), _jsxs(CustomColumn, { xl: 16, lg: 16, md: 24, sm: 24, xs: 24, className: "right", children: [_jsx("div", { className: "disabled-head", children: _jsx(CustomHeading, { children: "Profile Settings" }) }), _jsx(CustomFormItem, { name: "name", label: "Name", colon: false, validateTrigger: "onBlur", initialValue: USER_DATA?.name, rules: [
                                        {
                                            required: true,
                                            message: "Name is required!",
                                        },
                                    ], children: _jsx(CustomInput, { placeholder: "Name" }) }), _jsx(CustomFormItem, { name: "email", label: "Email", colon: false, validateTrigger: "onBlur", initialValue: USER_DATA?.email, rules: [
                                        {
                                            required: true,
                                            message: "Email is required!",
                                        },
                                    ], children: _jsx(CustomInput, { placeholder: "Email" }) }), _jsx(CustomFormItem, { label: "Phone", colon: false, name: "phone", initialValue: USER_DATA?.phone, rules: [
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
                                    ], children: _jsx(CustomPhoneInput, { placeholder: "Phone" }) })] }), _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, className: "text-center", children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 add-update-update-btn btn default-btn ", children: "Update Profile" }) })] }) })] }));
};
export default MyProfile;
