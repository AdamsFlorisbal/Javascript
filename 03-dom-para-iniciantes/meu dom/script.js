// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');

console.log(img)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const animais = document.querySelectorAll('img[src^="img/imagem"]');

console.log(animais)
// Selecione todos os links internos (onde o href começa com #)

const link = document.querySelectorAll('a[href^="#"]');

console.log(link)

// Selecione o primeiro h2 dentro de .animais-descricao
const hDois = document.querySelector('.animais-descricao h2');

console.log(hDois)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos[paragrafos.length - 1])