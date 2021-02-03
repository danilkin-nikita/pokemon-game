import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
     <>
       <Menu onClickMenu={handleClick} stateMenuHeader={isActive}/>
       <Navbar onClickMenu={handleClick} stateMenuHeader={isActive}/>
     </>
  )
};

export default MenuHeader; 