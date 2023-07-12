import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import "./Header.scss";
import Search from "./Search/Search";
import logo from "../Header/logo.png"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const homebtn=()=>{
        navigate("/")
        window.scrollTo({
            top:0,
            left: 0,
          behavior: 'smooth',
        });
    };
    const handleClick = () => {
        navigate("/")
        window.scrollTo({
          top: 700,
          left: 0,
          behavior: 'smooth',
        });
      };
      const handleAbout = () => {
        window.scrollTo({
          top: document.body.offsetHeight,
          left: 0,
          behavior: 'smooth',
        });
      };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                <div className="left" onClick={homebtn}>
                    <span className="logo"><img src={logo}/></span>
                     <span className="title">Dhanluxmi Trading Company</span>
                    </div>
                    <ul className="center">
                        <li onClick={homebtn}>Home</li>
                        <li onClick={handleAbout}>About</li>
                        <li onClick={handleClick}>Categories</li>
                        <li onClick={() => navigate("/shop")}>Shop</li>
                        <li onClick={() => navigate("/contact")}>Contact Us</li>
                    </ul>

                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)}/>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </>
    );
};

export default Header;
