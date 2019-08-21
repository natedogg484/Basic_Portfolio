let techLogos = []

let react = {
  name: 'react',
  image:
    'https://cdn-images-1.medium.com/max/1600/1*3SVfBkNZI2f-sspiq59xcw.png'
}
let javascript = {
  name: 'javascript',
  image: 'https://quintagroup.com/cms/js/js-image/javascript-logo.png'
}
let mongo = {
  name: 'mongoDB',
  image:
    'https://cdn-images-1.medium.com/max/1600/1*77jUu8XXo2IuA-G5YB444A.png'
}
let mySQL = {
  name: 'mySQL',
  image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png'
}
let jQuery = {
  name: 'jQuery',
  image:
    'https://banner2.kisspng.com/20180828/yge/kisspng-1st-century-logo-brand-electric-motor-duoweb-5b85a160141ef6.2288466515354842560824.jpg'
}
let html = {
  name: 'html',
  image:
    'https://dhirajkumarsingh.files.wordpress.com/2012/05/css3-html5-logo.png?w=150&h=129'
}
let css = {
  name: 'css',
  image: 'https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png'
}
let node = {
  name: 'nodejs',
  image:
    'https://ih0.redbubble.net/image.109336634.1604/flat,1000x1000,075,f.u1.jpg'
}
techLogos.push(react, javascript, mongo, mySQL, html, css, node)

console.log(techLogos)

for (let i = 0; i < techLogos.length; i++) {
  let logoImage = $('<img id="logos">')
  let imageSource = techLogos[i].image
  let imageAltText = techLogos[i].name

  logoImage.attr('src', imageSource)
  logoImage.attr('alt', imageAltText)

  $('#skill-logos').prepend(logoImage)
}
