import React, { useRef, useEffect, useState } from 'react';
import TabsNavigation from './TabsNavigation';
import TabsView from './TabsView';
import projet from '../../db/projets';

import $ from 'jquery';
import 'fullview';
const Tabs = () => {
  const [activeTab, setActiveTabs] = useState('0');

  const fullview = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inputRef = [ref0, ref1, ref2];
  const scrollToNode = (node) => {
    node.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    $('#fullview').fullView({
      //Options
      dots: true,
      dotsPosition: 'right',
      navbar: '#navbar',
      //Scrolling
      easing: 'swing',
      // Callback
      onViewChange: function (currentView) {
        if (currentView[0].id) {
          setActiveTabs(currentView[0].id);
        }
      }
    });
  }, [fullview, setActiveTabs]);

  return [
    <div key={3} ref={fullview} id="fullview" className="z-0 bg-black">
      {projet.map((data) => (
        <TabsView refs={inputRef[data.id]} key={data.id} activeTab={activeTab} data={data} />
      ))}
    </div>,
    <TabsNavigation
      key={4}
      scrollToNode={scrollToNode}
      setActiveTabs={setActiveTabs}
      activeTab={activeTab}
      inputRef={inputRef}
    />
  ];
};

export default Tabs;
