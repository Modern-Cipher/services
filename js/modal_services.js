document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("service-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSubnote = document.getElementById("modal-subnote"); // 🆕 for subtitle
  const modalList = document.getElementById("modal-list");
  const modalClose = document.getElementById("modal-close");

  const serviceData = {
    "PC & Laptop": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>On-Site Services Available in Select Areas of Pampanga, Bulacan, Nueva Ecija, and Valenzuela City, Metro Manila.</span>
      </div>`,
      "🧹 PC/Laptop Cleanup",
      "🔧 Custom PC Builds",
      "⚙️ Hardware Upgrades",
      "🛠 PC/Laptop Troubleshooting",
      "💾 Software Installation",
      "⌨️ Keyboard Replacement",
      "🔋 Battery Replacement",
      "🔄 OS Updates",
      "🧯 OS Reformat/Reset",
      "🌡️ Overheating Solutions",
      "💨 Fan Cleaning/Replacement",
      "💾 Data Recovery",
      "🛡️ Virus/Malware Removal",
      "🌐 Network/Internet Setup",
      "🔒 Security Hardening",
      "🔄 Driver Updates"
    ],
    "Website Dev": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>Remote Online Services: Accessible Worldwide.</span>
      </div>`,
      "🎓 Capstone Project System",
      "💻 Frontend Web Dev",
      "🔌 Backend Web Dev",
      "🧪 Website Testing",
      "🌐 WebView Apps",
      "🛒 POS Web Apps",
      "📦 Inventory Web Systems",
      "📣 Business Marketing Sites",
      "🛍 Ecommerce Websites",
      "📈 CRM Systems",
      "🧑‍🏫 Teacher Web Platforms",
      "🧑‍🎓 Student Portfolio Sites",
      "🏢 General Business Websites",
      "📊 Data Web Apps",
      "🔒 Secure Web Dev",
      "💬 Chat System Development"
    ],
    "Mobile Dev": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>Remote Online Services: Accessible Worldwide.</span>
      </div>`,
      "📱 Flutter Android App Dev",
      "🎨 Mobile UI Design",
      "✨ Mobile UX Design",
      "📐 Cross-Platform Mobile UI/UX"
    ],
    "Graphics Design": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>Remote Online Services: Accessible Worldwide.</span>
      </div>`,
      "🎨 Logo & Branding",
      "📄 Poster Design",
      "📱 Social Media Graphics",
      "📌 Flyer Design",
      "🖼 Banner Design (Web/Digital)",
      "🎉 Tarpaulin Design",
      "💌 Digital Invitation Design",
      "🎬 YouTube Thumbnails",
      "📘 Facebook Thumbnails",
      "🌐 Website Graphics",
      "💼 Business Card Design",
      "📰 Brochure Design",
      "📚 Book Cover Design",
      "👕 Merch Design",
      "📦 Packaging Design"
    ],
    "Network Management": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>On-Site Services Available in Select Areas of Pampanga, Bulacan, Nueva Ecija, and Valenzuela City, Metro Manila.</span>
      </div>`,
      "🌐 Network Setup & Config",
      "🛠 Network Troubleshooting",
      "🔌 Network Cabling Management",
      "🏢 Shop Network Design & Maintenance",
      "🧑‍💻 Network Admin Support",
      "📶 Wi-Fi Setup & Optimize",
      "📡 Router/Switch Setup & Maintenance",
      "📊 Network Performance Monitoring"
    ],
    "CCTV Camera": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>On-Site Services Available in Select Areas of Pampanga, Bulacan, Nueva Ecija, and Valenzuela City, Metro Manila.</span>
      </div>`,
      "📹 CCTV Installation",
      "🛠️ CCTV Troubleshooting",
      "🔒 CCTV Security Setup",
      "📡 IP Cam Install & Config",
      "💾 DVR/NVR Setup",
      "🖥️ CCTV Monitoring Setup",
      "📱 Remote CCTV Access",
      "🌐 Network CCTV Config",
      "🔧 CCTV Maintenance",
      "💡 Camera Placement",
      "🚨 CCTV Alarm Integration",
      "📊 CCTV Health Check",
      "☁️ Cloud CCTV",
      "📡 Wireless CCTV Install",
      "🌃 Night Vision Setup"
    ],
    "Google Automation": [
      `<div class="service-note">
      <br/>
        <i class="fas fa-info-circle"></i>
        <span>Remote Online Services: Accessible Worldwide.</span>
      </div>`,
        "🤖 Workspace Automation (Apps Script)",
        "⚙️ Sheets Automation (Data, Calc)",
        "📊 Auto Grades & Reports",
        "📧 Auto Email (Workspace)",
        "📄 Docs Automation",
        "🗓️ Calendar Automation",
        "🗂️ Drive Automation",
        "✨ Workflow Auto (Workspace)",
        "🔄 Data Sync Auto",
        "📈 Auto Data Dashboards",
        "✅ Custom Approval Flows",
        "💬 Workspace Chatbots",
        "🔑 Custom Workspace Auto",
        "📝 Forms Automation",
        "📜 Auto e-Certificates (Forms)"
    ]
  };

  // Add click events to all .service-box
 
  document.querySelectorAll(".service-box").forEach(box => {
    box.addEventListener("click", () => {
      const title = box.querySelector(".card-title").textContent.trim();
      modalTitle.textContent = title;
      modalList.innerHTML = "";
      modalSubnote.innerHTML = "";

      const items = [...(serviceData[title] || ["No info available"])];
      if (items.length && items[0].includes("service-note")) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = items[0];
        modalSubnote.appendChild(wrapper.firstElementChild);
        items.shift();
      }

      items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
          window.open("https://www.facebook.com/profile.php?id=61575231713325", "_blank");
        });
        modalList.appendChild(li);
      });

      modal.classList.add("show");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});