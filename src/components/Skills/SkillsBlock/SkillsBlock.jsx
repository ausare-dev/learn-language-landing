import Button from "@/components/UI/Button/Button"
import Style from "./SkillsBlock.module.scss"

function SkillsBlock({ img, title, children }) {
  return (
    <div className={Style.skillsBlock}>
      <div className={Style.skillsBlock__item}>
        <img
          src={img}
          alt={title}
        />
        <div className={Style.skillsBlock__text}>
          <h3 className={Style.skillsBlock__title}>{title}</h3>
          <p className={Style.skillsBlock__desc}>{children}</p>
        </div>
        <Button className={Style.skillsBlock__button}>Learn more</Button>
      </div>
    </div>
  )
}

export default SkillsBlock
