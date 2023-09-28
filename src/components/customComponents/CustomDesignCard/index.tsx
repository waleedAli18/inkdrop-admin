import { Card } from "antd";
import { CardData } from "../../../utils/interface/screens/userManagementData.interface";
import "./CustomDesignCard.less";

interface CardComponentProps {
  data: CardData;
  link?: string;
  handleClick: () => void;
}

const DesignCardComponent: React.FC<CardComponentProps> = ({
  data,
  handleClick,
}) => {
  const { imageSrc } = data;

  return (
    <>
      <div>
        <Card
          cover={<img alt="Card Image" src={imageSrc} />}
          className="customCard"
          onClick={() => handleClick()}
        ></Card>
      </div>
    </>
  );
};

export default DesignCardComponent;
