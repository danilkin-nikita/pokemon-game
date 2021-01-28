import style from './style.module.css';

const Layout = ({id, title, desc, urlBg, colorBg}) => {
  return (
    <section
      className={style.root}
      id={id} 
      style={
        {backgroundImage: `url(${urlBg})`,
         backgroundColor: colorBg}
      }>
      <div className={style.wrapper}>
          <article>
              <div className={style.title}>
                  <h3>{title}</h3>
                  <span className={style.separator}></span>
              </div>
              <div className={style.desc, style.full}>
                  <p>{desc}</p>
              </div>
          </article>
      </div>
    </section>
  )
}

export default Layout;