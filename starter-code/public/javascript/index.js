import { APIHandler } from "./APIHandler.js";
const characterContainer = document.querySelector(".characters-container");

const charactersAPI = new APIHandler("http://localhost:8000/characters");

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
  .getFullList()
  .then(APIRes => {
    console.log(APIRes);
    APIRes.data.forEach(character => {
      const div = document.createElement("div");
        characterContainer.appendChild(div);
        div.classList.add("character-info");
        div.innerHTML = `<div class="name">Id: ${character.id} </div>
      <div class="name">Name: ${character.name} </div>
      <div class="occupation">Occupation:  ${character.occupation} </div>
      <div class="cartoon">Is a Cartoon?: ${character.cartoon} </div>
      <div class="weapon">Weapon: ${character.weapon} </div>`;
    });
  })
  .catch(APIErr => {
    console.log(APIErr,"yo");
  });
};

// axios.get("http://localhost:8000/characters").then(res => console.log(res)).catch(err => console.log(err));
document.getElementById("fetch-one").onclick = function() {
charactersAPI.getOneRegister("/:id")
.then(APIRes =>{
  console.log(APIRes);
//   const div = document.createElement("div");
//         characterContainer.appendChild(div);
//         div.classList.add("character-info");
//         div.innerHTML = `<div class="name">Id: ${character.id} </div>
//       <div class="name">Name: ${character.name} </div>
//       <div class="occupation">Occupation:  ${character.occupation} </div>
//       <div class="cartoon">Is a Cartoon?: ${character.cartoon} </div>
//       <div class="weapon">Weapon: ${character.weapon} </div>`;
})
.catch(APIErr =>{
  console.log(APIErr,"Hey");
})
};

document.getElementById("delete-one").onclick = function() {};

document.getElementById("edit-character-form").onsubmit = function() {};

document.getElementById("new-character-form").onsubmit = function() {};
