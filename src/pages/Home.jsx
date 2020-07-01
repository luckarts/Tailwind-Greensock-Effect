import React from 'react';
import Header from 'components/Header/header';
import MenuComponent from 'components/Menu/Menu';

const HomePage = (props) => {
  return (
    <div className="bg-black h-screen w-full">
      <MenuComponent />
      <Header />
    </div>
  );
};

export default HomePage;
