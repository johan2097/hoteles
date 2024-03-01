import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HotelesRomo</span>
        <div className="navItems">
          <button className="navButton">Registrarse</button>
          <button className="navButton">Ingresar</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar