import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import App from "./functionallity/App"

const DOM = document.getElementById("app")

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    DOM
)