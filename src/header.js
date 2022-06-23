import './header.css'

function createHeader() {
    const body = document.querySelector('header');
    const initialdiv = document.createElement('div');
    initialdiv.id = 'initial';
    
    const headerbuttons = ['Home', 'Menu', 'Contact']

    function add() {
        for (let i = 0; i < 3; i++) {
            let btns = document.createElement('button')
            btns.id = headerbuttons[i];
            btns.innerHTML = headerbuttons[i]
            initialdiv.appendChild(btns)
       }  
    }

    add();
    body.appendChild(initialdiv)
}

export {createHeader}