import {createHeader} from './header' 
import './homepage.css'


function createHomePage() {
    function create_div_for_home() {
        const initialdiv = document.getElementById('content')
        const eightydiv = document.createElement('div');
        eightydiv.id = 'eightydiv';

        const menu_page = ['title', 'secnd', 'third']
        const infor = ['']

        function create_divs() {
            for (let i = 0; i < 3; i++) {
                let new_div = document.createElement('div')
                new_div.id = menu_page[i];
                eightydiv.appendChild(new_div)
            }
        }
        create_divs();
        initialdiv.appendChild(eightydiv);
        document.querySelector('body').appendChild(initialdiv);
    }

    create_div_for_home();

    function create_text() {
        function create_title(){
            let title = document.createElement('h2')
            title.id = 'title-text'
            title.innerText = "Ziggy's Cookies"
            document.getElementById('title').appendChild(title);
        }

        function create_first_text() {
            let text = document.createElement('p');
            text.id = 'first';
            text.innerHTML = "Ziggy's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
            document.getElementById('secnd').appendChild(text);
        }


        function create_second_text() {
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            for (let day = 0; day < days.length; day++) {
                let day_of_question = document.createElement('p');
                day_of_question.id = days[day];
                console.log(days[day])
                day_of_question.innerHTML = days[day] + ': 8am - 8pm'
                document.getElementById('third').appendChild(day_of_question);
            }
        }
        create_title();
        create_first_text();
        create_second_text();

    }
    const btn = document.getElementById('Home');
    btn.disabled = true;
    document.getElementById('Menu').disabled = false;
    create_text();
}
createHeader();



export {createHomePage}