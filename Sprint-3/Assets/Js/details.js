const contenedor = document.getElementById("events-details");
const params = new URLSearchParams(location.search);
const nombre = params.get('name');

const detailsEncontrados = data.events.find(event => event.name === nombre);

let imgClass = '';
const img = new Image();
img.src = detailsEncontrados.image;
img.onload = function() {
  if (img.naturalWidth < 500 || img.naturalHeight < 500) {
    imgClass = 'img-small';
  }

  contenedor.innerHTML = `
    <div class="card border-primary m-5">
      <img src="${detailsEncontrados.image}" class="card-img-top ${imgClass}" alt="Event Image">
      <div class="card-body">
        <h4 class="card-title">${detailsEncontrados.category}</h4>
        <p class="card-text">Date: ${detailsEncontrados.date}</p>
        <p class="card-text">${detailsEncontrados.description}</p>
        <p class="card-text">Capacity: ${detailsEncontrados.capacity}</p>
        <p class="card-text">Place: ${detailsEncontrados.place}</p>
        <p class="card-text">Price: ${detailsEncontrados.price}</p>
      </div>
    </div>
  `;
};
