import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, message } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import {
  PayoutData,
  PaginationDataProps,
  BankFieldsInterface,
} from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomStatusBox from "../../components/customComponents/CustomStatusBox";
import helperFunction from "../../helpers/functions.helper";
import { BANK_DETAILS, PayoutTableData } from "../../utils/data/payout.data";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import CustomModal from "../../components/uiComponents/CustomModal";
import "./Payout.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const PayoutManagement = () => {
  const [form] = Form.useForm();
  const location = useLocation();

  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [bankDetails, setBankDetails] = useState<boolean>(false);
  const [editBankDetails, setEditBankDetails] = useState<boolean>(false);
  const { dropBankDetails } = location.state || {};

  useEffect(() => {
    if (dropBankDetails) {
      setBankDetails(true);
    }
  }, [dropBankDetails]);

  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  // const onFinishSearch = async (value: any) => {
  //   console.log("object", value);
  // };

  const onEditBankDetails = async (values: BankFieldsInterface) => {
    const formData = new FormData();
    formData.append("accountTitle", values.accountTitle);
    formData.append("bankName", values.bankName);
    formData.append("accountNo", values.accountNo);
    formData.append("routingNo", values.routingNo);

    console.log("formData", values);
    setEditBankDetails(false);
    message.success({
      content: `Edited successfully!`,

      duration: 2,
    });
  };

  const handleModalClose = () => {
    if (editBankDetails) {
      setEditBankDetails(false);
    }
  };

  const columns = [
    {
      title: "S.No",
      key: "id",
      render: (res: PayoutData) => `${res?.id}`,
    },
    {
      title: "Username",
      key: "username",
      render: (res: PayoutData) => `${res?.username}`,
    },
    {
      title: "Email",
      key: "email",
      render: (res: PayoutData) => `${res?.email}`,
    },
    {
      title: "Request Date",
      key: "requestDate",
      render: (res: PayoutData) => `${res?.requestDate}`,
    },
    {
      title: "Amount",
      key: "amount",
      render: (res: PayoutData) =>
        `${helperFunction.currencyFormatter(+res?.amount.toFixed(2))}`,
    },
    {
      title: "Status",
      key: "status",
      className: "action-col",
      render: (res: PayoutData) => <CustomStatusBox text={res.status} />,
    },
    {
      title: "Action",
      width: "15%",
      key: "action",
      className: "action-col",
      render: (res: PayoutData) => (
        <CustomButton
          htmlType="button"
          className="action-btn small whiteBtn"
          onClick={() => console.log(res?.id, "Clicked")}
        >
          Pay Now
        </CustomButton>
      ),
    },
  ];

  const contentView = (
    <CustomTable
      bordered
      data={PayoutTableData}
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
    <div className="payouts-screen table-screen">
      <Breadcrumbs
        Title={!bankDetails ? "Payouts Management" : "Bank Details"}
        search={true}
      />
      {!bankDetails ? (
        <>
          <CustomRow>
            <CustomColumn lg={24} md={24} sm={24} xs={24}>
              <CustomGridView
                content={contentView}
                rightHeader={rightHeader}
                btnText="Bank Details"
                btnAction={() => setBankDetails(true)}
              />
            </CustomColumn>
          </CustomRow>
        </>
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ scale: 1, x: -100 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 1, x: -100 }}
              className=" bankDetailsForm"
            >
              <div className="innerWrapper">
                <CustomForm
                  initialValues={{ remember: true }}
                  name="bankDetailsForm"
                  form={form}
                  // onFinish={formValues}
                  className=" gx-form-row0"
                >
                  <CustomRow>
                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        name="acountTitle"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.accountTitle}
                        rules={[
                          {
                            required: false,
                            message: "Account title is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Account Title" disabled />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        name="bankName"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.bankName}
                        rules={[
                          {
                            required: false,
                            message: "Bank name is required.",
                          },

                          {
                            max: 100,
                          },
                        ]}
                      >
                        <CustomInput placeholder="Bank Name" disabled />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        name="accountNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.accountNumber}
                        rules={[
                          {
                            required: false,
                            message: "Account number is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Account No" disabled />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        name="routingNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.routingNumber}
                        rules={[
                          {
                            required: false,
                            message: "Routing number is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Routing No" disabled />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                      <CustomFormItem>
                        <CustomButton
                          type="primary"
                          className="gx-mb-0 btn transparent"
                          onClick={() => setEditBankDetails(true)}
                        >
                          Edit Bank Details
                        </CustomButton>
                      </CustomFormItem>
                    </CustomColumn>
                  </CustomRow>
                </CustomForm>
              </div>
            </motion.div>
          </AnimatePresence>

          <CustomModal
            open={editBankDetails}
            centered
            closable={true}
            onCancel={handleModalClose}
            width="70%"
            style={{ borderRadius: 40, overflow: "hidden" }}
            className={`payouts-screen`}
            footer={null}
          >
            <>
              <CustomColumn>
                <div className="head">
                  <h2>Edit Banking Details</h2>
                </div>
                <CustomForm
                  initialValues={{ remember: true }}
                  name="editBankDetails"
                  form={form}
                  onFinish={onEditBankDetails}
                  className="gx-signin-form gx-form-row0"
                >
                  <CustomRow>
                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        name="acountTitle"
                        label="Account Title"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.accountTitle}
                        rules={[
                          {
                            required: true,
                            message: "Account title is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Account Title" />
                      </CustomFormItem>
                    </CustomColumn>
                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        label="Bank Name"
                        name="bankName"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.bankName}
                        rules={[
                          {
                            required: true,
                            message: "Bank name is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Bank Name" />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        label="Account No"
                        name="accountNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.accountNumber}
                        rules={[
                          {
                            required: true,
                            message: "Account number is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Account No" />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        label="Routing No"
                        name="routingNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        initialValue={BANK_DETAILS.routingNumber}
                        rules={[
                          {
                            required: true,
                            message: "Routing number is required.",
                          },
                        ]}
                      >
                        <CustomInput placeholder="Routing No" />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
                      <CustomFormItem className="text-center mt-4">
                        <CustomButton
                          type="primary"
                          htmlType="submit"
                          className="gx-mb-0 btn"
                          //   loading={}
                        >
                          Update
                        </CustomButton>
                      </CustomFormItem>
                    </CustomColumn>
                  </CustomRow>
                </CustomForm>
              </CustomColumn>
            </>
          </CustomModal>
        </>
      )}
    </div>
  );
};

export default PayoutManagement;
