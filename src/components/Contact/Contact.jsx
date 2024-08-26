import { useState } from "react"
import Button from "../UI/Button/Button"
import Style from "./Contact.module.scss"

const Contact = () => {
  const [email, setEmail] = useState("")
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  return (
    <section>
      <div className='container'>
        <div className={Style.contact}>
          <h2 className={Style["contact__title-mobile"]}>Contact Us</h2>
          <div className={Style.left}>
            <img
              src='/image/contact.png'
              alt='contact image'
              className={Style.contact__image}
            />
          </div>
          <div className={Style.right}>
            <h2 className={Style.contact__title}>Contact Us</h2>
            <p className={Style.contact__text}>
              Discover your current English level by taking our free online
              English test. Sign up to our newsletter for learning tips and free
              resource
            </p>
            <form className={Style.contact__form}>
              <input
                type='email'
                placeholder='Enter Your E-mail'
                value={email}
                onChange={handleChangeEmail}
              />
              <Button className={Style.contact__button}>Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
