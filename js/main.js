var x =document.getElementById('para');

var quote=[
   `"Do not take life too seriously. You will not get out alive."
   `,
   `"You miss 100% of the shots you don't take."
  `,
   `"The best revenge is massive success."
   `, 
]
function getQuote ()
{
    var randomNumber = Math.floor(Math.random()*quote.length);

    document.getElementById('para').innerHTML = quote[randomNumber];   
}