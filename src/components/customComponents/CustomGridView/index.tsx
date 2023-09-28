import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import { motion, AnimatePresence } from "framer-motion";

interface CustomGridViewProps {
  // Any additional props we might need
  leftHeader?: JSX.Element;
  rightHeader?: JSX.Element;
  content: JSX.Element;
  btnText?: string;
  btnAction?: () => void;
  btnIcon?: React.ReactNode;
}

const CustomGridView = (props: CustomGridViewProps) => {
  const {
    leftHeader,
    rightHeader,
    content,
    btnText,
    btnAction,
    btnIcon,
  }: CustomGridViewProps = props;

  return (
    <>
      {/* FILTERS & SEARCH FUNCTIONALITIES */}
      {(leftHeader || rightHeader) && (
        <div className="topHeader top-row">
          <CustomRow>
            <CustomColumn
              xl={btnText ? 8 : 12}
              lg={btnText ? 8 : 12}
              md={24}
              sm={24}
              xs={24}
              className="search-filter"
            >
              {leftHeader}
            </CustomColumn>
            <CustomColumn
              className="topheader-btn"
              xl={btnText ? 16 : 12}
              lg={btnText ? 16 : 12}
              md={24}
              sm={24}
              xs={24}
            >
              <AnimatePresence>
                <motion.div
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    type: "tween",
                  }}
                >
                  <div className="right-header">
                    <div className="aside">
                      {rightHeader}
                      {btnText && (
                        <CustomButton
                          // htmlType="button"
                          className="deafult-btn"
                          icon={btnIcon}
                          onClick={btnAction}
                          type="primary"
                        >
                          {btnText}
                        </CustomButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CustomColumn>
          </CustomRow>
        </div>
      )}

      {/* ONLY TABLE COMPONENT */}

      <div className="custom-table-grid-view-container">{content}</div>
    </>
  );
};

export default CustomGridView;
