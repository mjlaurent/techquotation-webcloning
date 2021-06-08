import logo from "../assets/logo-tq.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const primaryShow = window.scrollY > 50;
            setNavBackground(false);
            if (navRef.current !== primaryShow) {
                setNavBackground(true);
            }
        };
        document.addEventListener("scroll", handleScroll);
    }, []);
    const navBarStyling = {
        transition: "0.5s ease",
        backgroundColor: navBackground ? "black" : "",
        backgroundImage: navBackground ? "" : 'linear-gradient(to right,#2d0039,#15003c)',
        opacity: navBackground ? '90%' : '',
    };
    return (
        <div class="navbar navbar-light fixed-top custom-nav" style={navBarStyling}>
            <div className="container">
                <img
                    src={logo}
                    width="214px"
                    height="44px"
                    className="d-inline-block align-top"
                    alt="TechQuotation logo"
                />
                <a href="#" className="text-light">Submit Request</a>
            </div>

        </div>
    );
};

export default NavBar;
