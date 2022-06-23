import {createHomePage} from './homepage'
import {createmenuPage} from './menu'


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
    menu();
    home();

}
createHomePage();
check_for_button_clicks();