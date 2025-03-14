import React from 'react';
import PropTypes from 'prop-types';


import Tab from './Tab';
const Tabs = ({tabs, selectedTab, selectedTabHandler}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {
              tabs.map((tab, index) => {
                return <Tab
                  key = {index}
                  tab = {tab}
                  selectedTabHandler = {selectedTabHandler}
                  selectedTab = {selectedTab}
                />
              })
            }
      </div>
    </div>
  );
};


// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
  selectedTabHandler: PropTypes.func.isRequired,
  tabs: PropTypes.array,
  selectedTab: PropTypes.string.isRequired,
}

export default Tabs;
