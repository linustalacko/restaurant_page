import './contact.css'

function createContactPage() {
    const initialdiv = document.getElementById('content')
    const eightydiv = document.createElement('div');
    eightydiv.id = 'eightydiv';



    function create_title(){
        let title_div = document.createElement('div');
        title_div.id = 'title_div';
        let title = document.createElement('h2')
        title.id = 'title-text'
        title.innerText = "Ziggy's Cookies"
        title_div.appendChild(title);
        eightydiv.appendChild(title_div);
    }
    create_title();

    
    function mapping() {
        let map = document.createElement('div')
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14951977.760307666!2d-19.277083357112335!3d-23.804897908218756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b10c91d2619%3A0xe4710f5b2b64dc6e!2z0L4uINCh0LIuINCV0LvQtdC90Ys!5e0!3m2!1sru!2sua!4v1655885634241!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        let map_text = document.createElement('h2');
        map_text.innerHTML = 'Yes! We are in the middle of nowhere!'
        map.appendChild(map_text);
        eightydiv.appendChild(map);
    }

    mapping();




    initialdiv.appendChild(eightydiv);

    const btn = document.getElementById('Contact');
    btn.disabled = true;
    document.getElementById('Contact').disabled = false;
}

export {createContactPage}