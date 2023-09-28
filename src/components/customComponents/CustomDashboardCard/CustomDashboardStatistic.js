import { jsx as _jsx } from "react/jsx-runtime";
import { Statistic } from "antd";
import { memo } from "react";
import "./custom-dashboard-card.less";
const CustomDashboardStatistic = ({ className = "", prefix, ...props }) => {
    return (_jsx(Statistic, { prefix: prefix, ...props, className: `customCardDashboard ${className}` }));
};
export default memo(CustomDashboardStatistic);
