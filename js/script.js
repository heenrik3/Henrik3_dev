let title = "Henrik3"
let head = document.getElementsByTagName("head")[0]
let link = document.createElement('link')

link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'css/style.css'

head.appendChild(link)

document.title = title
