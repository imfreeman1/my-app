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
  const modalRef = useRef<HTMLDivElement>(null);
  const themeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };
  const setOff = ({ target }: MouseEvent) => {
    if (!modalRef.current?.contains(target as Node)) setModal(false);
  };
  useEffect(() => {
    if (modal) document.addEventListener('mousedown', setOff);

    return () => {
      document.removeEventListener('mousedown', setOff);
    };
  }, [modal]);

  return (
    <div ref={modalRef}>
      <Button
        className="dark:fill-black content-center"
        onClick={modalHandler}
        type="button"
      >
        <IconContext.Provider value={iconButtonConfig}>
          <div>
            <LuSun className="dark:hidden" />
            <LuMoonStar className="hidden dark:block" />
          </div>
        </IconContext.Provider>
      </Button>
      {modal && (
        <select
          className="bg-gray-700 text-white p-1 rounded-md absolute top-16 right-0 animate-slideY"
          value={theme}
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
