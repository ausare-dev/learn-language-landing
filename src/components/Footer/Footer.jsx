import Style from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className='container'>
      <hr className={Style.hr} />
      <footer className={Style.footer}>
        <h4 className={Style.footer__title}>
          Brit<span className={Style.footer__title__alt}>lex</span>
        </h4>
        <ul className={Style.footer__list}>
          <li className={Style.footer__item}>
            <a href='./'> Terms and Conditions</a>
          </li>
          <li className={Style.footer__item}>
            <a href='./'>Privacy Policy</a>
          </li>
          <li className={Style.footer__item}>
            <a href='./'>Cookie Policy</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
