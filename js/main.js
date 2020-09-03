const btn = document.getElementById("btn");

btn.addEventListener("click", verJugadores);

function verJugadores () {
  fetch("data.json")
  .then((message) => message.json())
  .then((jugadores) => {
    let output = "";
    jugadores.forEach((jugador) => {
      output += `<div class="card mt-4 mb-4" style="width: 18rem;">
      <div class="card-body">
        <ul>
        <li><img class="card-img-top" src="${jugador.img_url}" alt="${jugador.nombre}"></li>
        <li>Numero: ${jugador.id}</li>
        <li>Nombre y Apellido: ${jugador.nombre} ${jugador.apellido}</li>
        <li>Edad: ${jugador.edad}</li>
        <li>Posicion: ${jugador.posicion}</li>
        <li>Pais: ${jugador.pais}</li>
        </ul>
        </div>
      </div>`
    });
    document.getElementById("jugadores").innerHTML = output;
  });
}


