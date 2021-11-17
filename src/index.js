import "../index.css"
import js_img from '../assets/jsImg.png'

console.log('hello world')

const jsImageHTML = document.createElement('img')
jsImageHTML.className = 'js-image'
jsImageHTML.src = js_img
document.body.append(jsImageHTML)