import React from 'react'
import "./Home.scss"
import Navbar from "./../Navbar/Navbar"
import arrow from "./../Source/Arrow 13.svg"
// import whatsapp from "../Source/whatsapp.svg"
import { useTranslation } from "react-i18next"

function Home() {
    const [t] = useTranslation("global")

    return (
        <div className="home">
            <Navbar />
            <h1>{t("home.home-title")}</h1>
            <h2>{t("home.home-subtitle")}</h2>
            <button>{t("home.home-signup")}</button>
            <img className='home-button' src={arrow} alt="icono" />
            {/* <img className="home-whatsapp" src={whatsapp} alt="icono" /> */}
        </div>
    )
}

export default Home