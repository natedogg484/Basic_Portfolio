let projectCards = []

let baconeer = {
  title: 'Bring Home The Bacon',
  description:
    'A job site shell that lets the user track their progress in the job application process. Utilizes MongoDB, NodeJS JavaScript, jQuery, HTML, CSS, and has working authentication.',
  link: 'https://secure-woodland-30423.herokuapp.com/'
}
projectCards.push(baconeer)
let goodDeeds = {
  title: 'Good Deeds',
  description:
    'An app that helps people to find local charities, or charitable events. Created with Reactjs, JavaScript, jQuery, MySQL, Passport authentication, HTML, CSS, Google Maps API, ajax calls to exterior APIs.',
  link: 'https://vast-badlands-82161.herokuapp.com/'
}
projectCards.push(goodDeeds)
let foodRoulette = {
  title: 'Food Roulette',
  description:
    "An app that helps those who can't decide where to go to eat, or order, on a restaurant that is near them. Uses Google and Yelp API's for location, rating, and price check. Also, has an actual, working roulette wheel! Built completely with JavaScript, HTML, and CSS.",
  link: 'https://oscodin.github.io/Food-Roulette/'
}
projectCards.push(foodRoulette)
let southParkClicky = {
  title: 'South Park Clicky Project',
  description:
    "A fun little game built with React. Click on the character cards, but remember which ones you've clicked. Click one twice and you lose! See if you can get the highschore.",
  link: 'https://natedogg484.github.io/clicky-game/'
}
projectCards.push(southParkClicky)

for (let i = 0; i < projectCards.length; i++) {
  let infoCard = $("<div class ='card' id='projCard'>")
  let projTitle = $("<div class='card-header'>").text(projectCards[i].title)
  let infoCardBody = $("<div class='card-body'>")

  let projDescription = projectCards[i].description
  let projLink = projectCards[i].link

  let postedDescription = $("<p class='card-text'>").text(projDescription)

  let eventLink = $('<a target="_blank">').text('Check out the App!')
  eventLink.attr('href', projLink)

  infoCard.append(projTitle, infoCardBody)
  infoCardBody.append(postedDescription, eventLink)

  $('#project-cards').prepend(infoCard)
}
