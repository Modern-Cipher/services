document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("projects-list");
  
    const projects = [
      {
        id: "project1",
        image: "assets/projects/project1.png",
        title: "Modern Cipher Logo",
        desc: "Created on March 2025"
      },
      {
        id: "project2",
        image: "assets/projects/project1.png",
        title: "UI Redesign",
        desc: "Created on April 2025"
      },
      {
        id: "project3",
        image: "assets/projects/project1.png",
        title: "CRM Dashboard",
        desc: "Created on May 2024"
      },
      {
        id: "project4",
        image: "assets/projects/project1.png",
        title: "POS System",
        desc: "Created on June 2024"
      },
      {
        id: "project5",
        image: "assets/projects/project1.png",
        title: "Inventory Manager",
        desc: "Created on July 2024"
      },
      {
        id: "project6",
        image: "assets/projects/project1.png",
        title: "Mobile App Design",
        desc: "Created on August 2024"
      }
    ];
  
    const projectLinks = {
      project1: "",
      project2: "",
      project3: "",
      project4: "",
      project5: "",
      project6: ""
    };
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-row-card";
      const link = projectLinks[project.id];
      const disabled = !link ? 'disabled style="opacity:0.5" title="Link not available"' : "";
  
      card.innerHTML = `
        <div class="project-card-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-card-info">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.desc}</p>
          <button class="project-card-btn" data-project="${project.id}" ${disabled}>View</button>
        </div>
      `;
      projectList.appendChild(card);
    });
  
    // Activate buttons
    document.querySelectorAll(".project-card-btn").forEach(button => {
      const projectId = button.getAttribute("data-project");
      const link = projectLinks[projectId];
  
      if (link) {
        button.addEventListener("click", () => {
          window.open(link, "_blank");
        });
      }
    });
  });
  