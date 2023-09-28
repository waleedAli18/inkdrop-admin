import { memo } from "react";
import { motion } from "framer-motion";
import { Table, TablePaginationConfig, TableProps } from "antd";
import { pageSize } from "../../../utils/constants/app.constant";
import "./CustomTable.less";

interface CustomTableProps extends TableProps<TablePaginationConfig> {
  data?: Array<object>;
  className?: string;
  pagination?: TablePaginationConfig;
  listingCallback?: (data: ListingCallbackProps) => any;
}

interface ListingCallbackProps {
  page: number;
  take: number;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
  const {
    data = new Array(0),
    className = "",
    pagination = {
      current: 1,
      pageSize: props.pagination?.pageSize
        ? props.pagination?.pageSize
        : pageSize,
      total: 10,
    },
  }: // listingCallback = () => {},
  CustomTableProps = props;
  let uniqueId = 0;

  return (
    <>
      {/* ONLY TABLE COMPONENT */}
      <div className="customTableWrapper">
        <Table
          {...props}
          className={`${className} custom-table-container cardWithStyle`}
          dataSource={data}
          rowKey={(record: any) => {
            if (!record?.id) {
              return ++uniqueId;
            }
            return record?.id;
          }}
          pagination={{
            showTotal: (total: number, range: [number, number]) => (
              <div>{`Showing ${range[0]} to ${range[1]} of ${total} entries`}</div>
            ),
            pageSize: pagination.pageSize,
          }}
          components={{
            body: {
              row: (props, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 1, type: "spring" }}
                  {...props}
                />
              ),
            },
          }}
          // pagination={{
          //   showTotal: (total: number, range: [number, number]) =>
          //     `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          //   current: pagination.current ?? 1,
          //   pageSize: pagination.pageSize,
          //   total: pagination.total,
          //   onChange: (page, pageSize) => {
          //     listingCallback({
          //       page: page,
          //       take: pageSize,
          //     });
          //   },
          // }}
        />
      </div>
    </>
  );
};

export default memo(CustomTable);
