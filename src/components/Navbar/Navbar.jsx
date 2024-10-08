import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useRef, useState } from "react";
import kikapuLogo from "../../assets/kikapuLogo.png";

export const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const [navActive, setNavActive] = useState(false);

  function handleNavDisplay (){
    setNavActive(!navActive);
    navRef.current.classList.toggle("activeNav");
    headerRef.current.classList.toggle("activeHeader");
  }

  // function closeHeader(){
  //   setNavActive(!navActive);
  //   navRef.current.classList.toggle("activeNav");
  //   headerRef.current.classList.toggle("activeHeader");
  // }

  return (
    <header ref={headerRef}>
      <div className="headLogo">
        <div className="logo">
          <div className="logoImage">
            <img src={kikapuLogo} alt="kikapuLogo" />
          </div>
          <h2 className="logoName">Kikapuapp</h2>
        </div>

        <div className="menu">
          {!navActive ? (
            <button className="navBtn" onClick={handleNavDisplay}>
              <FaBars />
            </button>
          ) : (
            <button className="navBtn navCloseBtn" onClick={handleNavDisplay}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      <nav ref={navRef}>
        <div className="bookmarks">
          <a hrefLang="#" onClick={handleNavDisplay}>Home</a>
          <a href={"#checkApp"} onClick={handleNavDisplay}>Features</a>
          <a href={"#about"} onClick={handleNavDisplay}>Why us?</a>
          <a href={"#footer"} onClick={handleNavDisplay}>Contact</a>
        </div>
      </nav>
    </header>
  );
};
