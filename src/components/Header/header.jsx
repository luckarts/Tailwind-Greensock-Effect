import React from 'react';

import './style.css';
const Header = () => {
  return (
    <div>
      <header className={'bg-black  h-screen pt-16'}>
        <div className={'paralax z-0 w-full preserve3d relative h-full '}>
          <div className="flex justify-end items-center h-full sm:justify-center">
            <p className="text-white w-2/5 c-restaurant text-right sm:text-center mr-12">
              <span>Concevoir </span>
              <br />
              <span>LA TRADITION EN MOUVEMENT </span>
              <br />
              <span>C'est offrir un avenir au mot </span>
              <br />
              <span>Héritage </span>
            </p>
          </div>
        </div>
      </header>
      <div className={'bg-white h-screen'}></div>
    </div>
  );
};

export default Header;
