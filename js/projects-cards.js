document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("projects-list");

  const projects = [
    {
      id: "project16",
      image: "https://lh3.googleusercontent.com/pw/AP1GczM_89ajzZXKKju2aWj1tXvl857c8tbujYfgVkIJKY6uidsqPDNUDrYP8BaVT9h-vJtgdfTQX9jyCphIm9YKI1AiEqJ5L9nY7IlB4gzWR6WJlc6lkshqBN8KmXQjBoZ4X1KoZgg9jrVvNIKANyXxPwsm=w945-h945-s-no-gm?authuser=0",
      title: "OJT Management System",
      desc: "Created on Mar 30, 2025"
    },
    {
      id: "project15",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPFhqhjqYx1JKW60iupGzytGjQjv9lXcq8xkU7supp-wEBwoCjI26RrUH9Nh4cLS3xwhT9NCe053RmDEapdKNuwz1-HqhssTCh_EE8ya3stnFB1G0QokruhI6fB9RC9gWE5LfUEl6EfBmSILEaxifQ=w200-h200-s-no-gm?authuser=0",
      title: "Modern Cipher Logo",
      desc: "Created on Mar 15, 2025"
    },
    {
      id: "project14",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNq42hIpZOYA3P9X2SjmpQm8OpzfraLya4khVDFj1IPh4S95oDwlYOwQOGSRFbqG0tXAZ6HS9E2_pbq26NlGCodkPYU-dTJENjbGyz72y96xQ0yqvqJQrJtVuvFrlTQV6_S0pK7zkiy44pybC_ZhJU=w945-h945-s-no-gm?authuser=0",
      title: "Clinic Logo",
      desc: "Created on Mar 11, 2025"
    },
    
    {
      id: "project13",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMLjHs9gpEp1uN9laABdvY1KEVIYPVILY4q_7BAod7C0MgmUb2g9H_jxk7RV7qnDfnRG9Gh2NrTiWnauuJtnbZjDI5U0BEIw2hRZnjpmwWpDaHE_MaVuwjr0_8EAv4Y9sU6NLeI-b_oSHTnE8Jdhl4=w1243-h698-s-no-gm?authuser=0",
      title: "Poster Design",
      desc: "Created on May 14, 2024"
    },
    {
      id: "project12",
      image: "https://lh3.googleusercontent.com/pw/AP1GczN8rQZPfrFigyInjpXU6bdzHZ-cBNiwEx00GJHNh4ah7aBaZo4le0puHDd7dk_rA_Rx0_dtLru_1Vlg4P9ILirxLuJxJEjkkv4BKJj3KS8ayc52QlZCUGYko7OEdCumVzpwdTXQiNe0-Miv6JNmsEE=w544-h839-s-no-gm?authuser=0",
      title: "Cover Design",
      desc: "Created on Aug 15, 2024"
    },
    {
      id: "project11",
      image: "https://lh3.googleusercontent.com/pw/AP1GczN5_pPDcwbmCuFywY7RGdi50ElT_WUQ-966aVi6-zGt9dqRSMrbwtkjtxgw2heKZFyz7pI0KK1jGR1lw7A4Ehi4nWbXv5zY6vNzK0zsFNr7ywXIDIG5YRxlH5OV2FyU9AxxqbxggnoeDPOJwwO2Yuc=w1227-h814-s-no-gm?authuser=0",
      title: "Christening <br/>Tarpaulin Design",
      desc: "Created Jun 9, 2023"
    },
    {
      id: "project10",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNFttLeFmfLltEWRl9Wg3zSNPI8KVdMGCwmXHINTrVUypyvzxNEk3wnQGqb7zxqq2R8byA7Y95xb6Q-mFQgn3rx6hPopI22i8-YIjLfB273EJ0cKjXOlEmGGDM0xtdPr6gWyqF6f5NeYH_ZF3krRAY=w945-h945-s-no-gm?authuser=0",
      title: "Watch Poster Design",
      desc: "Created on Jun 9, 2023"
    },
    {
      id: "project9",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPADyB12KmcdnrZNdje7x0ME1F61rHKJvDwmpZpMI8BDKDbZk--IRvXxLnWrJWic-III6fyaayCYhPAIs-a23S4znuSfv01SyJZEHlShqlFc_P6-M1bw1wG6Vx2srEnRWXGITwXZhM0qssS8D4pGSc=w1220-h809-s-no-gm?authuser=0",
      title: "Christening <br/>Tarpaulin Design",
      desc: "Created on Jun 4, 2023"
    },
    {
      id: "project8",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNsGwYpwmfSygWxdEfGRWAxl3QBB_w1fdwX0kQonWMNurB-gYrcGi4HL6LNGzRfBvUTSqWE8KbGtqcmNY-WYRcA65jvnkZE8KaD3SUCDuob1YrGW_dXv_IrJQnWn6sgEu3Fi-xQZfqiS9HI0lEhJ8o=w1560-h711-s-no-gm?authuser=0",
      title: "Landing page using Google Sites",
      desc: "Created on Nov 10, 2022"
    },
    {
      id: "project7",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP09gwe_1TjzeW234YAeaz7i3cpM-P1c1amEgcPX0OsFXcDTNOYf8_HxZQyhQqwqdvkHGlchQYWbDctlwgoMU-U4NDq61yhgxag-mcyLyWisYuDWNVDhhDTlbAA68ZP6YJ2YqUgjro_aWr9G3JUZZU=w200-h200-s-no-gm?authuser=0",
      title: "SIBOL: Mobile Application",
      desc: "Created on Jun 9, 2022"
    },
    {
      id: "project6",
      image: "https://lh3.googleusercontent.com/pw/AP1GczN3WybX0KrRbcYd5iwWhd7zF-HYv95DBPH23CLogLj4YpSA4jaVWSQvwlvbc91txSAlUm61E6y3r3aIn-NNfSMxQN1-oURRF9h5IumXYflTZHeDbSQs_FtGNJeEpB7kivoJapmguA0Pd8OHOhO6ahY=w1225-h815-s-no-gm?authuser=0",
      title: "E-loading Tarpaulin Design",
      desc: "Created on May 9, 2022"
    },
    {
      id: "project5",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP8dmc8rFB1vi7VUt1hmmpt2-p8YLx_n5GKLgBtG8w6FigqCjeMs8Z2fJUdJ-mAaHTbarpODVwuQPJOUI2IBlP1Su5z67hLUuQ5NZflDLoDXK-HWaJ3_NZIs_jIvXoiGQCYP50UN5yHBASnHmERU-o=w945-h945-s-no-gm?authuser=0",
      title: "Bulacan Blood Bank Logo & Mobile App",
      desc: "Created on Apr 21, 2022"
    },
    {
      id: "project4",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPCYl36_AT4b_H95H9xvRlnAghAkUZ5n9i4Q8Aumzxae_JCsmJEQPoNdr3JL7XiB-P67GLzZe88461rFYHD13OOZLSY5AYPwWMaeJ5Kk6ZjbGwzSlwp7t5NQ9s8MaKifvRhT3xRCeheGS6VpG_kaf8=w794-h769-s-no-gm?authuser=0",
      title: "Birthday Cake Topper Design",
      desc: "Created on Dec 5, 2024"
    },
    {
      id: "project3",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNdkZD35StSOJ37GCpOTLMNJG1lmBaiEYxk_XBmk5_9ghyILuFtShQawHXyq0Rl2e7J3jPmi67jNOjRoNwnJKY1Xc6-gxmr24Em8qorwE96NRfWmaQngKCLrK8GDYpZWSnUUsN9kgdoL96wAA7HF08=w1173-h779-s-no-gm?authuser=0",
      title: "Birthday Tarp Design",
      desc: "Created on Mar 21, 2022"
    },
    {
      id: "project2",
      image: "",
      title: "VB. Net Desktop Application",
      desc: "Created on Mar 2, 2022"
    },
    {
      id: "project1",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNJYMdOdkWXdhmTVlFsd53_xj1aSUjqO18yRXFcx6JdDoUr7-Nqia4HYv_wsmduxClfUz8VMWhXBySnxBMJR_FVrjsZTqXnmkdM_WmGyU7Fr99kof5a3XyepRoZymygu_6bEYexTCb4EOM90VnDcAg=w1058-h815-s-no-gm?authuser=0",
      title: "Automated E-Certificate Design",
      desc: "Created on Ma 26, 2021"
    }
  ];
  const defaultLink = "https://www.facebook.com/profile.php?id=61575231713325";
  const projectLinks = {
    project16: "",  //https://github.com/Modern-Cipher/ojt-management.git
    project15: "https://modern-cipher.github.io/services/",
    project14: "",  //https://drive.google.com/file/d/11eFPtCRlAUeUSNEp8-_BXfCivQYRwPT9/view
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
  
    const link = projectLinks[project.id] || defaultLink;
    const isRequest = !projectLinks[project.id];
  
    // Build base HTML first
    card.innerHTML = `
      <div class="project-card-image loading"></div>
      <div class="project-card-info">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.desc}</p>
        <button class="project-card-btn" data-project="${project.id}">${isRequest ? 'Request' : 'View'}</button>
      </div>
    `;
  
    const imgContainer = card.querySelector(".project-card-image");
  
    // ✅ If no image, add outline & label
    if (!project.image) {
      imgContainer.classList.remove("loading"); // remove spinner
      imgContainer.classList.add("no-image-outline");
      imgContainer.innerHTML = `<span class="no-image-text">No Image</span>`;
    } else {
      const img = new Image();
      img.src = project.image;
      img.alt = project.title;
  
      img.onload = () => {
        img.classList.add("loaded");
        imgContainer.classList.remove("loading");
      };
  
      img.onerror = () => {
        imgContainer.classList.remove("loading");
        imgContainer.classList.add("no-image-outline");
        imgContainer.innerHTML = `<span class="no-image-text">No Image</span>`;
      };
  
      imgContainer.appendChild(img);
    }
  
    projectList.appendChild(card);
  });
  

  document.querySelectorAll(".project-card-btn").forEach(button => {
    const projectId = button.getAttribute("data-project");
    const link = projectLinks[projectId] || "https://www.facebook.com/profile.php?id=61575231713325";

    button.addEventListener("click", () => {
      window.open(link, "_blank");
    });
  });
});
