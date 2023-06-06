document.querySelectorAll('.items').forEach((it) => {
    it.addEventListener("click", () => {
        document.getElementById("toggle").checked = false;
    })
})
document.addEventListener("DOMContentLoaded", () => {

    const techs = [
        { name: "javascript", desc: "É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma." },
        { name: "html", desc: "É uma linguagem de marcação utilizada na construção de páginas na Web." },
        { name: "css", desc: "É um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>." },
        { name: "node-js", desc: "É um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web." },
        { name: "react-js", desc: "É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web." },
        { name: "mongodb", desc: "É um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas." },
        { name: "jquery", desc: "É uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário." },
        { name: "electron", desc: "É um framework de código aberto, que permite desenvolver aplicações para desktop GUI usando componentes front end e back end originalmente criados para aplicações web: Node.js para o back end e Chromium para o front end." },
        { name: "bootstrap", desc: "É um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, melhorando a experiência do usuário em um site amigável e responsivo." },
        { name: "firebase", desc: "É um conjunto de serviços de computação em nuvem de back-end e plataformas de desenvolvimento de aplicativos fornecidos pelo Google. Ele hospeda bancos de dados, serviços, autenticação e integração para uma variedade de aplicativos." }
    ]

    for (let i = 0; i < techs.length; i++) {
        document.getElementById("techs").innerHTML += `<img class="tech" src="./projects/Memory-js/images/${techs[ i ].name}.png" alt="${techs[ i ].name}">`
    }


    //     for (let i = 0; i < techs.length; i++) {
    //         document.getElementById("techs").innerHTML += `<div class="slider-card" id="${techs[ i ].name}">
    //             <div class="front-card" id="${i}" >
    //                 <img src="./projects/Memory-js/images/${techs[ i ].name}.png" alt="${techs[ i ].name}">
    //                 <p>${techs[ i ].name}</p>
    //             </div>
    //             <div class="back-card">
    //             <div class="tech-title">${techs[ i ].name}</div>
    //             <div class="tech-about">${techs[ i ].desc}</div>
    //             </div>
    //             </div>`
    //     }

    //     document.querySelectorAll(".circle").forEach((it) => {
    //         it.addEventListener("click", () => {
    //             for (let i = 1; i < 4; i++) {
    //                 if (`c${i}` === it.id) {
    //                     document.getElementById(`c${i}`).style.opacity = 1;
    //                     switch (i) {
    //                         case 1:
    //                             document.getElementById("techs").style.transform = "translate(30%)";
    //                             break;
    //                         case 2:
    //                             document.getElementById("techs").style.transform = "translate(-10%)";
    //                             break;
    //                         case 3:
    //                             document.getElementById("techs").style.transform = "translate(-30%)";
    //                             break;
    //                         default:
    //                             document.getElementById("techs").style.transform = "translate(30%)";
    //                     }
    //                 } else {
    //                     document.getElementById(`c${i}`).style.opacity = 0.5;
    //                 }
    //             }
    //             document.querySelectorAll(".flip").forEach((flippedCard) => {
    //                 flippedCard.classList.remove("flip");
    //             })
    //         })
    //     })

    //     document.querySelectorAll(".slider-card").forEach((it) => {
    //         it.addEventListener("click", () => {

    //             if (it.className.includes("flip")) {
    //                 it.classList.remove("flip")
    //             } else {
    //                 it.classList.add("flip");
    //             }

    //             document.querySelectorAll(".flip").forEach((flippedCard) => {
    //                 if (it.id !== flippedCard.id)
    //                     flippedCard.classList.remove("flip");
    //             })
    //         })
    //     })
})
