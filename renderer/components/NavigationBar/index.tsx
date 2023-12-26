import React, { useMemo } from 'react';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import Button from '../Button';
import { NavigationBarType } from './type';
import NavItem from '../NavItem';
import ThemeSelector from '../ThemeSelector';

function NavigationBar({ navList }: NavigationBarType<string>) {
  const iconButtonConfig = useMemo(() => {
    return { className: 'icon-btn' };
  }, []);
  return (
    <nav className="flex justify-between items-center md:px-6 px-2 bg-black text-white dark:bg-white dark:text-white md:h-24 h-16">
      <div className="text-center">
        <IconContext.Provider value={iconButtonConfig}>
          <Button type="button">
            <Link href="/home">
              <div>
                <AiFillHome />
              </div>
            </Link>
          </Button>
        </IconContext.Provider>
      </div>

      <ul className="flex justify-center gap-1 sm:gap-8 md:gap-16 lg:gap-24 h-16 w-fit items-center font-semibold">
        {navList.map((nav) => {
          return <NavItem key={nav} content={nav} />;
        })}
      </ul>
      <div className="flex md:gap-8 items-center gap-2">
        <div className="md:w-20 text-center">
          <IconContext.Provider value={iconButtonConfig}>
            <Button type="button">
              <Link href="https://github.com/imfreeman1" target="_blank">
                <div>
                  <AiFillGithub />
                </div>
              </Link>
            </Button>
          </IconContext.Provider>
        </div>
        <ThemeSelector iconButtonConfig={iconButtonConfig} />
      </div>
    </nav>
  );
}

export default NavigationBar;
