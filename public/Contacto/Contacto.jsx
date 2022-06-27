import React from 'react'
import "./Contacto.scss"
import contact from "../Source/pexels-jakob-jin-7086430.jpeg"

function Contacto() {
    return (
        <div class="contact">
            <h1>Contacto</h1>
            <img src={contact} alt="contact" />
        </div>
    )
}

export default Contacto