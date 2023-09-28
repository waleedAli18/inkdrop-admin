import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from "react";
import { motion } from "framer-motion";
import { Table } from "antd";
import { pageSize } from "../../../utils/constants/app.constant";
import "./CustomTable.less";
const CustomTable = (props) => {
    const { data = new Array(0), className = "", pagination = {
        current: 1,
        pageSize: props.pagination?.pageSize
            ? props.pagination?.pageSize
            : pageSize,
        total: 10,
    }, } = props;
    let uniqueId = 0;
    return (_jsx(_Fragment, { children: _jsx("div", { className: "customTableWrapper", children: _jsx(Table, { ...props, className: `${className} custom-table-container cardWithStyle`, dataSource: data, rowKey: (record) => {
                    if (!record?.id) {
                        return ++uniqueId;
                    }
                    return record?.id;
                }, pagination: {
                    showTotal: (total, range) => (_jsx("div", { children: `Showing ${range[0]} to ${range[1]} of ${total} entries` })),
                    pageSize: pagination.pageSize,
                }, components: {
                    body: {
                        row: (props, index) => (_jsx(motion.tr, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 1, type: "spring" }, ...props }, index)),
                    },
                } }) }) }));
};
export default memo(CustomTable);
