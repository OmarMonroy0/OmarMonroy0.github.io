import React from "react"
import { LanguageOption } from "../functionallity/App/Language"

export type Project = {
    Title: JSX.Element
    LinkToProject: string,
    CheckOut?: string,
    Color: string
    Extension?: string
    Tags: LanguageOption<Array<string>>
} & LanguageOption<JSX.Element>;

export interface ProjectsI {
    [key: string]: Project
}

const Projects: ProjectsI = {
    CompetitiveProgramming: {
        Title: (
            <span>
                <b> Programacion Competitiva </b>
            </span>
        ),
        LinkToProject: "https://github.com/OmarMonroy0/CompetitiveProgramming.git",
        CheckOut: "https://github.com/OmarMonroy0/CompetitiveProgramming.git",
        Color: "purple",
        english: (
            <span>
                In recent years I have solved various  problems related
                to competitive programming in judges such as Codeforces,Uva online judge,
                Hacker Rank and many others.
                Additionally, I have actively participated in competitive programming competitions
                and algorithmic contests.
            </span>
        ),
        spanish: (
            <span>
                En los últimos años, he resuelto varios problemas relacionados con la programación competitiva en plataformas como Codeforces, UVa Online Judge, HackerRank y muchas otras. Además, he participado activamente en competencias de programación competitiva y concursos de algoritmos.
            </span>
        ),
        Extension: "png",
        Tags: {
            english: ["C++", "Competitive Programming", "Solutions", "Online Judges"],
            spanish: ["C++", "Programación Competitiva", "Soluciones", "Jueces en línea"],
        }
    },
    InterviewedSolvedProblems: {
        Title: (
            <span>
                <b> Interview Solved Problems </b>
            </span>
        ),
        LinkToProject: "https://github.com/OmarMonroy0/InterviewProblemsSolved.git",
        CheckOut: "https://github.com/OmarMonroy0/InterviewProblemsSolved.git",
        Color: "purple",
        english: (
            <span>
                This repository contains solutions to various interview problems, primarily for LeetCode and HackerRank.
            </span>
        ),
        spanish: (
            <span>
                Este repositorio contiene soluciones para varios problemas de entrevistas, principalmente para LeetCode y HackerRank.
            </span>
        ),
        Extension: "png",
        Tags: {
            english: ["C++", "Solutions", "LeetCode", "Hacker Rank"],
            spanish: ["C++", "Soluciones", "LeetCode", "Hacker Rank"],
        }
    },
    Figuras: {
        Title: (
            <span>
                <b> Figuras Geometricas </b>
            </span>
        ),
        LinkToProject: "https://github.com/OmarMonroy0/Desarrollo-Web.git",
        Color: "blue",
        english: (
            <span>
                A small project developed for my web development class, used to calculate the area of various shapes.
            </span>
        ),
        spanish: (
            <span>
                Un pequeño proyecto desarrollado para mi clase de desarrollo web, utilizado para calcular el área de diversas figuras.
            </span>
        ),
        Extension: "png",
        Tags: {
            english: ["html", "css", "university project"],
            spanish: ["html", "css", "Proyecto de universidad"],
        }
    },
}

export default Projects;