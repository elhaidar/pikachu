const content = document.getElementById("content");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetchData();
});

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {
    method: "GET",
  });
  const json = await response.json();
  content.style.display = "block";
  content.innerHTML = `<p>${json.id}: ${json.name}</p>
  <img src="${json.sprites.front_default}" width="100%">
  <p>type: ${json.types[0].type.name}</p>`;
};
