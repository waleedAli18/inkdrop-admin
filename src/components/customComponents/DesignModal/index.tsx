import { motion } from "framer-motion";
import { AssociatedProductsInterface } from "../../../utils/interface/screens/userManagementData.interface";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomArtCard from "../CustomArtCard";
import CustomAssociatedProductsCard from "../CustomAssociatedProductsCard";
import { CustomArtCardInterface } from "../../../utils/interface";
import "./DesignModal.less";

interface DesignModalProps {
  artCardData: CustomArtCardInterface[];
  associatedProductData: AssociatedProductsInterface[];
  designId?: number;
  artAcceptHandle: () => void;
  artDeclineHandle: () => void;
  artAcceptDeclineButtons?: boolean;
  associateAcceptDeclineButtons?: boolean;
  associateAcceptHandle: () => void;
  associateDeclineHandle: () => void;
}

const DesignModal: React.FC<DesignModalProps> = ({
  artCardData,
  associatedProductData,
  designId,
  artAcceptHandle,
  artDeclineHandle,
  artAcceptDeclineButtons,
  associateAcceptDeclineButtons,
  associateAcceptHandle,
  associateDeclineHandle,
}) => {
  return (
    <>
      <div className="design-modal-wrapper">
        <h2>Design #{designId}</h2>
        <CustomRow>
          <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
            {artCardData?.map((item) => (
              <CustomArtCard
                key={item.id}
                data={item}
                handleClick={() => console.log("Card Clicked")}
                artAcceptDeclineButtons={artAcceptDeclineButtons}
                artAcceptHandle={artAcceptHandle}
                artDeclineHandle={artDeclineHandle}
              />
            ))}
          </CustomColumn>
        </CustomRow>
        <CustomRow>
          <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
            <CustomHeading className="head my-3 ">
              Associated Products
            </CustomHeading>
            <div className="associateCardWrapper ">
              {associatedProductData.map((list, index) => (
                <motion.div
                  key={list.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <CustomAssociatedProductsCard
                    key={list.id}
                    data={list}
                    associateAcceptDeclineButtons={
                      associateAcceptDeclineButtons
                    }
                    associateAcceptHandle={associateAcceptHandle}
                    associateDeclineHandle={associateDeclineHandle}
                  ></CustomAssociatedProductsCard>
                </motion.div>
              ))}
            </div>
          </CustomColumn>
        </CustomRow>
      </div>
    </>
  );
};

export default DesignModal;
