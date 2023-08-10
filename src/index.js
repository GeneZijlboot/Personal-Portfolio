//npx webpack --watch
//to instantly update page
import './style.css';

function component(){
    const Container = document.getElementsByClassName('Container')
    const Paragraph = document.createElement('p');

    Paragraph.classList.add('hello');
    Paragraph.innerText = 'Hello World';

    Container.appendChild(Paragraph);
}

component();