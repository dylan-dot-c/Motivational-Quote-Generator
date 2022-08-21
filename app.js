//get elements

const quoteArea = document.querySelector('.quote')
const writer = document.querySelector('.author')
const next = document.querySelector('#next-quote')
const url = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivation&limit=3&'
const clipboard = document.querySelector('#copy')

// console.log(quoteArea, writer, next)

async function getapi(url)
{
  var rand = Math.ceil(Math.random()*30)
  // navigator.clipboard.writeText("HELLO WORLD")
  const response = await fetch(url+'page='+rand);
  var data = await response.json();
  const quotesArray = data.data
  const randQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]
  writer.innerText = randQuote.quoteAuthor
  quoteArea.innerText = randQuote.quoteText

}

//event listeners
next.addEventListener('click', function(){
  getapi(url);
});

clipboard.addEventListener('click', function(){
  let text = quoteArea.innerText + '\n ~' + writer.innerText;
  // alert(text)
    navigator.clipboard.writeText(text);
    alert('Copied!')


})

getapi(url);
