const mainContainer = document.querySelector("#main-container");
const filePath = "./data/projects.json";

async function fetchProjects() {
    try{
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        const data = await response.json();
        console.log(data.projects)
        displayProjects(data.projects)
        } 
    catch (error) {
        console.log(error);
    }
 }

 fetchProjects();


 function displayProjects(data){
    data.forEach(datum => {
        const section = document.createElement("section");
        const h2 =  document.createElement("h2");
        const img = document.createElement("img");
        const p2 = document.createElement("p");
        const a = document.createElement("a");

        h2.innerHTML = `${datum.title}`;
        p2.innerHTML = ` Description: ${datum. description}`;
        a.setAttribute('href', datum.website)

        // populate image
        img.setAttribute('SRC', datum.image);
        img.setAttribute('alt', datum.description );
        img.setAttribute('loading', 'lazy');


        //appending these elements to section element

        section.appendChild(h2);
        section.appendChild(img);
        section.appendChild(p2);
        section.innerHTML += `<a href="${datum.website}">Visit Website</a>`;

        mainContainer.appendChild(section);

    });
   

 }
