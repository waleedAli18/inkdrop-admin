import { useState, useCallback } from "react";
import { Button, Form, Modal, message } from "antd";
import {
  faDollar,
  faEdit,
  faEye,
  faFileArrowUp,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
  PRODUCT_VIEW,
  SHIRT_SIZE,
  pageSize,
} from "../../utils/constants/app.constant";
import { PaginationDataProps, imageUploadProps } from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import helperFunction from "../../helpers/functions.helper";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import { ProductListinInterface } from "../../utils/interface/screens/productManagement.interface";
import { ProductListingTableData } from "../../utils/data/productManagement.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomModal from "../../components/uiComponents/CustomModal";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import ImageUploader from "../../components/customComponents/ImageUploader";
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomSelect from "../../components/uiComponents/CustomSelect/CustomSelect";
import SizeSelector from "../../components/customComponents/SizeSelector";
import CustomInputNumber from "../../components/uiComponents/CustomInputNumber/CustomInputNumber";
import CustomTextarea from "../../components/uiComponents/CustomTextarea/CustomTextarea";
import CustomColorPicker from "../../components/customComponents/CustomColorPicker";
import "./ProductManagement.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const ProductListing = () => {
  const [form] = Form.useForm();
  const { confirm } = Modal;
  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();
  const [file, setFile] = useState<object | null>();
  const [image, setImage] = useState<any>();
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);
  const [logoFile, setLogoFile] = useState(null);
  // const [loader, setLoader] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<boolean>(false);

  const handleColorsChange = (colors: string[]) => {
    setSelectedColors(colors);
  };

  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  // const onFinishSearch = async (value: any) => {
  //   console.log("object", value);
  // };

  const handleModalClose = () => {
    if (openModal) {
      setOpenModal(false);
      form.resetFields();
      setViewMode(false);
      setSelectedSize([]);
    }
  };

  const handleSizeSelection = (size: string[]) => {
    setSelectedSize(size);
    form.setFieldValue("size", size);
  };

  const handleViewAction = (res: any) => {
    setViewMode(true);
    setSelectedSize(res?.size);
    form.setFieldsValue({
      productCategory: res?.productCategory,
      productType: res?.productType,
      productTitle: res?.productTitle,
      productView: res?.productView,
      price: res?.price,
      size: res?.size,
      color: res?.color,
      productFeatures: res?.features?.join("\n"),
    });
  };

  const onFinish = (values: FormData) => {
    console.log("values", values);
    form.resetFields();
    setViewMode(false);
    setSelectedSize([]);
    setOpenModal(false);
    message.success({
      content: `Product ${viewMode ? "Updated" : "Added"} Succesfully!`,
      duration: 3,
    });
  };

  const customRequest = async (info: any) => {
    const { onSuccess, onError, file } = info;
    setButtonLoader(true);
    try {
      await new Promise((resolve) => {
        if (info.file.type == "image/png" || info.file.type == "image/jpeg") {
          setFile(info.file);
          setButtonLoader(false);

          message.success(`${info.file.name} File Uploaded`);
          form.setFieldsValue({
            profilePicture: info.file,
          });
          setLogoFile(info.file);
        } else {
          setFile(null);
          setButtonLoader(false);
          message.error(`${info.file.name} is not 'jpeg/png'`);
        }

        const reader = new FileReader();
        const formData = new FormData();
        formData.append("file", file);
        const data = {
          src: "",
          formData,
          type: file.type,
          name: file.name,
        };
        reader.readAsDataURL(file);
        reader.onload = () => {
          data.src = reader.result?.toString() || "";
          setImage(data);
          resolve(data);
        };
      });
      onSuccess();
    } catch (err) {
      onError({ err });
    }
  };

  const uploadProps: imageUploadProps = {
    name: "customFile",
    multiple: false,
    maxCount: 1,
    showUploadList: false,
    accept: "image/png, image/jpeg",
    customRequest: customRequest,
    onDrop: customRequest,
  };

  const showPromiseConfirmDelete = (res: any) => {
    confirm({
      title: `Delete?`,
      width: "455px",
      className: "logout-modal",
      icon: (
        <div className="icon-wrapper">
          {<FontAwesomeIcon className="" icon={faTrashAlt} />}
        </div>
      ),
      content: `Are you sure you want to delete this product (${res.id})?`,
      centered: true,
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        deleteCall();
      },
    });
  };

  const deleteCall = useCallback(async () => {
    // navigate("/");
  }, []);

  const columns = [
    {
      title: "Image",
      key: "image",
      render: (res: ProductListinInterface) => (
        <img src={res?.image} alt="Product" />
      ),
    },
    {
      title: "S.No",
      key: "id",
      render: (res: ProductListinInterface) => `${res?.id}`,
    },
    {
      title: "Product Category",
      key: "productCategory",
      render: (res: ProductListinInterface) => `${res?.productCategory}`,
    },
    {
      title: "Product Title",
      key: "productTitle",
      render: (res: ProductListinInterface) => `${res?.productTitle}`,
    },
    {
      title: "Date Added",
      key: "dateAdded",
      render: (res: ProductListinInterface) => `${res?.dateAdded}`,
    },

    {
      title: "Action",
      width: "140px",
      key: "action",
      className: "action-col text-center",
      render: (res: ProductListinInterface) => (
        <>
          <div className="icons d-flex alignItemCenter justifyContentSpaceBetween">
            <Button
              htmlType="button"
              className="btn eye"
              onClick={() => {
                setModalData(res),
                  handleViewAction(res),
                  console.log(res, "Eye Clicked"),
                  setOpenModal(true);
              }}
            >
              <FontAwesomeIcon className="" icon={faEye} color="#556EE6" />
            </Button>
            <Button
              htmlType="button"
              className="btn edit"
              onClick={() => console.log(res?.id, "Edit Clicked")}
            >
              <FontAwesomeIcon className="" icon={faEdit} color="#691883" />
            </Button>
            <Button
              htmlType="button"
              className="btn trash"
              onClick={() => {
                showPromiseConfirmDelete(res),
                  console.log(res?.id, "Trash Clicked");
              }}
            >
              <FontAwesomeIcon className="" icon={faTrashAlt} color="red" />
            </Button>
          </div>
        </>
      ),
    },
  ];

  const contentView = (
    <CustomTable
      bordered
      data={ProductListingTableData}
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
    <div className="product-listing-tab-wrapper table-screen">
      <>
        <CustomRow>
          <CustomColumn lg={24} md={24} sm={24} xs={24}>
            <CustomGridView
              content={contentView}
              rightHeader={rightHeader}
              btnText="Add New"
              btnAction={() => setOpenModal(true)}
              //  leftHeader={headerView}
            />
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
            <div className="design-modal-wrapper">
              <CustomRow>
                <CustomColumn
                  xl={24}
                  lg={24}
                  md={24}
                  sm={24}
                  xs={24}
                  className="head"
                >
                  <CustomHeading>
                    {`${
                      viewMode
                        ? "Product # " + modalData?.id
                        : "Add New Product"
                    }`}
                  </CustomHeading>
                </CustomColumn>
              </CustomRow>
              <CustomForm
                initialValues={{ remember: true }}
                name="addProductForm"
                form={form}
                onFinish={onFinish}
                className="gx-signin-form gx-form-row0"
              >
                <CustomRow>
                  <CustomColumn
                    xl={6}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                    className="left"
                  >
                    <CustomFormItem
                      label="Front"
                      name="profilePicture"
                      colon={false}
                      className="product-img"
                      // initialValue={USER_DATA?.profilePicture}
                    >
                      <ImageUploader
                        setFile={setFile}
                        image={image}
                        icon={false}
                        btnIcon={
                          <FontAwesomeIcon icon={faFileArrowUp} color="white" />
                        }
                        uploadProps={uploadProps}
                      />
                    </CustomFormItem>

                    <CustomFormItem
                      label="Back"
                      name="profilePicture"
                      colon={false}
                      className="product-img"
                      // initialValue={USER_DATA?.profilePicture}
                    >
                      <ImageUploader
                        setFile={setFile}
                        image={image}
                        icon={false}
                        btnIcon={
                          <FontAwesomeIcon icon={faFileArrowUp} color="white" />
                        }
                        uploadProps={uploadProps}
                      />
                    </CustomFormItem>
                  </CustomColumn>

                  <CustomColumn
                    xl={18}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                    className="right"
                  >
                    <div className="disabled-head">
                      <CustomHeading>Product Settings</CustomHeading>
                    </div>

                    <CustomFormItem
                      name="productCategory"
                      label="Product Category"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Product Category is required!",
                        },
                      ]}
                    >
                      <CustomSelect
                        // defaultValue=""
                        options={PRODUCT_CATEGORY}
                        // onChange={}
                        placeholder="Select Category"
                      ></CustomSelect>
                    </CustomFormItem>

                    <CustomFormItem
                      name="productType"
                      label="Product Type"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Product Type is required!",
                        },
                      ]}
                    >
                      <CustomSelect
                        // defaultValue=""
                        options={PRODUCT_TYPE}
                        // onChange={}
                        placeholder="Select Type"
                      ></CustomSelect>
                    </CustomFormItem>

                    <CustomFormItem
                      name="productTitle"
                      label="Product Title"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Product Title is required!",
                        },
                      ]}
                    >
                      <CustomInput placeholder="Type here" />
                    </CustomFormItem>

                    <CustomFormItem
                      name="productView"
                      label="Product View"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Product View is required!",
                        },
                      ]}
                    >
                      <CustomSelect
                        // defaultValue=""
                        options={PRODUCT_VIEW}
                        // onChange={}
                        placeholder="Select View"
                      ></CustomSelect>
                    </CustomFormItem>

                    <CustomFormItem
                      name="price"
                      label="Price"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Price is required!",
                        },
                      ]}
                    >
                      <CustomInputNumber
                        prefix={
                          <FontAwesomeIcon icon={faDollar} color="#595959" />
                        }
                      />
                    </CustomFormItem>

                    <CustomFormItem
                      name="size"
                      label="Size"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: false,
                          message: "Size is required!",
                        },
                      ]}
                    >
                      <SizeSelector
                        selectedSizes={selectedSize}
                        onSelectSize={handleSizeSelection}
                        sizes={SHIRT_SIZE}
                      />
                    </CustomFormItem>

                    <CustomFormItem
                      name="color"
                      label="Color"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Color is required!",
                        },
                      ]}
                    >
                      <CustomColorPicker
                        value={selectedColors}
                        onChange={handleColorsChange}
                      />
                    </CustomFormItem>

                    <CustomFormItem
                      name="productFeatures"
                      label="Product Features"
                      colon={false}
                      validateTrigger="onBlur"
                      rules={[
                        {
                          required: true,
                          message: "Product features are required!",
                        },
                      ]}
                    >
                      <CustomTextarea />
                    </CustomFormItem>
                  </CustomColumn>

                  <CustomColumn
                    xl={24}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                    className="text-center"
                  >
                    <CustomButton
                      type="primary"
                      htmlType="submit"
                      className="gx-mb-0 add-update-update-btn btn default-btn "
                    >
                      {viewMode ? "Update" : "Add Product"}
                    </CustomButton>
                  </CustomColumn>
                </CustomRow>
              </CustomForm>
            </div>
          </>
        </CustomModal>
      </>
    </div>
  );
};

export default ProductListing;
