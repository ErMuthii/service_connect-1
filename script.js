const services = [
    { name: 'John Doe', service: 'Plumbing', experience: 5, rating: 4.5, page: 'john_doe.html' },
    { name: 'Jane Smith', service: 'Cooking', experience: 10, rating: 4.8, page: 'jane_smith.html' },
    { name: 'Mike Johnson', service: 'Car Detailing', experience: 3, rating: 4.2, page: 'mike_johnson.html' },
    { name: 'Sarah Williams', service: 'Gardening', experience: 8, rating: 4.7, page: 'sarah_williams.html' },
    { name: 'David Brown', service: 'Electrician', experience: 12, rating: 4.9, page: 'david_brown.html' },
    { name: 'Emily Davis', service: 'House Cleaning', experience: 4, rating: 4.3, page: 'emily_davis.html' }
];

function createServiceCard(service) {
    const card = document.createElement('div');
    card.classList.add('service-card');
    
    const name = document.createElement('h3');
    name.textContent = service.name;
    
    const serviceName = document.createElement('p');
    serviceName.textContent = `Service: ${service.service}`;
    
    const experience = document.createElement('p');
    experience.textContent = `Experience: ${service.experience} years`;
    
    const rating = document.createElement('p');
    rating.textContent = `Rating: ${service.rating} ⭐`;
    
    card.appendChild(name);
    card.appendChild(serviceName);
    card.appendChild(experience);
    card.appendChild(rating);

    // Add click event listener to redirect to personal page
    card.addEventListener('click', () => {
        window.location.href = service.page;
    });
    
    return card;
}

function displayServices(services) {
    const container = document.getElementById('servicesContainer');
    container.innerHTML = '';
    services.forEach(service => {
        const card = createServiceCard(service);
        container.appendChild(card);
    });
}

function filterCards() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredServices = services.filter(service => 
        service.service.toLowerCase().includes(searchInput)
    );
    displayServices(filteredServices);
}

document.addEventListener('DOMContentLoaded', () => {
    displayServices(services);
});

const toggleItem = (element) => {
    const headers = document.querySelectorAll("article header");
    for (let header of headers) {
      header.classList.remove("active");
      header.nextElementSibling.style.height = "0px";
    }
  
    element.classList.add("active");
  
    const content = element.nextElementSibling;
  
    const text = content.querySelector("p");
  
    content.style.height = `${text.clientHeight}px`;
  };
