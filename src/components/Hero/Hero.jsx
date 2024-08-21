import Style from "./Hero.module.scss"
import Image from "next/image"
import Button from "../UI/Button/Button"

const Hero = () => {
  return (
    <section>
      <div className='container'>
        <div className={Style.hero}>
          <div className={Style.left}>
            <h1 className={Style.hero__title}>
              Learn <br className={Style.table} /> Any
              <br className={Style.mobile} />
              Foreign
              <br className={Style.table} /> Language
            </h1>
            <p className={Style.hero__text}>
              With our teachers who write a program for each student, you will
              be able to make your first sketch after the first lesson.
            </p>
            <Button buttonType='filled'>Get started</Button>
          </div>
          <div className={Style.right}>
            <img
              src='/image/hero.png'
              alt='hero image'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
