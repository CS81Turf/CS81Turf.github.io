const imageMap = {
    weathertracker: "weather_icon.jpg",
    portfolio: "chris_headshot.jpg",
    "chemical-mixing-calculator": "chem_icon.jpg"
}

async function fetchProjects() {
    try {
        const response = await fetch("https://api.github.com/users/CS81Turf/repos");
        const repos = await response.json();

        const featuredProjects = ["weathertracker", "portfolio", "chemical-mixing-calculator"];
        const filteredRepos = repos.filter(repo => featuredProjects.includes(repo.name));

        const projectList = document.querySelector(".projects");
        projectList.innerHTML = "";

        filteredRepos.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="images/${imageMap[repo.name]}" alt="${repo.name} logo" />
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || "No description available."}</p>
                `;

            projectList.appendChild(li);
        });
        
    } catch (error) {
        console.error('Error fetching projects', error);
    }
}

fetchProjects();