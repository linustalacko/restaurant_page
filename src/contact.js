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

    function myMap() {
        const uluru = { lat: -25.344, lng = 131.031 };
        const map = new google.maps.Map(docu)
    }






    initialdiv.appendChild(eightydiv);

    const btn = document.getElementById('Contact');
    btn.disabled = true;
    document.getElementById('Contact').disabled = false;
}

export {createContactPage}