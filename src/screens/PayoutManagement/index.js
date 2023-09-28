import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, message } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomStatusBox from "../../components/customComponents/CustomStatusBox";
import helperFunction from "../../helpers/functions.helper";
import { BANK_DETAILS, PayoutTableData } from "../../utils/data/payout.data";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import CustomModal from "../../components/uiComponents/CustomModal";
import "./Payout.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const PayoutManagement = () => {
    const [form] = Form.useForm();
    const location = useLocation();
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [bankDetails, setBankDetails] = useState(false);
    const [editBankDetails, setEditBankDetails] = useState(false);
    const { dropBankDetails } = location.state || {};
    useEffect(() => {
        if (dropBankDetails) {
            setBankDetails(true);
        }
    }, [dropBankDetails]);
    const [pagination, setPagination] = useState(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const onEditBankDetails = async (values) => {
        const formData = new FormData();
        formData.append("accountTitle", values.accountTitle);
        formData.append("bankName", values.bankName);
        formData.append("accountNo", values.accountNo);
        formData.append("routingNo", values.routingNo);
        console.log("formData", values);
        setEditBankDetails(false);
        message.success({
            content: `Edited successfully!`,
            duration: 2,
        });
    };
    const handleModalClose = () => {
        if (editBankDetails) {
            setEditBankDetails(false);
        }
    };
    const columns = [
        {
            title: "S.No",
            key: "id",
            render: (res) => `${res?.id}`,
        },
        {
            title: "Username",
            key: "username",
            render: (res) => `${res?.username}`,
        },
        {
            title: "Email",
            key: "email",
            render: (res) => `${res?.email}`,
        },
        {
            title: "Request Date",
            key: "requestDate",
            render: (res) => `${res?.requestDate}`,
        },
        {
            title: "Amount",
            key: "amount",
            render: (res) => `${helperFunction.currencyFormatter(+res?.amount.toFixed(2))}`,
        },
        {
            title: "Status",
            key: "status",
            className: "action-col",
            render: (res) => _jsx(CustomStatusBox, { text: res.status }),
        },
        {
            title: "Action",
            width: "15%",
            key: "action",
            className: "action-col",
            render: (res) => (_jsx(CustomButton, { htmlType: "button", className: "action-btn small whiteBtn", onClick: () => console.log(res?.id, "Clicked"), children: "Pay Now" })),
        },
    ];
    const contentView = (_jsx(CustomTable, { bordered: true, data: PayoutTableData, columns: columns, loading: gridPreLoader, pagination: pagination }));
    const rightHeader = (_jsxs(_Fragment, { children: [_jsx(CustomDatePicker, { placeholder: "Start Date", disabledDate: helperFunction.disabledFutureDate }), _jsx(CustomDatePicker, { placeholder: "End Date", disabledDate: helperFunction.disabledFutureDate })] }));
    return (_jsxs("div", { className: "payouts-screen table-screen", children: [_jsx(Breadcrumbs, { Title: !bankDetails ? "Payouts Management" : "Bank Details", search: true }), !bankDetails ? (_jsx(_Fragment, { children: _jsx(CustomRow, { children: _jsx(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(CustomGridView, { content: contentView, rightHeader: rightHeader, btnText: "Bank Details", btnAction: () => setBankDetails(true) }) }) }) })) : (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: _jsx(motion.div, { initial: { scale: 1, x: -100 }, animate: { scale: 1, x: 0 }, exit: { scale: 1, x: -100 }, className: " bankDetailsForm", children: _jsx("div", { className: "innerWrapper", children: _jsx(CustomForm, { initialValues: { remember: true }, name: "bankDetailsForm", form: form, 
                                    // onFinish={formValues}
                                    className: " gx-form-row0", children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "left", children: _jsx(CustomFormItem, { name: "acountTitle", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.accountTitle, rules: [
                                                        {
                                                            required: false,
                                                            message: "Account title is required.",
                                                        },
                                                    ], children: _jsx(CustomInput, { placeholder: "Account Title", disabled: true }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "right", children: _jsx(CustomFormItem, { name: "bankName", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.bankName, rules: [
                                                        {
                                                            required: false,
                                                            message: "Bank name is required.",
                                                        },
                                                        {
                                                            max: 100,
                                                        },
                                                    ], children: _jsx(CustomInput, { placeholder: "Bank Name", disabled: true }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "left", children: _jsx(CustomFormItem, { name: "accountNo", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.accountNumber, rules: [
                                                        {
                                                            required: false,
                                                            message: "Account number is required.",
                                                        },
                                                    ], children: _jsx(CustomInput, { placeholder: "Account No", disabled: true }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "right", children: _jsx(CustomFormItem, { name: "routingNo", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.routingNumber, rules: [
                                                        {
                                                            required: false,
                                                            message: "Routing number is required.",
                                                        },
                                                    ], children: _jsx(CustomInput, { placeholder: "Routing No", disabled: true }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, children: _jsx(CustomFormItem, { children: _jsx(CustomButton, { type: "primary", className: "gx-mb-0 btn transparent", onClick: () => setEditBankDetails(true), children: "Edit Bank Details" }) }) })] }) }) }) }) }), _jsx(CustomModal, { open: editBankDetails, centered: true, closable: true, onCancel: handleModalClose, width: "70%", style: { borderRadius: 40, overflow: "hidden" }, className: `payouts-screen`, footer: null, children: _jsx(_Fragment, { children: _jsxs(CustomColumn, { children: [_jsx("div", { className: "head", children: _jsx("h2", { children: "Edit Banking Details" }) }), _jsx(CustomForm, { initialValues: { remember: true }, name: "editBankDetails", form: form, onFinish: onEditBankDetails, className: "gx-signin-form gx-form-row0", children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "left", children: _jsx(CustomFormItem, { name: "acountTitle", label: "Account Title", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.accountTitle, rules: [
                                                            {
                                                                required: true,
                                                                message: "Account title is required.",
                                                            },
                                                        ], children: _jsx(CustomInput, { placeholder: "Account Title" }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "right", children: _jsx(CustomFormItem, { label: "Bank Name", name: "bankName", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.bankName, rules: [
                                                            {
                                                                required: true,
                                                                message: "Bank name is required.",
                                                            },
                                                        ], children: _jsx(CustomInput, { placeholder: "Bank Name" }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "left", children: _jsx(CustomFormItem, { label: "Account No", name: "accountNo", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.accountNumber, rules: [
                                                            {
                                                                required: true,
                                                                message: "Account number is required.",
                                                            },
                                                        ], children: _jsx(CustomInput, { placeholder: "Account No" }) }) }), _jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, className: "right", children: _jsx(CustomFormItem, { label: "Routing No", name: "routingNo", colon: true, className: "with-label", validateTrigger: "onBlur", initialValue: BANK_DETAILS.routingNumber, rules: [
                                                            {
                                                                required: true,
                                                                message: "Routing number is required.",
                                                            },
                                                        ], children: _jsx(CustomInput, { placeholder: "Routing No" }) }) }), _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(CustomFormItem, { className: "text-center mt-4", children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 btn", children: "Update" }) }) })] }) })] }) }) })] }))] }));
};
export default PayoutManagement;
