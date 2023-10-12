const Header = ({children, style}) => {
  return (
    <h1 className={`font-inter children-purpleDark font-medium ${style ?? ''}`}>
        {children}
    </h1>
  )
}

export default Header