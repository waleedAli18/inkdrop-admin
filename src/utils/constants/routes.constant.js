import { jsx as _jsx } from "react/jsx-runtime";
import DashboardIcon from "../../assets/all-gts-svg-files/dashboardicon";
import OrderManagementIcon from "../../assets/all-gts-svg-files/orderManagementIcon";
import PayoutsManagementIcon from "../../assets/all-gts-svg-files/payoutsManagementIcon";
import ProductManagementIcon from "../../assets/all-gts-svg-files/productManagementIcon";
import UserManagementIcon from "../../assets/all-gts-svg-files/userManagementIcon";
export const AUTHENTICATED_ROUTES = {
  DASHBOARD: "dashboard",
  PRODUCT_MANAGEMENT: "product-management",
  USER_MANAGEMENT: "user-management",
  USER_MANAGEMENT_DETAILS: "details",
  ORDER_MANAGEMENT: "order-management",
  PAYOUT_MANAGEMENT: "payout-management",
};
export const AllMenusItems = [
  {
    label: "Dashboard",
    linkTo: AUTHENTICATED_ROUTES.DASHBOARD,
    selectedOptionKey: AUTHENTICATED_ROUTES.DASHBOARD,
    icon: _jsx(DashboardIcon, {}),
  },
  {
    label: "User Management",
    linkTo: AUTHENTICATED_ROUTES.USER_MANAGEMENT,
    selectedOptionKey: AUTHENTICATED_ROUTES.USER_MANAGEMENT,
    icon: _jsx(UserManagementIcon, {}),
  },
  {
    label: "Product Management",
    linkTo: AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT,
    selectedOptionKey: AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT,
    icon: _jsx(ProductManagementIcon, {}),
  },
  {
    label: "Order Management",
    linkTo: AUTHENTICATED_ROUTES.ORDER_MANAGEMENT,
    selectedOptionKey: AUTHENTICATED_ROUTES.ORDER_MANAGEMENT,
    icon: _jsx(OrderManagementIcon, {}),
  },
  {
    label: "Payouts Management",
    linkTo: AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT,
    selectedOptionKey: AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT,
    icon: _jsx(PayoutsManagementIcon, {}),
  },
];
