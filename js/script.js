import {MDCRipple} from '@material/ripple';

let title = "Henrik3"
/*
let head = document.getElementsByTagName("head")[0]
let link = document.createElement('link')

link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'css/style.css'

head.appendChild(link) */

document.title = title

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));
