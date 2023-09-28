import MenuItem from "antd/lib/menu/MenuItem";

export const getMenu = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
) => ({
  key,
  icon,
  children,
  label,
  type,
});
