import './menu.css'


function createmenuPage() {
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

    function cookies() {
        
    }

    initialdiv.appendChild(eightydiv);
    const btn = document.getElementById('Menu');
    btn.disabled = true;
    document.getElementById('Home').disabled = false;
}


export { createmenuPage }