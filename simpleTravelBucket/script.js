// let destinationName;
// let location;
// let photoUrl;
// let description;
const bucket = document.getElementById("bucket1");

document.querySelector("#inputForm").addEventListener("submit", dataInput);

function dataInput(e) {
  e.preventDefault();
  console.log("inside dataInput");
  let destinationName = document.getElementById("destinationName").value;
  let location = document.getElementById("location").value;
  let photoUrl = document.getElementById("photo").value;
  let description = document.getElementById("description").value;
  //   let destinationName = e.target.elements["destinationName".value];
  //   let location = e.target.elements["location".value];
  //   let photoUrl = e.target.elements["photo".value];
  //   let description = e.target.elements["description".value];

  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.style.width = "25em";
  card.style.margin = "5em";

  let image = document.createElement("img");
  image.setAttribute("class", "cardImage");
  image.setAttribute("alt", destinationName);

  if (photoUrl.length === 0) {
    image.setAttribute("src", "./compassRose.png");
  } else {
    image.setAttribute("src", photoUrl);
  }
  card.appendChild(image);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "cardBottom");

  let cardName = document.createElement("p");
  cardName.setAttribute("class", "cardName");
  cardName.innerHTML = destinationName;
  cardBody.appendChild(cardName);
  console.log(cardName);

  let cardLocation = document.createElement("p");
  cardLocation.setAttribute("class", "cardLocation");
  cardLocation.innerHTML = location;
  cardBody.appendChild(cardLocation);
  console.log(cardLocation);

  let cardDescription = document.createElement("p");
  cardDescription.setAttribute("class", "cardDescription");
  cardDescription.innerHTML = description;
  cardBody.appendChild(cardDescription);
  console.log(cardDescription);

  let cardButtons = document.createElement("div");
  cardButtons.setAttribute("class", "cardButtons");
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButton");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", deleteOne(card));
  cardBody.appendChild(deleteButton);

  card.appendChild(cardBody);
  document.querySelector("#bucket1").appendChild(card);

  //   let editButton = document.createElement("button");
  //   editButton.setAttribute("class","buttonEdit");
  //   editButton.innerHTML = "Edit";
  //   editButton.addEventListener("click", editD)
}
function deleteOne(card) {
  // card.removeAttribute();
}
