document.addEventListener("DOMContentLoaded", () => {
    const services = [
      {
        title: "Computer | Laptop",
        image: "assets/services/computer.png",
        service: "computer"
      },
      {
        title: "Website Dev",
        image: "assets/services/webdev.png",
        service: "webdev"
      },
      {
        title: "Mobile App",
        image: "assets/services/appdev.png",
        service: "appdev"
      },
      {
        title: "Graphics Design",
        image: "assets/services/design.png",
        service: "design"
      },
      {
        title: "Network Management",
        image: "assets/services/network.png",
        service: "network"
      },
      {
        title: "CCTV Setup",
        image: "assets/services/cctv.png",
        service: "cctv"
      },
      {
        title: "Automation",
        image: "assets/services/automation.png",
        service: "automation"
      }
    ];
  
    const servicesList = document.getElementById("services-list");
  
    services.forEach(item => {
      const box = document.createElement("div");
      box.className = "service-box";
      box.setAttribute("data-service", item.service);
      box.innerHTML = `
        <div class="card-image" style="background-image: url('${item.image}')"></div>
        <div class="card-title">${item.title}</div>
      `;
      servicesList.appendChild(box);
    });
  });
  