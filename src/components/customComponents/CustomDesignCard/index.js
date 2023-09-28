import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from "antd";
import "./CustomDesignCard.less";
const DesignCardComponent = ({ data, handleClick, }) => {
    const { imageSrc } = data;
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx(Card, { cover: _jsx("img", { alt: "Card Image", src: imageSrc }), className: "customCard", onClick: () => handleClick() }) }) }));
};
export default DesignCardComponent;
