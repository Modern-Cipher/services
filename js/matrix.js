document.addEventListener("DOMContentLoaded", () => {
    const matrixContainer = document.createElement("div");
    matrixContainer.className = "matrix-bg";
    document.body.appendChild(matrixContainer);
  
    const texts = [
      "MODERN",
      "CIPHER",
      "MODERN CIPHER 2025",
      "DEVELOPER: MENARD DELA CRUZ",
      "COMPUTER",
      "LAPTOP",
      "WEBSITE",
      "MOBILE",
      "APP",
      "GRAPHICS",
      "DESIGN",
      "NETWORK",
      "MANAGEMENT",
      "CCTV",
      "AUTOMATION",
      "TECH SUPPORT",
      "SOFTWARE INSTALLATION",
      "TROUBLESHOOTING",
      "SYSTEM UPGRADE",
      "VIRUS REMOVAL",
      "DATA BACKUP",
      "DATA RECOVERY",
      "DATABASE",
      "SERVER SETUP",
      "WEB HOSTING",
      "API INTEGRATION",
      "UI/UX DESIGN",
      "SEO SERVICES",
      "E-COMMERCE",
      "IT CONSULTING"
    ];
  
    const spawnRate = 2000; // ⏱️ Faster spawn but optimized
    const maxLines = 8;    // 🔁 More lines without lag
    const maxColumns = [];  // Track active columns
  
    function spawnLine() {
      if (maxColumns.length >= maxLines) return; // Prevent more than allowed
  
      const text = texts[Math.floor(Math.random() * texts.length)].toUpperCase();
  
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${Math.random() * 95}%`;
  
      const duration = 18 + Math.random() * 8;
      column.style.animation = `fall-matrix ${duration}s ease-in-out forwards`;
  
      text.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "matrix-char";
        column.appendChild(span);
      });
  
      matrixContainer.appendChild(column);
      maxColumns.push(column);
  
      // Smooth fade-out & cleanup
      setTimeout(() => {
        column.style.transition = "opacity 2.5s ease-in-out";
        column.style.opacity = "0";
        setTimeout(() => {
          matrixContainer.removeChild(column);
          const index = maxColumns.indexOf(column);
          if (index > -1) maxColumns.splice(index, 1);
        }, 2500);
      }, duration * 1000);
    }
  
    // 🔁 Controlled start
    for (let i = 0; i < maxLines; i++) {
      setTimeout(spawnLine, i * 300);
    }
  
    // 🔁 Efficient continuous loop
    setInterval(spawnLine, spawnRate);
  });
  