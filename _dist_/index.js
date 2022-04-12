const numRandom = () => {
    const random = Math.floor(Math.random() * (122 - 1) + 1)
    return random
}


const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.src = `https://randomfox.ca/images/${numRandom()}.jpg` //TODO

    container.appendChild(imagen)

    return container
}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')

//
const addImage = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
}

addButton.addEventListener('click', addImage)