import { Input } from "antd";
import { memo } from "react";
import { SearchProps } from "antd/lib/input";
import "./CustomSearch.less";

interface CustomSearchProps extends SearchProps {
  // Any additional props we might need
}

const CustomSearch: React.FC<CustomSearchProps> = (props) => {
  const { Search } = Input;
  return (
    <span className="kl-custom-search-container">
      <Search {...props} />
    </span>
  );
};

export default memo(CustomSearch);
