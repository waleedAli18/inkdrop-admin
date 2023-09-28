import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout";
import { AUTHENTICATED_ROUTES } from "../utils/constants/routes.constant";
import FullScreenLoader from "../components/customComponents/FullScreenLoader";
const Login = lazy(() => import("../screens/auth/login"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const UserManagement = lazy(() => import("../screens/UserManagement"));
const UserManagementDetails = lazy(() => import("../screens/UserManagement/details"));
const ProductManagement = lazy(() => import("../screens/ProductManagement"));
const OrderManagement = lazy(() => import("../screens/OrderManagement"));
const PayoutManagement = lazy(() => import("../screens/PayoutManagement"));
const UnauthenticatedUser = ({ children }) => {
    return children;
};
/**
 * This function Authenticate the user
 * @param {Element} children
 * @returns
 */
const AuthenticatedUser = ({ children }) => {
    return children;
};
/**
 *
 * @param {Element} children
 * @param {String} route
 * @returns
 */
const AuthenticatedRoute = ({ children }) => {
    function authenticateRoute(route) {
        if (route)
            return true;
        return false;
    }
    return children;
};
function AppRoutes() {
    return (_jsx(Suspense, { fallback: _jsx(FullScreenLoader, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(UnauthenticatedUser, { children: _jsx(Login, {}) }) }), _jsxs(Route, { path: "/", element: _jsx(AuthenticatedUser, { children: _jsx(MainLayout, {}) }), children: [_jsx(Route, { path: AUTHENTICATED_ROUTES.DASHBOARD, children: _jsx(Route, { index: true, element: _jsx(Dashboard, {}) }) }), _jsxs(Route, { path: AUTHENTICATED_ROUTES.USER_MANAGEMENT, children: [_jsx(Route, { index: true, element: _jsx(UserManagement, {}) }), _jsx(Route, { path: AUTHENTICATED_ROUTES.USER_MANAGEMENT_DETAILS, children: _jsx(Route, { path: ":id", children: _jsx(Route, { index: true, element: _jsx(UserManagementDetails, {}) }) }) })] }), _jsx(Route, { path: AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT, children: _jsx(Route, { index: true, element: _jsx(PayoutManagement, {}) }) }), _jsx(Route, { path: AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT, children: _jsx(Route, { index: true, element: _jsx(ProductManagement, {}) }) }), _jsx(Route, { path: AUTHENTICATED_ROUTES.ORDER_MANAGEMENT, children: _jsx(Route, { index: true, element: _jsx(OrderManagement, {}) }) })] })] }) }));
}
export default AppRoutes;
