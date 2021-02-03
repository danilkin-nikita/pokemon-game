import cn from 'classnames';

import style from './style.module.css';

const Navbar = ({onClickMenu, stateMenuHeader}) => {

  return (
    <nav id={style.navbar} className={style.bgActive}>
    <div className={style.navWrapper}>
      <p className={style.brand}>
        LOGO
      </p>
      <a className={cn(style.menuButton, { [style.active]: stateMenuHeader })} onClick={onClickMenu}>
        <span />
      </a>
    </div>
    </nav>
  )
};

export default Navbar;