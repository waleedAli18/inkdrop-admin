import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import { useLocation, useNavigate } from "react-router-dom";
import { PRODUCT_MANAGEMENT_TAB_KEY } from "../../utils/constants/app.constant";
import ProductListing from "./ProductListing";
import NewDesignsListing from "./NewDesignsListing";
import "./ProductManagement.less";
const ProductManagement = () => {
    const navigate = useNavigate();
    const param = useLocation();
    const tabItems = [
        {
            label: "Product Listing",
            key: PRODUCT_MANAGEMENT_TAB_KEY.PRODUCT_LISTING,
            children: _jsx(ProductListing, {}),
        },
        {
            label: "New Designs Listing",
            key: PRODUCT_MANAGEMENT_TAB_KEY.NEW_DESIGNS_LISTING,
            children: _jsx(NewDesignsListing, {}),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Breadcrumbs, { Title: "Product Management", search: true }), _jsx("div", { className: "product-management-wrapper", children: _jsx("div", { className: "product-tab-sec", children: _jsx("div", { className: "cont", children: _jsx(CustomTab, { animated: true, type: "card", defaultActiveKey: param.hash, items: tabItems, onChange: (key) => {
                                navigate(`${key}`);
                            } }) }) }) })] }));
};
export default ProductManagement;
