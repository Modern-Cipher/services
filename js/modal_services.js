document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("service-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalList = document.getElementById("modal-list");
    const modalClose = document.getElementById("modal-close");
  
    const serviceData = {
        "Computer | Laptop": [
          "🧹 Clean up",
          "🔧 Build Computer Set",
          "⚙️ Upgrade Hardware",
          "🛠 Troubleshooting",
          "💾 Installing Software",
          "🖥 Replacing LCD Display",
          "⌨️ Replacing Keyboard",
          "🔋 Replacing Battery",
          "🔄 Update the Operating System",
          "🧯 Reprogram / Reformat"
        ],
        "Website Dev": [
          "💻 Frontend",
          "🔌 Backend",
          "🧪 Testing",
          "📚 Capstone Project System",
          "🌐 WebView App",
          "🛒 Point of Sales (POS)",
          "📦 Inventory Management",
          "📣 Marketing Websites",
          "🛍 Ecommerce",
          "📈 CRM"
        ],
        "Mobile App": [
          "📱 App Build",
          "🔗 API Integration",
          "📤 Deployment"
        ],
        "Graphics Design": [
          "🎨 Logo Design",
          "📄 Posters",
          "📱 Social Media",
          "📌 Flyers",
          "🖼 Banner",
          "🎉 Tarpaulin",
          "💌 Invitation",
          "🎬 YouTube Thumbnail",
          "📘 Facebook Thumbnail"
        ],
        "Network Management": [
          "🌐 Setup",
          "🛠 Troubleshoot",
          "🔒 Security",
          "🔌 Cabling Management",
          "💻 Computer Shop Network Management",
          "🧑‍💻 Network Administrator"
        ],
        "CCTV Setup": [
          "📹 Installation",
          "📶 Configuration",
          "🔍 Monitoring"
        ],
        "Automation": [
          "🤖 Workflow",
          "📂 Scripting",
          "⚙️ Triggers"
        ]
      };
      
  
    // Add click events to all .service-box
    document.querySelectorAll(".service-box").forEach(box => {
      box.addEventListener("click", () => {
        const title = box.querySelector(".card-title").textContent.trim();
  
        // update title
        modalTitle.textContent = title;
  
        // clear previous items
        modalList.innerHTML = "";
  
        // Add list items for the clicked service
        (serviceData[title] || ["No info available"]).forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          modalList.appendChild(li);
        });
  
        // Show modal
        modal.classList.add("show");
      });
    });
  
    // Close modal on close button
    modalClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  
    // Also close modal if background is clicked
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
  
