import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Form, message } from "antd";
import { pageSize } from "../../utils/constants/app.constant";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import helperFunction from "../../helpers/functions.helper";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import { NewDesignsListingTableData } from "../../utils/data/productManagement.data";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomModal from "../../components/uiComponents/CustomModal";
import DesignModal from "../../components/customComponents/DesignModal";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomTextarea from "../../components/uiComponents/CustomTextarea/CustomTextarea";
import "./ProductManagement.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const NewDesignsListing = () => {
    const [form] = Form.useForm();
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [openDeclineModal, setDeclineModal] = useState(false);
    const [pagination, setPagination] = useState(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const handleModalClose = () => {
        if (openModal && !openDeclineModal) {
            setOpenModal(false);
        }
        if (openDeclineModal) {
            setDeclineModal(false);
        }
    };
    const onFinish = (values) => {
        console.log("Decline Reason", values);
        setDeclineModal(false);
        form.resetFields();
    };
    const handleDesignAccept = () => {
        console.log("Accepted");
        message.success({
            content: `Design Accepted!`,
            duration: 3,
        });
    };
    const handleDesignDecline = () => {
        console.log("Declined");
        setDeclineModal(true);
    };
    const columns = [
        {
            title: "S.No",
            key: "id",
            render: (res) => `${res?.id}`,
        },
        {
            title: "Title",
            key: "title",
            render: (res) => `${res?.title}`,
        },
        {
            title: "Added By",
            key: "addedBy",
            render: (res) => `${res?.addedBy}`,
        },
        {
            title: "Date Added",
            key: "dateAdded",
            render: (res) => `${res?.dateAdded}`,
        },
        {
            title: "Products",
            key: "products",
            render: (res) => `${res?.products}`,
        },
        {
            title: "Action",
            width: "15%",
            key: "action",
            className: "action-col text-center",
            render: (res) => (_jsx(_Fragment, { children: _jsx(CustomButton, { htmlType: "button", className: "action-btn small whiteBtn", onClick: () => {
                        setModalData(res), setOpenModal(true);
                    }, children: "View Details" }) })),
        },
    ];
    const contentView = (_jsx(CustomTable, { bordered: true, data: NewDesignsListingTableData, columns: columns, loading: gridPreLoader, pagination: pagination }));
    const rightHeader = (_jsxs(_Fragment, { children: [_jsx(CustomDatePicker, { placeholder: "Start Date", disabledDate: helperFunction.disabledFutureDate }), _jsx(CustomDatePicker, { placeholder: "End Date", disabledDate: helperFunction.disabledFutureDate })] }));
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "product-listing-tab-wrapper table-screen", children: [_jsx(CustomRow, { children: _jsx(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(CustomGridView, { content: contentView, rightHeader: rightHeader }) }) }), _jsx(CustomModal, { open: openModal, centered: true, closable: true, onCancel: handleModalClose, width: "1250px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx(DesignModal, { artCardData: modalData?.designs, associatedProductData: modalData?.associate, designId: modalData?.id, associateAcceptDeclineButtons: true, associateAcceptHandle: () => handleDesignAccept(), associateDeclineHandle: () => handleDesignDecline(), artAcceptHandle: () => console.log("Accepted"), artDeclineHandle: () => console.log("Declined") }) }) }), _jsx(CustomModal, { open: openDeclineModal, centered: true, closable: true, onCancel: handleModalClose, width: "670px", style: { borderRadius: 12, overflow: "hidden" }, 
                    // className={styles.orderModal}
                    footer: null, children: _jsx(_Fragment, { children: _jsx("div", { className: "authModalWrapper", children: _jsx("div", { className: "authSec forgot-password", children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, children: _jsxs("div", { className: "authScreen", children: [_jsx("div", { className: "head", children: _jsx("h2", { children: "Reason of Rejection" }) }), _jsxs(CustomForm, { initialValues: { remember: true }, name: "declineModal", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: [_jsx(CustomFormItem, { required: false, name: "reason", 
                                                        // label="Reason"
                                                        colon: false, className: "with-label", validateTrigger: "onBlur", rules: [
                                                            {
                                                                required: true,
                                                                message: "Reason is required.",
                                                            },
                                                            {
                                                                message: "Reason is invalid.",
                                                            },
                                                            {
                                                                max: 320,
                                                            },
                                                        ], children: _jsx(CustomTextarea, { placeholder: "Type the reason here", style: { height: 150, resize: "none" } }) }), _jsx(CustomFormItem, { className: "text-center mt-4", children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 btn", children: "Submit" }) })] })] }) }) }) }) }) })] }) }));
};
export default NewDesignsListing;
