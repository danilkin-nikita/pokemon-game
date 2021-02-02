import cn from 'classnames';

import style from './style.module.css';

const Menu = ({onClickMenu, stateMenuHeader}) => {
  
  return (
    <div className={cn(style.menuContainer, {[style.active]: stateMenuHeader}, {[style.deactive] : !stateMenuHeader})}>
    <div className={style.overlay} />
    <div className={style.menuItems}>
      <ul>
        <li>
          <a href="#welcome" onClick={onClickMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="#game" onClick={onClickMenu}>
            GAME
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClickMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClickMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
};

export default Menu;