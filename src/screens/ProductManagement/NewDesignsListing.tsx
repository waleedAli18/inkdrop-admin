import { useState } from "react";
import { Form, message } from "antd";
import { pageSize } from "../../utils/constants/app.constant";
import { PaginationDataProps } from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import helperFunction from "../../helpers/functions.helper";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import { NewDesignsListinInterface } from "../../utils/interface/screens/productManagement.interface";
import { NewDesignsListingTableData } from "../../utils/data/productManagement.data";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomModal from "../../components/uiComponents/CustomModal";
import DesignModal from "../../components/customComponents/DesignModal";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomTextarea from "../../components/uiComponents/CustomTextarea/CustomTextarea";
import "./ProductManagement.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const NewDesignsListing = () => {
  const [form] = Form.useForm();

  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();
  const [openDeclineModal, setDeclineModal] = useState<boolean>(false);

  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  // const onFinishSearch = async (value: any) => {
  //   console.log("object", value);
  // };

  const handleModalClose = () => {
    if (openModal && !openDeclineModal) {
      setOpenModal(false);
    }
    if (openDeclineModal) {
      setDeclineModal(false);
    }
  };

  const onFinish = (values: FormData) => {
    console.log("Decline Reason", values);
    setDeclineModal(false);
    form.resetFields();
  };

  const handleDesignAccept = () => {
    console.log("Accepted");
    message.success({
      content: `Design Accepted!`,

      duration: 3,
    });
  };

  const handleDesignDecline = () => {
    console.log("Declined");
    setDeclineModal(true);
  };

  const columns = [
    {
      title: "S.No",
      key: "id",
      render: (res: NewDesignsListinInterface) => `${res?.id}`,
    },
    {
      title: "Title",
      key: "title",
      render: (res: NewDesignsListinInterface) => `${res?.title}`,
    },

    {
      title: "Added By",
      key: "addedBy",
      render: (res: NewDesignsListinInterface) => `${res?.addedBy}`,
    },
    {
      title: "Date Added",
      key: "dateAdded",
      render: (res: NewDesignsListinInterface) => `${res?.dateAdded}`,
    },
    {
      title: "Products",
      key: "products",
      render: (res: NewDesignsListinInterface) => `${res?.products}`,
    },

    {
      title: "Action",
      width: "15%",
      key: "action",
      className: "action-col text-center",
      render: (res: NewDesignsListinInterface) => (
        <>
          <CustomButton
            htmlType="button"
            className="action-btn small whiteBtn"
            onClick={() => {
              setModalData(res), setOpenModal(true);
            }}
          >
            View Details
          </CustomButton>
        </>
      ),
    },
  ];

  const contentView = (
    <CustomTable
      bordered
      data={NewDesignsListingTableData}
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
      <div className="product-listing-tab-wrapper table-screen">
        <CustomRow>
          <CustomColumn lg={24} md={24} sm={24} xs={24}>
            <CustomGridView content={contentView} rightHeader={rightHeader} />
          </CustomColumn>
        </CustomRow>

        <CustomModal
          open={openModal}
          centered
          closable={true}
          onCancel={handleModalClose}
          width="1250px"
          style={{ borderRadius: 12, overflow: "hidden" }}
          footer={null}
        >
          <>
            <DesignModal
              artCardData={modalData?.designs}
              associatedProductData={modalData?.associate}
              designId={modalData?.id}
              associateAcceptDeclineButtons={true}
              associateAcceptHandle={() => handleDesignAccept()}
              associateDeclineHandle={() => handleDesignDecline()}
              artAcceptHandle={() => console.log("Accepted")}
              artDeclineHandle={() => console.log("Declined")}
            />
          </>
        </CustomModal>

        <CustomModal
          open={openDeclineModal}
          centered
          closable={true}
          onCancel={handleModalClose}
          width="670px"
          style={{ borderRadius: 12, overflow: "hidden" }}
          // className={styles.orderModal}
          footer={null}
        >
          <>
            <div className="authModalWrapper">
              <div className="authSec forgot-password">
                <CustomColumn xl={24} lg={24} md={24} sm={24}>
                  <div className="authScreen">
                    <div className="head">
                      <h2>Reason of Rejection</h2>
                    </div>

                    <CustomForm
                      initialValues={{ remember: true }}
                      name="declineModal"
                      form={form}
                      onFinish={onFinish}
                      className="gx-signin-form gx-form-row0"
                    >
                      <CustomFormItem
                        required={false}
                        name="reason"
                        // label="Reason"
                        colon={false}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: true,
                            message: "Reason is required.",
                          },
                          {
                            message: "Reason is invalid.",
                          },
                          {
                            max: 320,
                          },
                        ]}
                      >
                        <CustomTextarea
                          placeholder="Type the reason here"
                          style={{ height: 150, resize: "none" }}
                        />
                      </CustomFormItem>

                      <CustomFormItem className="text-center mt-4">
                        <CustomButton
                          type="primary"
                          htmlType="submit"
                          className="gx-mb-0 btn"
                          //   loading={loading}
                        >
                          Submit
                        </CustomButton>
                      </CustomFormItem>
                    </CustomForm>
                  </div>
                </CustomColumn>
              </div>
            </div>
          </>
        </CustomModal>
      </div>
    </>
  );
};

export default NewDesignsListing;
