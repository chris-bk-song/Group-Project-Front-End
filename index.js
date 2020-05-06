const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

let quotes = [];

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getSpace() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=yhAGByOoN03Qq1qHf4S1IBX070g1Of5dMIrzjLdf')
    .then(function (data2) {
      const img = document.getElementsByTagName('img')[2];
      console.log('data =', data2)
      img.setAttribute('src', data2.url)
    });
};

function getCats() {
  $.get('http://aws.random.cat/meow')
    .then(function (data2) {
      const img = document.getElementsByTagName('img')[1];
      console.log('data =', data2)
      img.setAttribute('src', data2.file)
    });
};

function renderQuote(quoteData) {
  $('#affirmation').text(quoteData.text)
  if (quoteData.author == null) {
    $("#author").text("Unknown");
  }
  else {
    $('#author').text(quoteData.author)

  };
  console.log(quoteData)
}

const getQuote = function () {
  $('#click-quote').html('Get me another!')
  let random = quotes[getRandomIndex(quotes.length)]
  renderQuote(random);
}

// function startSong() {
//   document.querySelectorAll('button')[0].click();
//   document.querySelectorAll('button')[1].click();
// }

$(document).ready( () => {
  $.get(settings).then(function (response) {
    const data = JSON.parse(response);
    const removeTrump = data.filter(settingObj => settingObj.author != 'Donald Trump');
    console.log(data);
    quotes = removeTrump
    console.log(quotes);

  });
  
  $('#click-quote').click(function () {
    getQuote()
    getCats();
    // startSong();
  });

  $('#space-quote').click(function () {
    getSpace()
  });
  
  // chuck norris quote generator
  $(document).ready(function () {
    let chuckNorris = "https://api.icndb.com/jokes/random";
    $("#click-chuck").on("click", function () {
      $("click-chuck").html("Chun Kuk Do!");
      $.getJSON(chuckNorris, function (json) {
        $("#chuck-text").html("<em>\"" + json.value.joke + "\"</em>").addClass("animated bounceIn");
      });
    });
  
  });
})




