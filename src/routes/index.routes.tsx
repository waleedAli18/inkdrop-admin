import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout";
import { AUTHENTICATED_ROUTES } from "../utils/constants/routes.constant";
import FullScreenLoader from "../components/customComponents/FullScreenLoader";

const Login = lazy(() => import("../screens/auth/login"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const UserManagement = lazy(() => import("../screens/UserManagement"));
const UserManagementDetails = lazy(
  () => import("../screens/UserManagement/details")
);
const ProductManagement = lazy(() => import("../screens/ProductManagement"));
const OrderManagement = lazy(() => import("../screens/OrderManagement"));
const PayoutManagement = lazy(() => import("../screens/PayoutManagement"));

interface Props {
  children: React.ReactNode;
}

interface AuthenticateProps {
  children: React.ReactNode;
  route: React.ReactNode;
}

const UnauthenticatedUser = ({ children }: Props) => {
  return children;
};

/**
 * This function Authenticate the user
 * @param {Element} children
 * @returns
 */
const AuthenticatedUser = ({ children }: Props) => {
  return children;
};

/**
 *
 * @param {Element} children
 * @param {String} route
 * @returns
 */

const AuthenticatedRoute = ({ children }: AuthenticateProps) => {
  function authenticateRoute(route: string) {
    if (route) return true;
    return false;
  }

  return children;
};

function AppRoutes() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <UnauthenticatedUser>
              <Login />
            </UnauthenticatedUser>
          }
        />

        {/* PROTECTED ROUTES */}

        <Route
          path="/"
          element={
            <AuthenticatedUser>
              <MainLayout />
            </AuthenticatedUser>
          }
        >
          <Route path={AUTHENTICATED_ROUTES.DASHBOARD}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path={AUTHENTICATED_ROUTES.USER_MANAGEMENT}>
            <Route index element={<UserManagement />} />

            <Route path={AUTHENTICATED_ROUTES.USER_MANAGEMENT_DETAILS}>
              <Route path=":id">
                <Route index element={<UserManagementDetails />} />
              </Route>
            </Route>
          </Route>

          <Route path={AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT}>
            <Route index element={<PayoutManagement />} />
          </Route>

          <Route path={AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT}>
            <Route index element={<ProductManagement />} />
          </Route>
          <Route path={AUTHENTICATED_ROUTES.ORDER_MANAGEMENT}>
            <Route index element={<OrderManagement />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
