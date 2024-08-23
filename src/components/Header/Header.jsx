import React, { useState } from "react"
import styles from "./Header.module.scss"
import IconSidebar from "../icons/IconSidebar"
import Sidebar from "../Sidebar/Sidebar"
import Button from "../UI/Button/Button"

const Header = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false)
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <a
          href='./'
          className={styles.header__title}
        >
          Brit
          <span
            className={`${styles.header__title} ${styles["header__title--alt"]}`}
          >
            lex
          </span>
        </a>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a
              href='#'
              className={styles.header__link}
            >
              Home
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href='#'
              className={styles.header__link}
            >
              Skills
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href='#'
              className={styles.header__link}
            >
              About Us
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href='#'
              className={styles.header__link}
            >
              Pricing
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href='#'
              className={styles.header__link}
            >
              Contacts
            </a>
          </li>
        </ul>
        <Button
          className={styles["header__button-ref"]}
          buttonType='outlined'
        >
          Let's Talk
        </Button>
        <button
          className={styles.header__button}
          onClick={() => setSideBarToggle((state) => !state)}
        >
          <IconSidebar />
        </button>
        {sideBarToggle && <Sidebar setSideBarToggle={setSideBarToggle} />}
      </div>
    </header>
  )
}

export default Header
