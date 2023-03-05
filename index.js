
class Carosel {
    /**
     * 
     * @param {HTMLElement} element 
     * @param {object} option 
     * @param {object} option.defile nombre d'element a fait défilé
     * @param {object} option.visible nombre d'element visible
     */
    constructor(element,option = {}){
        this.element = element
        this.child = [].slice.call(element.children)
        this.option = Object.assign({},{
            defile:3,
            visible:3
        },option)

        const root = this.makeElement('div','carosel')
        const panorama = this.makeElement('div','panaroma')
        root.appendChild(panorama)
        this.element.appendChild(root)

        this.child.forEach(el => {
            const items = this.makeElement('div','items').append(el)
            panorama.appendChild(items)
        });
    }

    /**
     * @param {string} els  nom de balise
     * @param {string} classe  nom de classe
     * @returns {HTMLElement}
     */
    makeElement(els = 'div',classe =''){
        const el = document.createElement(els)
        el.setAttribute('class',classe)
        return el
    }

}
// const main = document.querySelector('main') 
// c = new Carosel(main,{})

