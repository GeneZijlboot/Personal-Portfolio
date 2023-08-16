//import stylesheet
import './style.css';

//import all the js files
import TyperWriter from "../src/TypeWriter"
import ChangeBg from "../src/ChangeBGColor"

TyperWriter();
window.addEventListener("scroll", ChangeBg);

