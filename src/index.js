import generateJoke from "./generateJoke";
import './styles/main.scss'
import Mandala from './assets/Mandala.svg'

const Mandalaimg = document.getElementById('MandalaImg')
Mandalaimg.src = Mandala

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke();