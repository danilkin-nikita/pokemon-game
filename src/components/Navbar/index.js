import cn from 'classnames';

import style from './style.module.css';

const Navbar = ({onClickHamburg, isOpen, bgActive}) => {

  return (
    <nav id={style.navbar} className={cn({
      [style.bgActive]: bgActive
    })}>
    <div className={style.navWrapper}>
      <p className={style.brand}>
        LOGO
      </p>
      <div className={cn(style.menuButton, { [style.active]: isOpen })} onClick={onClickHamburg}>
        <span />
      </div>
    </div>
    </nav>
  )
};

export default Navbar;