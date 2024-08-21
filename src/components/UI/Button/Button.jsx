import Style from "./Button.module.scss"

const Button = ({ children, buttonType, left }) => {
  return (
    <button
      className={`${Style.button} ${Style[buttonType]} ${
        left ? Style.left : ""
      }`}
    >
      {children}
    </button>
  )
}

export default Button
