import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import { useLocation, useNavigate } from "react-router-dom";
import { PRODUCT_MANAGEMENT_TAB_KEY } from "../../utils/constants/app.constant";
import ProductListing from "./ProductListing";
import NewDesignsListing from "./NewDesignsListing";
import "./ProductManagement.less";

const ProductManagement = () => {
  const navigate = useNavigate();

  const param = useLocation();

  const tabItems = [
    {
      label: "Product Listing",
      key: PRODUCT_MANAGEMENT_TAB_KEY.PRODUCT_LISTING,
      children: <ProductListing />,
    },
    {
      label: "New Designs Listing",
      key: PRODUCT_MANAGEMENT_TAB_KEY.NEW_DESIGNS_LISTING,
      children: <NewDesignsListing />,
    },
  ];
  return (
    <>
      <Breadcrumbs Title="Product Management" search={true} />
      <div className="product-management-wrapper">
        <div className="product-tab-sec">
          <div className="cont">
            <CustomTab
              animated
              type="card"
              defaultActiveKey={param.hash}
              items={tabItems}
              onChange={(key) => {
                navigate(`${key}`);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
