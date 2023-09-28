import { Rate } from "antd";
import { CustomArtCardInterface } from "../../../utils/interface";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomArtCard.less";

interface CustomCustomArtCardProps {
  data: CustomArtCardInterface;
  link?: string;
  handleClick: () => void;
  artAcceptDeclineButtons?: boolean;
  artAcceptHandle: () => void;
  artDeclineHandle: () => void;
}

const CustomArtCard: React.FC<CustomCustomArtCardProps> = ({
  data,
  handleClick,
  artAcceptDeclineButtons,
  artAcceptHandle,
  artDeclineHandle,
}) => {
  const { imageSrc, heading, review, category, created } = data;

  return (
    <>
      <div>
        <div className="customArtCardWrapper">
          <div className="customArtCard" onClick={() => handleClick()}>
            <div className="img">
              <img src={imageSrc} height={220} width={220} alt="Art" />
            </div>
            <div className="cont">
              {heading && (
                <h3>
                  {heading?.slice(0, 15)}
                  {heading?.length > 15 && "..."}
                </h3>
              )}
              <p className="createdOn">Created On: {created}</p>
              <div className="review">
                <Rate
                  disabled
                  allowHalf
                  value={review}
                  style={{ color: "#F7941D" }}
                />
                {review}
              </div>

              <div className="category">
                <h4>Products:</h4>
                {category?.map((cat: any, index: any) => (
                  <span key={index}>{cat}, </span>
                ))}
              </div>
            </div>
          </div>
          {artAcceptDeclineButtons && (
            <div className="accept-decline">
              <CustomButton onClick={() => artAcceptHandle()}>
                Accept
              </CustomButton>
              <CustomButton onClick={() => artDeclineHandle()}>
                Decline
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomArtCard;
