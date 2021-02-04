import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = ({bgActive}) => {

  const [isOpen, setOpen] = useState(null);
  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
     <>
       <Menu onClickHamburg={handleClick} isOpen={isOpen}/>
       <Navbar onClickHamburg={handleClick} isOpen={isOpen} bgActive={bgActive}/>
     </>
  )
};

export default MenuHeader; 