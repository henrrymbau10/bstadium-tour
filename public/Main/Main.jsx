import React from 'react'
import "./Main.scss"
import runImg from "../Source/Pexels 10.png"
import individual from "../Source/individual.svg"
import team from "../Source/Group (1).svg"
import medal from "../Source/medal.svg"
import tshirt from "../Source/tshirt.svg"
import bottle from "../Source/bottle.svg"
import snack from "../Source/snack.svg"
import camera from "../Source/camera.svg"
import jumper from "../Source/jump.svg"
import points from "../Source/points.svg"
import clock from "../Source/clock.svg"
import location from "../Source/Location.svg"

import { useTranslation } from "react-i18next"


function Main() {
    const [t] = useTranslation("global")

    return (
        <div className='main'>

            <div className='main-desafio'>
                <div className='main-desafio-text'>
                    <h1>{t("main.main-challenge-title")}</h1>
                    <p>{t("main.main-challenge-text1")}</p>
                    <p className='main-desafio-text-desktop'>{t("main.main-challenge-text2")}</p>
                </div>
                <div className='main-desafio-image'>
                    <img src={runImg} alt="runimg" />
                </div>
                <div className='main-desafio-text-mobile'>
                    <p>{t("main.main-challenge-text2")} </p>
                </div>
            </div>

            <div className='main-recorrido'>
                <div className='main-recorrido-img'>
                    <div className='main-recorrido-img-itinerary'>
                        <img src={jumper} alt="Jump Icon" />
                        <p>{t("img.obstacle-text")}</p>
                    </div>
                    <div className='main-recorrido-img-itinerary'>
                        <img src={points} alt="Points Icon" />
                        <p>5 KM</p>
                    </div>
                    <div className='main-recorrido-img-itinerary'>
                        <img src={clock} alt="Clock Icon" />
                        <p>40MIN - 2HRS</p>
                    </div>
                    <div className='main-recorrido-img-itinerary'>
                        <img className="main-recorrido-img-itinerary-img" src={location} alt="Location Icon" />
                        <p>{t("img.stadium-text")}</p>
                    </div>
                    <p className='main-recorrido-text-mobile'>{t("main.main-itinerary-text")}</p>
                </div>
                <div className='main-recorrido-text'>
                    <h1>{t("main.main-itinerary-title")}</h1>
                    <p className='main-recorrido-text-desktop'>{t("main.main-itinerary-text")}</p>
                </div>
            </div>

            <h1 className='main-particion-title'>{t("main.main-participation-title")}</h1>
            <div className='main-particion'>

                <div className='main-particion-individual'>
                    <h2>{t("main.main-participation-subtitle")}</h2>
                    <img src={individual} alt="icono" />
                    <p className='main-particion-individual-desktop'>{t("main.main-participation-text")}</p>
                </div>
                <p className='main-particion-individual-mobile'>{t("main.main-participation-text")}</p>

                <div className='main-particion-team'>
                    <h2>{t("main.main-participation-subtitle2")}</h2>
                    <img src={team} alt="icono" />
                    <p className='main-particion-team-desktop'>{t("main.main-participation-text2")}</p>
                </div>
                <p className='main-particion-team-mobile'>{t("main.main-participation-text2")}</p>
            </div>

            <div className="main-disfrutaras">
                <div className="main-disfrutaras-texto">
                    <h2>{t("main.main-benefits-title")}</h2>
                    <p>{t("main.main-benefits-text1")} </p>
                    <p>{t("main.main-benefits-text2")}</p>
                </div>
                <div className="main-disfrutaras-img">
                    <div className='main-disfrutaras-img-box'>
                        <img src={medal} alt="Jump Icon" />
                        <p>{t("img.medal-text")}</p>
                    </div>
                    <div className='main-disfrutaras-img-box'>
                        <img src={tshirt} alt="Jump Icon" />
                        <p>{t("img.tshirt-text")}</p>
                    </div>
                    <div className='main-disfrutaras-img-box'>
                        <img src={bottle} alt="Jump Icon" />
                        <p>{t("img.hydration-text")}</p>
                    </div>
                    <div className='main-disfrutaras-img-box'>
                        <img src={snack} alt="Jump Icon" />
                        <p>{t("img.nutrition-text")}</p>
                    </div>
                    <div className='main-disfrutaras-img-box'>
                        <img className='main-disfrutaras-img-box-i' src={camera} alt="Jump Icon" />
                        <p>{t("img.camera-text")}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main