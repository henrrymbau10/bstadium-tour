import React, { useState } from 'react'
import "./Navbar.scss"
import styled from "styled-components";
import logo from "./../Source/logotipo_bstadium.svg"
import { useTranslation } from "react-i18next"
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [t, i18n] = useTranslation("global")
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="navbar">
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <IoMdClose /> : <GiHamburgerMenu />}
            </MobileIcon>
            <Menu open={showMobileMenu}>

            </Menu>
            <div className="navbar-logo">
                <img src={logo} alt="logoBS" />
            </div>
            <div className="navbar-list">
                <p>{t("navbar.navbar-challenge")}</p>
                <p>{t("navbar.navbar-itinerary")}</p>
                <p>{t("navbar.navbar-participation")}</p>
                <p>{t("navbar.navbar-benefits")}</p>
            </div>
            <div className="navbar-button">
                <button>{t("navbar.navbar-singup")}</button>
            </div>
            <div className="navbar-language">
                <p onClick={() => i18n.changeLanguage("es")}>ESP</p>
                <p>|</p>
                <p onClick={() => i18n.changeLanguage("en")}>ENG</p>
            </div>
        </div>
    )
}

export default Navbar

const MobileIcon = styled.div`
    display: none;

    @media screen and (min-width: 300px) and (max-width:1199px){
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 100%;

        svg{
            color: white;
            margin-left: 1rem;
            width: 25px;
        }
    }
`

const Menu = styled.ul`

    @media screen and (min-width: 300px) and (max-width:1199px){
        background-color: black;
        position: absolute;
        top: 70px;
        left: ${({ open }) => (open ? "0" : "-100%")}; //Import
        width: 100%;
        height: 40vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`