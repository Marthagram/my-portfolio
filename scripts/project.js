const mainContainer = document.querySelector("#main-container");
const filePath = "../data/projects.json";

async function fetchProjects() {
    try{
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);  
        const data = await response.json();
        displayProjects(data.projects) 
    } catch (error) {
        console.error("Fetch failed:", error);
        mainContainer.innerHTML = `<p>Could not load projects. Check console.</p>`;
    }
}
fetchProjects();

function displayProjects(data){
    mainContainer.innerHTML = "";
    data.forEach(datum => {
        const section = document.createElement("section");
        section.innerHTML = `
            <h2>${datum.title}</h2>
            <img src="${datum.image}" alt="${datum.description}" loading="lazy">
            <p>Description: ${datum.description}</p>
            <a href="${datum.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        `;
        mainContainer.appendChild(section);
    });
}