import React from 'react';

import Button from 'shared/ui/Button';
const Tabs = ({ activeTab, refs, id, data }) => {
  return (
    <div
      id={data.id}
      ref={refs}
      key={data.id}
      style={{ backgroundImage: `url(${data.bg})` }}
      className={
        'transition ease-out duration-1000 bg-cover bg-no-repeat opacity-0  flex  w-full fixed top-0 ' +
        (activeTab === data.id ? 'active' : '')
      }
    >
      <div className={'px-24 py-16 w-8/12 z-10 sm:w-full sm:flex-col sm:flex sm:justify-between sm:h-full'}>
        <h3 className="mt-4 c-h3 text-white ">{data.title}</h3>

        <div>
          <h4 className="c-h4 text-white ">Description</h4>
          <p className="pt-2  text-white ">{data.detail}</p>
          <p className="py-4  text-white  ">
            Techno: <span className="font-bold">{data.techno}</span>
          </p>
        </div>

        <div className="mt-2 ">
          <Button
            href="#"
            className="transition duration-700 ease-out  text-default bg-white hover:bg-contrasteWhite hover:shadow-sm "
          >
            Découvrir le projet<span></span>
          </Button>
          <Button
            href="#"
            className="ml-4 transition duration-500 ease-in-out text-default bg-white rounded-full hover:bg-contrasteWhite hover:shadow-sm"
          >
            Code
          </Button>
        </div>
      </div>
      <div className="py-16 w-4/12 z-20 h-screen sm:hidden sm:absolute sm:z-0 sm:mt-32 sm:w-full ">
        <img
          className="h-full shadow-md rounded-xl sm:m-auto sm:opacity-20 sm:h-auto sm:w-2/5"
          alt="portfolio"
          src={data.image}
        ></img>
      </div>
    </div>
  );
};

export default Tabs;
