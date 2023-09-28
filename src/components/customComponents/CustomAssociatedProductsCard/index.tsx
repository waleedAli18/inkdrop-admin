import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AssociatedProductsInterface } from "../../../utils/interface/screens/userManagementData.interface";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomAssociatedProductsCard.less";

interface CustomAssociatedProductsCardProps {
  data: AssociatedProductsInterface;
  link?: string;
  children?: ReactNode;
  deleteButton?: boolean;
  onDeleteClick?: () => void;
  associateAcceptDeclineButtons?: boolean;
  associateAcceptHandle: () => void;
  associateDeclineHandle: () => void;
  active?: ReactNode;
}

const CustomAssociatedProductsCard: React.FC<
  CustomAssociatedProductsCardProps
> = ({
  data,
  link,
  children,
  deleteButton,
  onDeleteClick,
  active,
  associateAcceptDeclineButtons,
  associateAcceptHandle,
  associateDeclineHandle,
}) => {
  const { imageSrc } = data;

  return (
    <>
      <div>
        <div className={`cont ${data?.status}`}>
          {imageSrc && (
            <div className="img">
              <img
                height={250}
                width={200}
                src={imageSrc}
                alt="Associated Products"
                style={{ objectFit: "contain" }}
              />
              {deleteButton && (
                <button onClick={onDeleteClick} className="deleteIcon">
                  {/* <img src={deleteIcon} alt="Delete"></img> */}
                </button>
              )}
              {!data?.status && (
                <span className={`status ${data?.status}`}>
                  {data?.status ? "Accepted" : "Rejected"}
                </span>
              )}
            </div>
          )}
          {children}
          {link && (
            <Link to={link}>
              {deleteButton ? "Edit Product" : "Customize Product"}
            </Link>
          )}
          {active}
          {associateAcceptDeclineButtons && (
            <div className="accept-decline">
              <CustomButton
                disabled={!data?.status}
                onClick={() => associateAcceptHandle()}
              >
                Accept
              </CustomButton>
              <CustomButton
                disabled={!data?.status}
                onClick={() => associateDeclineHandle()}
              >
                Decline
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomAssociatedProductsCard;
