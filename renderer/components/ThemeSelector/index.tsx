import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import { LuMoonStar, LuSun } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import Button from '../Button';

function ThemeSelector({ iconButtonConfig }) {
  const { theme, setTheme } = useTheme();
  const [modal, setModal] = useState<boolean>(false);
  const modalHandler = () => {
    setModal((s) => !s);
  };
  const modalRef = useRef<HTMLSelectElement>(null);
  const themeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };
  const setOff = ({ target }: MouseEvent) => {
    if (!modalRef.current?.contains(target as Node)) setModal(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', setOff);

    return () => {
      document.removeEventListener('mousedown', setOff);
    };
  }, [modal]);

  return (
    <div>
      <Button className="dark:fill-black" onClick={modalHandler} type="button">
        <IconContext.Provider value={iconButtonConfig}>
          <div>
            <LuSun className="dark:hidden" />
            <LuMoonStar className="hidden dark:inline" />
          </div>
        </IconContext.Provider>
      </Button>
      {modal && (
        <select
          className="bg-gray-700 text-white p-1 rounded-md absolute top-16 right-0"
          value={theme}
          ref={modalRef}
          onChange={(e) => themeChangeHandler(e)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      )}
    </div>
  );
}

export default ThemeSelector;
