import React from 'react';

const Tab = ({tab, selectedTab, selectedTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      console.log(tab)
      let tabClass = 'tab';
      if(tab === selectedTab) {
        tabClass = 'tab active-tab';
      }
    
  return (
    <div
      className={tabClass}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         selectedTabHandler(tab)
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
