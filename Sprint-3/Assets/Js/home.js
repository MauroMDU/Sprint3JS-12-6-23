const eventosContainer = document.getElementById('eventos-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchInput = document.querySelector('.search input[type="search"]');

function generateEventCard(event) {
  return `
    <div class="box-one ${event.category}">
      <div class="card" style="width: 14rem;">
        <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <a href="./Assets/pages/details.html?name=${event.name}" class="btn btn-primary">More Details</a> 
        </div>
      </div>
    </div>
  `;
}

function showEvents(events) {
  eventosContainer.innerHTML = '';

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const eventCard = generateEventCard(event);
    eventosContainer.innerHTML += eventCard;
  }
}

function filterEvents() {
  const checkedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
  const searchValue = searchInput.value.toLowerCase();

  const filteredEvents = data.events.filter(event => {
    const eventName = event.name.toLowerCase();
    const eventDescription = event.description.toLowerCase();
    const eventCategory = event.category.toLowerCase();

    const matchesSearch = eventName.includes(searchValue) || eventDescription.includes(searchValue);
    const matchesCategories = checkedCategories.length === 0 || checkedCategories.includes(eventCategory);

    return matchesSearch && matchesCategories;
  });

  showEvents(filteredEvents);
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', filterEvents);
});

searchInput.addEventListener('input', filterEvents);

showEvents(data.events);
