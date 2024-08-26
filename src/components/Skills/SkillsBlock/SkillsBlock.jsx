import Button from "@/components/UI/Button/Button"
import Style from "./SkillsBlock.module.scss"

function SkillsBlock({ img, title, className, children }) {
  return (
    <div className={`${Style.skillsBlock} ${Style[className]}`}>
      <div className={Style.skillsBlock__item}>
        <div
          className={Style.skillsBlock__img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={Style.skillsBlock__text}>
          <h3 className={Style.skillsBlock__title}>{title}</h3>
          <p className={Style.skillsBlock__desc}>{children}</p>
          <Button className={Style.skillsBlock__button}>Learn more</Button>
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock
