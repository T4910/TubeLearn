const Header = ({text, style}) => {
  return (
    <h1 className={`font-inter text-purpleDark font-medium mt-0 ${style ?? ''}`}>
        {text}
    </h1>
  )
}

export default Header