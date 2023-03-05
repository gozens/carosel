
// url des image aléeatoire
const url = 'https://jsonplaceholder.typicode.com/photos'

// l'image sur laquelle l'on se trouve
// let  compter = 0 // 509 px:

// let time,this.element,child,this.w

// // pour attend le chargement de la page 
// window.onload = ()=>{

//     this.element = document.querySelector('.panorama')
    
//     // cloner le premier element
//     const firstelement = this.element.firstElementChild.cloneNode(true)
    
//     // injcter le clone a la fin du diapo
//     this.element.appendChild(firstelement)
    
//     // mettre tout les enfant dans un tableau
//     child = Array.from(this.element.children)
    
//     // on recupere les fleche
//     const fl_g = document.querySelector('.left')
//     fl_g.onclick = ()=> nextL()

//     const fl_d = document.querySelector('.right')
//     fl_d.onclick = ()=> nextR()
//     this.w = child[1].getBoundingClientRect().width +20
// }


function nextR(){
    compter++
    const cal = (-compter*this.w) 
    
    this.element.style.transform = 'translateX('+(cal)+'px)'
    this.element.style.transition = '1s linear'
    setTimeout(() => {
        if (compter >= child.length -1){
            compter = 0
            this.element.style.transition = 'uniset'
            this.element.style.transform = 'translateX(0)'
        }
    }, 1000);
}

function nextL(){
    compter--
    
    if (compter <0){
        compter = child.length -2
        this.element.style.transition = 'uniset'
        const cal = -compter * this.w
        this.element.style.transform = 'translateX('+(cal)+'px)'
        return
    }
    this.element.style.transition = '1s linear'
    const cal = -compter * this.w
    this.element.style.transform = 'translateX('+(cal)+'px)'
    
}

// const defile = setInterval(() => {
//     nextR()
// }, 3000);
import { Carosel } from "./fonction.js"

window.onload = ()=>{
    const panorama = document.querySelector('.panorama')
    const option = {
        visible:1,
        defile:1,
        gauche:document.querySelector('.left'),
        droit:document.querySelector('.right'),
        margin:20,
        auto:true
    }
    new Carosel(panorama,option)
}

const footer = document.querySelector('footer')
