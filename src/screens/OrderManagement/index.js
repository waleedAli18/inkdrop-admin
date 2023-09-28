import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomStatusBox from "../../components/customComponents/CustomStatusBox";
import helperFunction from "../../helpers/functions.helper";
import { OrderTableData } from "../../utils/data/order.data";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import CustomModal from "../../components/uiComponents/CustomModal";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import "./OrderManagement.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const OrderManagement = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [pagination, setPagination] = useState(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const handleModalClose = () => {
        setIsModalVisible(false);
    };
    const handleOrderClick = (res) => {
        setIsModalVisible(true);
        setSelectedOrder(res);
    };
    const columns = [
        {
            title: "Order Number",
            key: "id",
            render: (res) => `${res?.id}`,
        },
        {
            title: "Order Date",
            key: "orderDate",
            render: (res) => `${res?.orderDate}`,
        },
        {
            title: "Amount",
            key: "amount",
            render: (res) => `${res?.amount}`,
        },
        {
            title: "Shipment Address",
            key: "shipmentAddress",
            render: (res) => `${res?.shipmentAddress}`,
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
            render: (res) => (_jsx(CustomButton, { htmlType: "button", className: "action-btn small whiteBtn", onClick: () => handleOrderClick(res), children: "View Details" })),
        },
    ];
    const contentView = (_jsx(CustomTable, { bordered: true, data: OrderTableData, columns: columns, loading: gridPreLoader, pagination: pagination }));
    const rightHeader = (_jsxs(_Fragment, { children: [_jsx(CustomDatePicker, { placeholder: "Start Date", disabledDate: helperFunction.disabledFutureDate }), _jsx(CustomDatePicker, { placeholder: "End Date", disabledDate: helperFunction.disabledFutureDate })] }));
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "order-management-screen table-screen", children: [_jsx(Breadcrumbs, { Title: "Order Management", search: true }), _jsx(CustomRow, { children: _jsx(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(CustomGridView, { content: contentView, rightHeader: rightHeader }) }) })] }), _jsx(CustomModal, { open: isModalVisible, centered: true, onCancel: handleModalClose, width: "700px", className: "orderModal", footer: null, closable: false, children: selectedOrder && (_jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, children: _jsx("div", { className: "head", children: _jsxs(CustomHeading, { children: ["Order ID # ", selectedOrder.id] }) }) }), _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, children: _jsxs("div", { className: "left", children: [_jsxs("div", { className: "wrapper", children: [_jsx(CustomHeading, { children: "Delivery Details" }), _jsx("div", { className: "innerCont deliveryDetails", children: _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("h4", { children: "Name:" }), _jsx("h5", { children: selectedOrder?.deliveryDetails?.name })] }), _jsxs("li", { children: [_jsx("h4", { children: "Address:" }), _jsx("h5", { children: selectedOrder?.shipmentAddress })] }), _jsxs("li", { children: [_jsx("h4", { children: "Email:" }), _jsx("h5", { children: selectedOrder?.deliveryDetails?.email })] }), _jsxs("li", { children: [_jsx("h4", { children: "Phone:" }), _jsx("h5", { children: selectedOrder?.deliveryDetails?.phone })] })] }) })] }), _jsxs("div", { className: "wrapper", children: [_jsx("div", { className: "aside heading", children: _jsxs(CustomHeading, { children: ["Order Details", " ", _jsx(CustomStatusBox, { text: selectedOrder.status })] }) }), selectedOrder?.orderDetails?.map((order, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.15 }, children: _jsxs("div", { className: "innerCont orderDetails", children: [_jsxs("div", { className: "aside", children: [_jsx("div", { className: "img", children: _jsx("img", { width: 200, height: 200, src: order?.image, alt: order?.name }) }), _jsxs("div", { className: "content", children: [_jsx("div", { className: "dFlex justifyContentSpaceBetween alignItemCenter", children: _jsxs("h4", { children: ["Item ", index + 1] }) }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("h4", { children: "Size" }), _jsx("h5", { children: order?.size })] }), _jsxs("li", { children: [_jsx("h4", { children: "Align Vertical" }), _jsx("h5", { children: order?.alignVertical })] }), _jsxs("li", { children: [_jsx("h4", { children: "Align Horizontal" }), _jsx("h5", { children: order?.alignHorizontal })] }), _jsxs("li", { children: [_jsx("h4", { children: "Image Scale" }), _jsxs("h5", { children: [order?.imageScale, "%"] })] }), _jsxs("li", { children: [_jsx("h4", { children: "Position" }), _jsx("h5", { children: order?.position })] }), _jsxs("li", { children: [_jsx("h4", { children: "Color" }), _jsx("div", { className: "colorBox", style: { backgroundColor: order?.color } })] })] })] })] }), _jsxs("div", { className: "contFooter", children: [_jsxs("div", { children: [_jsx("h4", { children: order?.name }), _jsxs("p", { children: ["Designed By:", " ", _jsx(Link, { to: "#", children: order?.designedBy })] })] }), _jsx("div", { className: "price", children: _jsxs("h4", { children: ["$", order?.price] }) })] })] }, index) }, index))), _jsx("div", { className: "totalPayment", children: _jsxs("div", { className: "aside", children: [_jsx("h4", { children: "Total Payment" }), _jsx("h4", { children: "$109.98" })] }) })] })] }) })] })) })] }));
};
export default OrderManagement;
