const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  //quote.innerHTML = data.content;
  //author.innerHTML = data.author;
}

getQuote(api_url);

const newQuote = document.getElementById("new");
newQuote.addEventListener("click", getQuote(api_url));

const tweet = document.getElementById("tweet");
tweet.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet",
    "Tweet Window",
    "width=600, height=500"
  );
});
