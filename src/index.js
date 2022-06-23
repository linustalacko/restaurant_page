import {createHomePage} from './homepage'
import {createmenuPage} from './menu'
import {createContactPage} from './contact'


function check_for_button_clicks() {
    function home() {
        const btn = document.getElementById('Home');
        btn.addEventListener('click', () => {
            document.getElementById('content').innerHTML = '';
            createHomePage();
        })
    }

    function menu() {
        const btn = document.getElementById('Menu');
        btn.addEventListener('click', () => {
            document.getElementById('content').innerHTML = '';
            createmenuPage();
        })
    }

    function contact() {
        const btn = document.getElementById('Contact');
        btn.addEventListener('click', () => {
            document.getElementById('content').innerHTML = '';
            createContactPage();
        })
    }
    contact();
    menu();
    home();

}

createContactPage();
check_for_button_clicks();