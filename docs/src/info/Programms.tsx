import React from "react"
import { LanguageOption } from "../functionallity/App/Language"

export type Program = {
    Title: JSX.Element
    LinkToProject: string
    CheckOut?:string
    Color: string
    Extension?:string
    Tags: LanguageOption<Array<string>>
} & LanguageOption<JSX.Element>

export interface ProgramsI{
    [key:string]: Program
}

const Programs:ProgramsI = {
    MetodosNumericos: {
        Title:(
            <span>
                <b> Metodos Numericos </b>
            </span>
        ),
        LinkToProject: "https://github.com/OmarMonroy0/Metodos-Numericos2.git",
        Color:"blue",
        english:(
            <span>
                It has the code in c++ for some methods of numerical methods
                such as Newton Method, Cublic Spline, Polynomial interpolation,
                Numerical Integration.
            </span>
        ),
        spanish:(
            <span>
                Tiene el codigo en c++ para algunos metodos de metodos numericos 
                tales como el metodo de newton, Spline Cubico, Interpolacion Polinomial,
                e Integracion Numerica.
            </span>
        ),
        Extension:"jpg",
        Tags:{
            english:["Math","Numerical Methods","c++"],
            spanish:["Matematicas","Metodos Numericos","c++"]
        },
    }
}