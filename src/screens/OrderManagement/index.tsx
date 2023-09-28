import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import { PaginationDataProps } from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomStatusBox from "../../components/customComponents/CustomStatusBox";
import helperFunction from "../../helpers/functions.helper";
import { OrderData } from "../../utils/interface/screens/order.interface";
import { OrderTableData } from "../../utils/data/order.data";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import CustomModal from "../../components/uiComponents/CustomModal";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import "./OrderManagement.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const OrderManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  // const onFinishSearch = async (value: any) => {
  //   console.log("object", value);
  // };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleOrderClick = (res: OrderData) => {
    setIsModalVisible(true);
    setSelectedOrder(res);
  };

  const columns = [
    {
      title: "Order Number",
      key: "id",
      render: (res: OrderData) => `${res?.id}`,
    },
    {
      title: "Order Date",
      key: "orderDate",
      render: (res: OrderData) => `${res?.orderDate}`,
    },
    {
      title: "Amount",
      key: "amount",
      render: (res: OrderData) => `${res?.amount}`,
    },
    {
      title: "Shipment Address",
      key: "shipmentAddress",
      render: (res: OrderData) => `${res?.shipmentAddress}`,
    },

    {
      title: "Status",
      key: "status",
      className: "action-col",
      render: (res: OrderData) => <CustomStatusBox text={res.status} />,
    },
    {
      title: "Action",
      width: "15%",
      key: "action",
      className: "action-col",
      render: (res: OrderData) => (
        <CustomButton
          htmlType="button"
          className="action-btn small whiteBtn"
          onClick={() => handleOrderClick(res)}
        >
          View Details
        </CustomButton>
      ),
    },
  ];

  const contentView = (
    <CustomTable
      bordered
      data={OrderTableData}
      columns={columns}
      loading={gridPreLoader}
      pagination={pagination}
    />
  );

  const rightHeader = (
    <>
      <CustomDatePicker
        placeholder="Start Date"
        disabledDate={helperFunction.disabledFutureDate}
      />
      <CustomDatePicker
        placeholder="End Date"
        disabledDate={helperFunction.disabledFutureDate}
      />
    </>
  );

  return (
    <>
      <div className="order-management-screen table-screen">
        <Breadcrumbs Title="Order Management" search={true} />
        <CustomRow>
          <CustomColumn lg={24} md={24} sm={24} xs={24}>
            <CustomGridView content={contentView} rightHeader={rightHeader} />
          </CustomColumn>
        </CustomRow>
      </div>

      {/* Modal */}
      <CustomModal
        open={isModalVisible}
        centered
        onCancel={handleModalClose}
        width="700px"
        className="orderModal"
        footer={null}
        closable={false}
      >
        {selectedOrder && (
          <CustomRow>
            <CustomColumn xl={24} lg={24} md={24} sm={24}>
              <div className="head">
                <CustomHeading>Order ID # {selectedOrder.id}</CustomHeading>
              </div>
            </CustomColumn>

            <CustomColumn xl={24} lg={24} md={24} sm={24}>
              <div className="left">
                <div className="wrapper">
                  <CustomHeading>Delivery Details</CustomHeading>
                  <div className="innerCont deliveryDetails">
                    <ul>
                      <li>
                        <h4>Name:</h4>
                        <h5>{selectedOrder?.deliveryDetails?.name}</h5>
                      </li>
                      <li>
                        <h4>Address:</h4>
                        <h5>{selectedOrder?.shipmentAddress}</h5>
                      </li>

                      <li>
                        <h4>Email:</h4>
                        <h5>{selectedOrder?.deliveryDetails?.email}</h5>
                      </li>

                      <li>
                        <h4>Phone:</h4>
                        <h5>{selectedOrder?.deliveryDetails?.phone}</h5>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="aside heading">
                    <CustomHeading>
                      Order Details{" "}
                      <CustomStatusBox text={selectedOrder.status} />
                    </CustomHeading>
                  </div>

                  {selectedOrder?.orderDetails?.map((order, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="innerCont orderDetails" key={index}>
                        <div className="aside">
                          <div className="img">
                            <img
                              width={200}
                              height={200}
                              src={order?.image}
                              alt={order?.name}
                            />
                          </div>
                          <div className="content">
                            <div className="dFlex justifyContentSpaceBetween alignItemCenter">
                              <h4>Item {index + 1}</h4>
                            </div>

                            <ul>
                              <li>
                                <h4>Size</h4>
                                <h5>{order?.size}</h5>
                              </li>
                              <li>
                                <h4>Align Vertical</h4>
                                <h5>{order?.alignVertical}</h5>
                              </li>

                              <li>
                                <h4>Align Horizontal</h4>
                                <h5>{order?.alignHorizontal}</h5>
                              </li>

                              <li>
                                <h4>Image Scale</h4>
                                <h5>{order?.imageScale}%</h5>
                              </li>

                              <li>
                                <h4>Position</h4>
                                <h5>{order?.position}</h5>
                              </li>

                              <li>
                                <h4>Color</h4>

                                <div
                                  className="colorBox"
                                  style={{ backgroundColor: order?.color }}
                                ></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="contFooter">
                          <div>
                            <h4>{order?.name}</h4>
                            <p>
                              Designed By:{" "}
                              <Link to="#">{order?.designedBy}</Link>
                            </p>
                          </div>
                          <div className="price">
                            <h4>${order?.price}</h4>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="totalPayment">
                    <div className="aside">
                      <h4>Total Payment</h4>
                      <h4>$109.98</h4>
                    </div>
                  </div>
                </div>
              </div>
            </CustomColumn>
          </CustomRow>
        )}
      </CustomModal>
    </>
  );
};

export default OrderManagement;
