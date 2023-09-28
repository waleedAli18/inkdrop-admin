import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import ArrowLeftIcon from "../../../assets/all-gts-svg-files/arrowlefticon";
import CustomSearch from "../../uiComponents/CustomSearch/CustomSearch";
import CustomSearchIcon from "../../../assets/all-gts-svg-files/customsearchicon";
import "./breadcurmbs.less";

interface BreadcrumbsProps {
  className?: string;
  Icon?: string;
  Title?: React.ReactNode;
  BackBtn?: boolean;
  AddBtn?: React.ReactNode;
  search?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const navigate = useNavigate();
  const onFinishSearch = async (value: any) => {
    console.log("object", value);
  };

  return (
    <div className={`breadcurmbsSec cardWithStyle ${props.className}`}>
      <CustomRow align="middle" justify="center">
        <CustomColumn
          xl={props.search ? 12 : 24}
          lg={props.search ? 12 : 24}
          md={24}
          sm={24}
          xs={24}
          className="title-icon-sec"
        >
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                type: "spring",
                delay: 0.05,
              }}
            >
              {props.Icon && (
                <div className="breadcurmbsSecShape inline-block">
                  <i className={props.Icon}></i>
                </div>
              )}
              {props?.Title ? (
                <CustomHeading className="breadcurmbsHeading inline-block margin-0">
                  {props?.BackBtn && (
                    <span className="backbtn" onClick={() => navigate(-1)}>
                      <ArrowLeftIcon />
                    </span>
                  )}
                  {props?.Title}
                </CustomHeading>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </CustomColumn>
        {props.search && (
          <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  type: "spring",
                  delay: 0.05,
                }}
              >
                <CustomSearch
                  placeholder="Search"
                  allowClear
                  onSearch={onFinishSearch}
                  suffix={<CustomSearchIcon />}
                />
              </motion.div>
            </AnimatePresence>
          </CustomColumn>
        )}
        <CustomColumn md={12} sm={24} xs={24}>
          {props?.AddBtn}
        </CustomColumn>
      </CustomRow>
    </div>
  );
};
export default memo(Breadcrumbs);
