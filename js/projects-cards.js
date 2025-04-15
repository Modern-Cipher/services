document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("projects-list");

  const projects = [
    {
      id: "project16",
      image: "assets/projects/project16.png",
      title: "OJT Management System",
      desc: "Created on March 30, 2025"
    },
    {
      id: "project15",
      image: "assets/projects/project15.png",
      title: "Modern Cipher Logo",
      desc: "Created on March 15, 2025"
    },
    {
      id: "project14",
      image: "assets/projects/project14.png",
      title: "Clinic Logo",
      desc: "Created on Mar 11, 2025"
    },
    {
      id: "project13",
      image: "assets/projects/project13.png",
      title: "Poster Design",
      desc: "Created on May 14, 2024"
    },
    {
      id: "project12",
      image: "assets/projects/project12.png",
      title: "Cover Design",
      desc: "Created on Aug 15, 2024"
    },
    {
      id: "project11",
      image: "assets/projects/project11.png",
      title: "Christening <br/>Tarpaulin Design",
      desc: "Created Jun 9, 2023"
    },
    {
      id: "project10",
      image: "assets/projects/project10.png",
      title: "Watch Poster Design",
      desc: "Created on Jun 9, 2023"
    },
    {
      id: "project9",
      image: "assets/projects/project9.png",
      title: "Christening <br/>Tarpaulin Design",
      desc: "Created on Jun 4, 2023"
    },
    {
      id: "project8",
      image: "assets/projects/project8.png",
      title: "Landing page using Google Sites",
      desc: "Created on Nov 10, 2022"
    },
    {
      id: "project7",
      image: "assets/projects/project7.png",
      title: "SIBOL: Mobile Application",
      desc: "Created on Jun 9, 2022"
    },
    {
      id: "project6",
      image: "assets/projects/project6.png",
      title: "E-loading Tarpaulin Design",
      desc: "Created on May 9, 2022"
    },
    {
      id: "project5",
      image: "assets/projects/project5.png",
      title: "Bulacan Blood Bank Logo & Mobile App",
      desc: "Created on Apr 21, 2022"
    },
    {
      id: "project4",
      image: "assets/projects/project4.png",
      title: "Birthday Cake Topper Design",
      desc: "Created on Dec 5, 2024"
    },
    {
      id: "project3",
      image: "assets/projects/project3.png",
      title: "Birthday Tarp Design",
      desc: "Created on Mar 21, 2022"
    },
    {
      id: "project2",
      image: "assets/projects/project2.png",
      title: "VB. Net Desktop Application",
      desc: "Created on Mar 2, 2022"
    },
    {
      id: "project1",
      image: "assets/projects/project1.png",
      title: "Automated E-Certificate Design",
      desc: "Created on Ma 26, 2021"
    }
  ];

  const projectLinks = {
    project16: "https://github.com/Modern-Cipher/ojt-management.git",
    project15: "https://modern-cipher.github.io/services/",
    project14: "https://drive.google.com/file/d/11eFPtCRlAUeUSNEp8-_BXfCivQYRwPT9/view",
    project13: "https://docs.google.com/presentation/d/1Msdz8nfx8pTal2UkCkvGjquK3wGsF8yUjkfZj--eD9Y/edit?usp=sharing",
    project12: "",
    project11: "https://drive.google.com/file/d/1ZC-gI49zs8EPEhiaD1QUnkKYcJZR08G5/view",
    project10: "https://drive.google.com/drive/folders/1T6BZpzzq7KYUGQZDb4_eJ8mFv7fB2LoO?usp=sharing",
    project9: "https://drive.google.com/file/d/1VJkWuRnAo254UsaLOHcJjfkm0XKIYUy-/view",
    project8: "https://sites.google.com/view/forsale-laptop-asus-tuf-gaming/home",
    project7: "https://drive.google.com/file/d/1L9VQotU1HmPJZITlN9cCPveZt4RZkRR7/view",
    project6: "https://drive.google.com/file/d/1fs0H5mgEMb1SQbhBDDUqrrAPc8yjDroP/view",
    project5: "https://drive.google.com/drive/folders/1-nZLjSu6miI4a4JMRhfUf1djtFr-5KuN?usp=sharing",
    project4: "https://drive.google.com/file/d/1ITetmf_1EP8ty6ED94NHps0rWHAmmNwb/view?usp=sharing",
    project3: "https://drive.google.com/file/d/1xUE6JlXCZQilPSyIZL-DPJFzTmbM9KYK/view",
    project2: "",
    project1: "https://drive.google.com/file/d/1FbLwZzYYOmGnX878DCMVOUNC6eOqhYp3/view"
  };

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-row-card";
    const link = projectLinks[project.id];
    const disabled = !link ? 'disabled style="opacity:0.5" title="Link not available"' : "";

    card.innerHTML = `
      <div class="project-card-image loading">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-card-info">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.desc}</p>
        <button class="project-card-btn" data-project="${project.id}" ${disabled}>View</button>
      </div>
    `;

    const img = card.querySelector("img");
    const imgContainer = card.querySelector(".project-card-image");

    // Show image and remove spinner on load
    img.addEventListener("load", () => {
      img.classList.add("loaded");
      imgContainer.classList.remove("loading");
    });

    // Handle cached images (instantly apply loaded)
    if (img.complete && img.naturalWidth !== 0) {
      img.classList.add("loaded");
      imgContainer.classList.remove("loading");
    }

    // Hide the image container completely if image fails
    img.addEventListener("error", () => {
      imgContainer.classList.remove("loading");
      imgContainer.classList.add("hidden"); // this will apply display: none
    });

    projectList.appendChild(card);
  });

  // Handle "View" button click
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
