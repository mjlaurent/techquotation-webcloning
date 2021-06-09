import logo from "../assets/logo-tq.png";
import { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const primaryShow = window.scrollY > 30;
            setNavBackground(false);
            if (navRef.current !== primaryShow) {
                setNavBackground(true);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navBarStyling = {
        transition: "1s ease",
        backgroundColor: navBackground ? "black" : "",
        backgroundImage: navBackground
            ? ""
            : "linear-gradient(to right,#2d0039,#15003c)",
        opacity: navBackground ? "90%" : "",
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="fixed-top custom-nav d-flex justify-content-between"
            style={navBarStyling}
        >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="214px"
                    height="44px"
                    className="d-inline-block align-top"
                    alt="TechQuotation logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/" className="text-light">
                        Submit Request
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
