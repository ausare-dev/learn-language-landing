import Style from "./Button.module.scss"

const Button = ({ children, buttonType = "filled", className, ...props }) => {
  return (
    <button
      className={`${Style.button} ${Style[buttonType]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
