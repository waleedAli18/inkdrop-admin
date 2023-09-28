import React, { memo } from "react";
import { Table } from "antd";
import { useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pageSize } from "utils/constants/app.constant";
import CustomSearch from "components/uiComponents/CustomSearch/CustomSearch";
import "./Gridview.less";
import CustomRow from "components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "components/uiComponents/CustomColumn/CustomColumn";
const GridView = (props) => {
  const {
    data = null,
    className = "",
    pagination = {
      currentPage: 1,
      pageSize: pageSize,
      total: 10,
    },
    listingCallback = () => {},
    filtersRender = false,
    atozSortingRender = false,
    isSearchAvailable = false,
    AddBtn,
  } = props;
  let uniqueId = 0;

  let isMounted = true;
  useEffect(() => {
    async function load() {
      await listingCallback();
    }

    if (isMounted) load();

    return () => (isMounted = false);
  }, []);

  const onFinishSearch = async (value) => {
    const payload = { search: value };
    await listingCallback(payload);
  };

  const handleOnChange = async (pagination, filters, sorter = {}) => {
    if (Object.keys(sorter).length != 0) {
      let payload = {};
      if (Array.isArray(sorter)) {
        payload = sorter.map((singleSorter) => {
          return {
            column: singleSorter.columnKey,
            order: singleSorter.order,
          };
        });
      } else {
        payload = {
          column: sorter?.columnKey,
          order: sorter?.order,
        };
      }

      await listingCallback(payload);
    }
  };

  return (
    <>
      {/* FILTERS & SEARCH FUNCTIONALITIES */}
      {(filtersRender || isSearchAvailable || AddBtn || atozSortingRender) && (
        <div className="topHeader top-row">
          <CustomRow>
            <CustomColumn lg={16} md={16} className="search-filter">
              <>
                {filtersRender && filtersRender()}

                {isSearchAvailable && (
                  <CustomSearch
                    placeholder="Search..."
                    allowClear
                    onSearch={onFinishSearch}
                    prefix={<FontAwesomeIcon icon={faSearch} />}
                  />
                )}

                {atozSortingRender && atozSortingRender()}
                {props.header}
              </>
            </CustomColumn>
            <CustomColumn className="topheader-btn" lg={8} md={8}>
              <div className="aside">{AddBtn}</div>
            </CustomColumn>
          </CustomRow>
        </div>
      )}

      {/* ONLY TABLE COMPONENT */}
      <div className="custom-table-grid-view-container">
        <Table
          {...props}
          className={`${className} custom-table-container cardWithStyle`}
          dataSource={data}
          onChange={handleOnChange}
          rowKey={(record) => {
            if (!record?.id) {
              return ++uniqueId;
            }
            return record?.id;
          }}
          pagination={{
            currentPage: pagination.currentPage,
            pageSize: pagination.pageSize,
            total: pagination.total,
            onChange: (page, pageSize) => {
              listingCallback({
                page: page,
                take: pageSize,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default memo(GridView);
