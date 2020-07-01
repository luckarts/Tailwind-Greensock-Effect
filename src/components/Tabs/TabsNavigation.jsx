import React from 'react';

const TabsNavigation = ({ activeTab, setActiveTabs }) => {
  return (
    activeTab && (
      <nav id="navbar" className="absolute top-1/2 right-1 z-50">
        <ul className="flex flex-col cursor-pointer">
          <li
            className="relative m-4"
            onClick={() => {
              setActiveTabs('0');
            }}
          >
            <a
              href="#0"
              className={
                'transition duration-500 ease-in-out absolute bg-white rounded-full w-2 h-2 transform hover:scale-200 ' +
                (activeTab === '0' ? 'scale-200' : 'test')
              }
            >
              <span className="opacity-0"></span>
            </a>
          </li>
          <li
            className="relative m-4"
            onClick={() => {
              setActiveTabs('1');
            }}
          >
            <a
              href="#1"
              className={
                'transition duration-500 ease-in-out absolute bg-white rounded-full w-2 h-2 transform hover:scale-200 ' +
                (activeTab === '1' ? 'scale-200' : '')
              }
            >
              <span className="opacity-0">{activeTab}</span>
            </a>
          </li>
          <li
            className="relative m-4"
            onClick={() => {
              setActiveTabs('2');
            }}
          >
            {' '}
            <a
              href="#2"
              className={
                'transition duration-500 ease-in-out absolute bg-white rounded-full w-2 h-2 transform hover:scale-200 ' +
                (activeTab === '2' ? 'scale-200' : '')
              }
            >
              <span className="opacity-0">0</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  );
};

export default TabsNavigation;
