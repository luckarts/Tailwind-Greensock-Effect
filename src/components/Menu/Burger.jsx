import React, { useState } from 'react';

import NavbarComponent from './Navbar';

const Burger = ({ open, roundEffect, isHide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const stylesBurger = `${
    isHide ? 'bg-black' : 'bg-white'
  } bottom-0 left-0 h-px w-6  absolute  transform origin-left transition-all ease-in-out duration-500`;
  const stylesCross = 'bottom-0 left-0 h-px w-6 absolute bg-black transform  transition-all ease-in-out duration-500 ';

  const openNav = () => {
    setIsOpen(!isOpen);
    setClick(true);
    // eslint-disable-next-line no-unused-expressions
  };
  const iconBurger = () => {
    if (isOpen) {
      return [
        <span key={0} className={stylesCross + ' rotate-45 opacity-100'}></span>,
        <span key={1} className={stylesCross + ' -rotate-45 opacity-100'}></span>
      ];
    } else {
      return [
        <span key={0} className={stylesBurger + ' my-2'}></span>,
        <span key={1} className={stylesBurger + ' scale-x-50'}></span>,
        <span key={2} className={stylesBurger + ' -my-2'}></span>
      ];
    }
  };
  const transform = 'transition ease-out duration-300 transform origin-left ';
  return [
    <button
      key={0}
      onClick={openNav}
      className={
        'fixed z-50 block  w-10 px-3 py-2 text-gray-900 transition-all ease-out duration-300 focus:outline-none outline-none top-1.5 right-3 ' +
        (isOpen ? transform : '')
      }
    >
      {iconBurger()}
    </button>,

    <NavbarComponent click={click} isOpen={isOpen} key={1} />
  ];
};

export default Burger;
