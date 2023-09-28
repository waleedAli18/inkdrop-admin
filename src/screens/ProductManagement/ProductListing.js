import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { Button, Form, Modal, message } from "antd";
import { faDollar, faEdit, faEye, faFileArrowUp, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import { PRODUCT_CATEGORY, PRODUCT_TYPE, PRODUCT_VIEW, SHIRT_SIZE, pageSize, } from "../../utils/constants/app.constant";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import helperFunction from "../../helpers/functions.helper";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import { ProductListingTableData } from "../../utils/data/productManagement.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomModal from "../../components/uiComponents/CustomModal";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import ImageUploader from "../../components/customComponents/ImageUploader";
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomSelect from "../../components/uiComponents/CustomSelect/CustomSelect";
import SizeSelector from "../../components/customComponents/SizeSelector";
import CustomInputNumber from "../../components/uiComponents/CustomInputNumber/CustomInputNumber";
import CustomTextarea from "../../components/uiComponents/CustomTextarea/CustomTextarea";
import CustomColorPicker from "../../components/customComponents/CustomColorPicker";
import "./ProductManagement.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const ProductListing = () => {
    const [form] = Form.useForm();
    const { confirm } = Modal;
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [buttonLoader, setButtonLoader] = useState(false);
    const [logoFile, setLogoFile] = useState(null);
    // const [loader, setLoader] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [viewMode, setViewMode] = useState(false);
    const handleColorsChange = (colors) => {
        setSelectedColors(colors);
    };
    const [pagination, setPagination] = useState(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const handleModalClose = () => {
        if (openModal) {
            setOpenModal(false);
            form.resetFields();
            setViewMode(false);
            setSelectedSize([]);
        }
    };
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        form.setFieldValue("size", size);
    };
    const handleViewAction = (res) => {
        setViewMode(true);
        setSelectedSize(res?.size);
        form.setFieldsValue({
            productCategory: res?.productCategory,
            productType: res?.productType,
            productTitle: res?.productTitle,
            productView: res?.productView,
            price: res?.price,
            size: res?.size,
            color: res?.color,
            productFeatures: res?.features?.join("\n"),
        });
    };
    const onFinish = (values) => {
        console.log("values", values);
        form.resetFields();
        setViewMode(false);
        setSelectedSize([]);
        setOpenModal(false);
        message.success({
            content: `Product ${viewMode ? "Updated" : "Added"} Succesfully!`,
            duration: 3,
        });
    };
    const customRequest = async (info) => {
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
    const showPromiseConfirmDelete = (res) => {
        confirm({
            title: `Delete?`,
            width: "455px",
            className: "logout-modal",
            icon: (_jsx("div", { className: "icon-wrapper", children: _jsx(FontAwesomeIcon, { className: "", icon: faTrashAlt }) })),
            content: `Are you sure you want to delete this product (${res.id})?`,
            centered: true,
            okText: "Yes",
            cancelText: "No",
            async onOk() {
                deleteCall();
            },
        });
    };
    const deleteCall = useCallback(async () => {
        // navigate("/");
    }, []);
    const columns = [
        {
            title: "Image",
            key: "image",
            render: (res) => (_jsx("img", { src: res?.image, alt: "Product" })),
        },
        {
            title: "S.No",
            key: "id",
            render: (res) => `${res?.id}`,
        },
        {
            title: "Product Category",
            key: "productCategory",
            render: (res) => `${res?.productCategory}`,
        },
        {
            title: "Product Title",
            key: "productTitle",
            render: (res) => `${res?.productTitle}`,
        },
        {
            title: "Date Added",
            key: "dateAdded",
            render: (res) => `${res?.dateAdded}`,
        },
        {
            title: "Action",
            width: "140px",
            key: "action",
            className: "action-col text-center",
            render: (res) => (_jsx(_Fragment, { children: _jsxs("div", { className: "icons d-flex alignItemCenter justifyContentSpaceBetween", children: [_jsx(Button, { htmlType: "button", className: "btn eye", onClick: () => {
                                setModalData(res),
                                    handleViewAction(res),
                                    console.log(res, "Eye Clicked"),
                                    setOpenModal(true);
                            }, children: _jsx(FontAwesomeIcon, { className: "", icon: faEye, color: "#556EE6" }) }), _jsx(Button, { htmlType: "button", className: "btn edit", onClick: () => console.log(res?.id, "Edit Clicked"), children: _jsx(FontAwesomeIcon, { className: "", icon: faEdit, color: "#691883" }) }), _jsx(Button, { htmlType: "button", className: "btn trash", onClick: () => {
                                showPromiseConfirmDelete(res),
                                    console.log(res?.id, "Trash Clicked");
                            }, children: _jsx(FontAwesomeIcon, { className: "", icon: faTrashAlt, color: "red" }) })] }) })),
        },
    ];
    const contentView = (_jsx(CustomTable, { bordered: true, data: ProductListingTableData, columns: columns, loading: gridPreLoader, pagination: pagination }));
    const rightHeader = (_jsxs(_Fragment, { children: [_jsx(CustomDatePicker, { placeholder: "Start Date", disabledDate: helperFunction.disabledFutureDate }), _jsx(CustomDatePicker, { placeholder: "End Date", disabledDate: helperFunction.disabledFutureDate })] }));
    return (_jsx("div", { className: "product-listing-tab-wrapper table-screen", children: _jsxs(_Fragment, { children: [_jsx(CustomRow, { children: _jsx(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(CustomGridView, { content: contentView, rightHeader: rightHeader, btnText: "Add New", btnAction: () => setOpenModal(true) }) }) }), _jsx(CustomModal, { open: openModal, centered: true, closable: true, onCancel: handleModalClose, width: "1250px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsxs("div", { className: "design-modal-wrapper", children: [_jsx(CustomRow, { children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, className: "head", children: _jsx(CustomHeading, { children: `${viewMode
                                                ? "Product # " + modalData?.id
                                                : "Add New Product"}` }) }) }), _jsx(CustomForm, { initialValues: { remember: true }, name: "addProductForm", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: _jsxs(CustomRow, { children: [_jsxs(CustomColumn, { xl: 6, lg: 24, md: 24, sm: 24, xs: 24, className: "left", children: [_jsx(CustomFormItem, { label: "Front", name: "profilePicture", colon: false, className: "product-img", children: _jsx(ImageUploader, { setFile: setFile, image: image, icon: false, btnIcon: _jsx(FontAwesomeIcon, { icon: faFileArrowUp, color: "white" }), uploadProps: uploadProps }) }), _jsx(CustomFormItem, { label: "Back", name: "profilePicture", colon: false, className: "product-img", children: _jsx(ImageUploader, { setFile: setFile, image: image, icon: false, btnIcon: _jsx(FontAwesomeIcon, { icon: faFileArrowUp, color: "white" }), uploadProps: uploadProps }) })] }), _jsxs(CustomColumn, { xl: 18, lg: 24, md: 24, sm: 24, xs: 24, className: "right", children: [_jsx("div", { className: "disabled-head", children: _jsx(CustomHeading, { children: "Product Settings" }) }), _jsx(CustomFormItem, { name: "productCategory", label: "Product Category", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Product Category is required!",
                                                            },
                                                        ], children: _jsx(CustomSelect
                                                        // defaultValue=""
                                                        , { 
                                                            // defaultValue=""
                                                            options: PRODUCT_CATEGORY, 
                                                            // onChange={}
                                                            placeholder: "Select Category" }) }), _jsx(CustomFormItem, { name: "productType", label: "Product Type", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Product Type is required!",
                                                            },
                                                        ], children: _jsx(CustomSelect
                                                        // defaultValue=""
                                                        , { 
                                                            // defaultValue=""
                                                            options: PRODUCT_TYPE, 
                                                            // onChange={}
                                                            placeholder: "Select Type" }) }), _jsx(CustomFormItem, { name: "productTitle", label: "Product Title", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Product Title is required!",
                                                            },
                                                        ], children: _jsx(CustomInput, { placeholder: "Type here" }) }), _jsx(CustomFormItem, { name: "productView", label: "Product View", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Product View is required!",
                                                            },
                                                        ], children: _jsx(CustomSelect
                                                        // defaultValue=""
                                                        , { 
                                                            // defaultValue=""
                                                            options: PRODUCT_VIEW, 
                                                            // onChange={}
                                                            placeholder: "Select View" }) }), _jsx(CustomFormItem, { name: "price", label: "Price", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Price is required!",
                                                            },
                                                        ], children: _jsx(CustomInputNumber, { prefix: _jsx(FontAwesomeIcon, { icon: faDollar, color: "#595959" }) }) }), _jsx(CustomFormItem, { name: "size", label: "Size", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: false,
                                                                message: "Size is required!",
                                                            },
                                                        ], children: _jsx(SizeSelector, { selectedSizes: selectedSize, onSelectSize: handleSizeSelection, sizes: SHIRT_SIZE }) }), _jsx(CustomFormItem, { name: "color", label: "Color", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Color is required!",
                                                            },
                                                        ], children: _jsx(CustomColorPicker, { value: selectedColors, onChange: handleColorsChange }) }), _jsx(CustomFormItem, { name: "productFeatures", label: "Product Features", colon: false, validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Product features are required!",
                                                            },
                                                        ], children: _jsx(CustomTextarea, {}) })] }), _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, className: "text-center", children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 add-update-update-btn btn default-btn ", children: viewMode ? "Update" : "Add Product" }) })] }) })] }) }) })] }) }));
};
export default ProductListing;
