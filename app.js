const req = new XMLHttpRequest();

req.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + word);

req.send();

req.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data[0].meanings[0].definitions[0].definition);
  console.log(data[0].meanings[0].definitions[0].example);
});
