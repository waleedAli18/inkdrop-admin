import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import { Spin } from "antd";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./CustomDetailView.less";

interface CustomDetailViewProps {
  // Any additional props we might need
  breadcrumbTitle?: string;
  loading?: boolean;
  leftColumn?: JSX.Element;
  rightColumn?: JSX.Element;
  EditbtnText?: string;
  EditbtnAction?: () => void;
  DeletebtnText?: string;
  DeletebtnAction?: () => void;
}

const CustomDetailView = (props: CustomDetailViewProps) => {
  const {
    breadcrumbTitle,
    loading,
    leftColumn,
    rightColumn,
    EditbtnText,
    EditbtnAction,
    DeletebtnText,
    DeletebtnAction,
  }: CustomDetailViewProps = props;

  return (
    <div className="detail-management-screen detail-management table-screen">
      <Breadcrumbs Title={breadcrumbTitle} BackBtn={true} />
      <div className="detail-management-detail-sec">
        <CustomRow className="detail-view-sec">
          <CustomColumn lg={12} md={12} sm={24} xs={24} className="detail-left">
            <Spin spinning={loading}>{leftColumn}</Spin>
          </CustomColumn>
          <CustomColumn
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className="detail-right"
          >
            <Spin spinning={loading}>{rightColumn}</Spin>
          </CustomColumn>

          <div className="detail-edit-btn detail-delete-btn">
            {EditbtnText && (
              <CustomButton
                type="primary"
                htmlType="button"
                className="gx-mb-0 btn default-btn"
                onClick={EditbtnAction}
              >
                {EditbtnText}
              </CustomButton>
            )}

            {DeletebtnText && (
              <CustomButton
                type="primary"
                htmlType="button"
                className="gx-mb-0 btn default-btn secondary-button"
                onClick={DeletebtnAction}
              >
                {DeletebtnText}
              </CustomButton>
            )}
          </div>
        </CustomRow>
      </div>
    </div>
  );
};

export default CustomDetailView;
