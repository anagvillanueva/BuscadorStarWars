const characters = JSON.parse(file)

console.log(characters.results)

function boton_buscar() {
  let personaje = buscar_personaje()
  let card = document.getElementById("card_personaje")
  
  card.innerHTML = `
    <p>Name: ${personaje.name}</p>
    <p>Birth year: ${personaje.birth_year}</p>
    <p>Gender: ${personaje.gender}</p>
    <p>Height: ${personaje.height}</p>
  `
}

function buscar_personaje() {
  let nombre_personaje = document.getElementById("nombre_personaje").value
  // console.log(nombre_personaje)
  
  for(let i=0; i<characters.results.length;i++) {
    if(characters.results[i].name == nombre_personaje) {
      return characters.results[i]
    }
  }
}