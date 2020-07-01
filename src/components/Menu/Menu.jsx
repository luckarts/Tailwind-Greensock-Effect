import React, { useState, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Burger from './Burger';
const navlink = 'block relative  font-medium text-gray-900 mr-20 lg:inline-block lg:mt-0 duration-300 navlink ';
const Menu = () => {
  let listMenu = useRef(null);
  let title = useRef(null);
  const [isHide, setIsHide] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y < -5;
      if (isShow && !isHide) {
        setIsHide(true);
      } else if (!isHide) {
        setIsHide(false);
      }
    },
    [setIsHide]
  );
  return [
    <div key={0} className="fixed w-full z-10 ">
      <div
        className={`w-full absolute top-0 h-full bg-white z-0 transition origin-top ease-out duration-300 transform ${
          isHide ? 'scale-y-1' : 'scale-y-0'
        }`}
      ></div>
      <div
        className={`flex items-center container mx-auto max-w-6xl z-10 justify-between  p-6 ${
          isHide ? 'text-black' : 'text-white'
        }`}
      >
        <div className="flex items-center flex-shrink-0 mr-6 z-50">
          <span ref={title} className={'font-semibold text-xl tracking-tight  duration-300 '}>
            Le restaurant
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
          <div ref={listMenu} className="text-sm lg:flex-grow  flex justify-end">
            <a href="#responsive-header" className={navlink}>
              LA CAVE
            </a>
            <a href="#responsive-header" className={navlink}>
              LE BAR
            </a>
            <a href="#responsive-header" className={navlink}>
              RESERVEZ
            </a>
          </div>
        </div>
      </div>
    </div>,
    <Burger key={1} isHide={isHide} />
  ];
};

export default Menu;
