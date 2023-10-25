import React from "react"

const myInfo = {
    english: {
        sayHello: (
            <span>
                Hello, I am <b> Omar Monroy</b>
            </span>
        ),
        checkResume: "CHECK  MY RESUME",
        text: [
            "Enthusiastic",
            "Computer Scientist",
            "I really enjoy working on teams and sharing knowledge",
            "I love programming for the web",
        ],
        tags: ["Computer Science", "Passionate about learning new things"]
    },
    spanish: {
        sayHello: (
            <span>
                Hola, Soy <b> Omar Monroy</b>
            </span>
        ),
        checkResume: "CHECA MI CURRICULUM",
        text: [
            "Entusiasta",
            "Computologo",
            "Realmente disfruto trabajar en equipos y compartir conocimiento",
            "Me encanta trabajar para la Web",
        ],
        tags: ["Computologo", "Apasionado por aprender cosas nuevas"]
    },
}

export default myInfo;