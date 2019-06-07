import React from 'react';
import Tab from './Tab';
const Tabs = ({tabs, selectedTab, selectedTabHandler}) => {
  console.log(tabs)
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

/**
 *  return <Tab key={tab} selectedTabHandler={selectedTabHandler} tab={tab} selectedTab={selectedTab} />
 * 
 * 
 */

// Make sure to use PropTypes to validate your types!
export default Tabs;
