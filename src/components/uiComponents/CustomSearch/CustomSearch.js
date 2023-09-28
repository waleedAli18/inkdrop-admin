import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "antd";
import { memo } from "react";
import "./CustomSearch.less";
const CustomSearch = (props) => {
    const { Search } = Input;
    return (_jsx("span", { className: "kl-custom-search-container", children: _jsx(Search, { ...props }) }));
};
export default memo(CustomSearch);
