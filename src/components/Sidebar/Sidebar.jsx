import React, { useEffect } from "react"
import styles from "./Sidebar.module.scss"
import IconSidebarClose from "../icons/IconSidebarClose"
import Button from "../UI/Button/Button"
import AOS from "aos"
import "aos/dist/aos.css"

const Sidebar = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <div
      className={`${styles.sidebar} ${
        sideBarToggle ? styles["sidebar--active"] : ""
      }`}
    >
      <div className={`${styles.sidebar__container} container`}>
        <div className={styles.sidebar__header}>
          <a
            href='./'
            className={styles.sidebar__title}
          >
            Brit
            <span
              className={`${styles.sidebar__title} ${styles["sidebar__title--alt"]}`}
            >
              lex
            </span>
          </a>
          <button
            className={styles.sidebar__button}
            onClick={() => setSideBarToggle((state) => !state)}
          >
            <IconSidebarClose />
          </button>
        </div>
        <span className={styles.line}></span>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item}>
            <a
              href='#'
              className={styles.sidebar__link}
            >
              Home
            </a>
          </li>
          <li className={styles.sidebar__item}>
            <a
              href='#'
              className={styles.sidebar__link}
            >
              Skills
            </a>
          </li>
          <li className={styles.sidebar__item}>
            <a
              href='#'
              className={styles.sidebar__link}
            >
              About Us
            </a>
          </li>
          <li className={styles.sidebar__item}>
            <a
              href='#'
              className={styles.sidebar__link}
            >
              Pricing
            </a>
          </li>
          <li className={styles.sidebar__item}>
            <a
              href='#'
              className={styles.sidebar__link}
            >
              Contacts
            </a>
          </li>
        </ul>
        <Button
          buttonType='outlined'
          className={styles["sidebar__button-ref"]}
        >
          Lets Talk
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
