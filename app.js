//get elements

const quoteArea = document.querySelector('.quote')
const writer = document.querySelector('.author')
const next = document.querySelector('#next-quote')
const url = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivation&limit=3&'

// console.log(quoteArea, writer, next)

async function getapi(url)
{
  var rand = Math.ceil(Math.random()*10)
  const response = await fetch(url+'page='+rand);
  var data = await response.json();
  const quotesArray = data.data
  const randQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]
  writer.innerText = randQuote.quoteAuthor
  quoteArea.innerText = randQuote.quoteText

}
next.addEventListener('click', function(){
  getapi(url);
});

getapi(url);
