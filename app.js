const addBtn = document.querySelector("#add-btn");
const inputText = document.querySelector("#input-text");
const textContent = document.querySelector("#text-content");
var storyTelling = "";

if (textContent.textContent == "") {
  document.querySelector(".row").style.display = "none";
}

addBtn.addEventListener("click", function () {
  storyTelling = inputText.value;
  //console.log(storyTelling);
  setText(storyTelling);
  if (textContent.textContent) {
    document.querySelector(".row").style.display = "flex";
  }

  const span = document.querySelectorAll("#text-content>span");

  span.forEach((s) => {
    s.addEventListener("mouseover", function () {
      const req = new XMLHttpRequest();

      req.open(
        "GET",
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + s.innerText
      );

      req.send();

      req.addEventListener("load", function () {
        const data = JSON.parse(this.responseText);

        //console.log(span);
        showDict(data);
      });
    });
  });

  console.log();
});

showDict = (data) => {
  const dictionary = document.querySelector("#dictionary");
  let html = `
          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data[0].meanings[0].definitions[0].definition}</li>
              <li class="list-group-item">${data[0].meanings[0].definitions[0].example}</li>
            </ul>
          </div>
  `;

  dictionary.innerHTML = html;
};

setText = (text) => {
  const textArr = text.split(" ");
  let html = "";
  for (let i = 0; i < textArr.length; i++) {
    html += `
    <span> ${textArr[i]} </span>
    `;
    textContent.innerHTML = html;
  }
};
