import React, { useRef, useEffect } from 'react';
import './style.css';
import { gsapTo, gsapFromTo } from 'shared/Animations';

const NavbarComponent = ({ isOpen, click }) => {
  let navbar = useRef(null);
  let navImg = useRef(null);
  let grid = useRef(null);
  let shadow = useRef(null);
  let grid1 = useRef(null);

  useEffect(() => {
    if (!click) {
      gsapTo(navbar.current, { duration: 0, display: 'none' });
      gsapTo(shadow.current, { duration: 0, display: 'none' });
    } else {
      if (isOpen) {
        navbar.current.classList.remove('hidden');
        shadow.current.classList.remove('hidden');
        gsapTo(navbar.current, { duration: 0, display: 'block' });
        gsapTo(shadow.current, { dduration: 0, display: 'block' });
        gsapFromTo(shadow.current, { y: '-10vh' }, { duration: 2, y: '100vh' });
        gsapFromTo(grid.current.children, { y: '-100vh' }, { duration: 1, y: '0', stagger: 0.1 });
      } else {
        gsapFromTo(grid.current.children, { y: '0' }, { duration: 1, y: '-130vh', stagger: 0.1 });
        gsapTo(shadow.current, { duration: 1.2, y: '-130vh' });
      }
    }
  }, [isOpen, click]);

  return [
    <nav key={0} id="nav" ref={navbar} className={'box-shadow hidden h-screen w-full z-10 fixed overflow-hidden'}>
      <div className="flex h-full" ref={grid}>
        <div className={'relative h-full transition ease-out'}>
          <img
            className="object-cover relative h-full w-full "
            ref={navImg}
            src="img/2db2bb8dfb129aea6b3c4a4a8a151219.jpg"
            alt="Model is wearing Rino and Pelle knitwear"
          />
        </div>
        <div ref={grid1} className="bg-white w-full relative px-20 pt-16 transition ease-out">
          <div className="h-full ">
            <a className="c-link" href="#">
              Le Restaurant
            </a>
            <div className="h-full flex flex-col justify-center">
              <ul>
                <li>
                  <a className="c-link text-restaurant">Table du chef</a>
                </li>
                <li>
                  <a className="c-link" href="#">
                    la Cave
                  </a>
                </li>
                <li>
                  <a className="c-link" href="#">
                    Le bar
                  </a>
                </li>
                <li>
                  <a className="c-link" href="#">
                    La terrasse
                  </a>
                </li>
                <li>
                  <a className="c-link" href="#">
                    Reservez
                  </a>
                </li>
              </ul>
              <div className="flex justify-between">
                <ul className="pt-8">
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>,

    <div
      key={1}
      ref={shadow}
      className={'hidden bg-gradient-b-gradient-gray z-1 absolute h-screen w-full top-0 '}
    ></div>
  ];
};

export default NavbarComponent;
