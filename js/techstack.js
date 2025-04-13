document.addEventListener("DOMContentLoaded", () => {
    const techIcons = [
      { img: "html.png", label: "HTML" },
      { img: "css.png", label: "CSS" },
      { img: "javascript.png", label: "Javascript" },
      { img: "php.png", label: "PHP" },
      { img: "mysql.png", label: "MySQL" },
      { img: "python.png", label: "Python" },
      { img: "java.png", label: "Java" },
      { img: "bootstrap.png", label: "Bootstrap" },
      { img: "ajax.png", label: "Ajax" },
      { img: "jquery.png", label: "JQuery" },
      { img: "git.png", label: "Git" },
      { img: "composer.png", label: "Composer" },
      { img: "github.png", label: "Github" },
      { img: "laravel.png", label: "Laravel" },
      { img: "codeigniter.png", label: "Codeigniter" },
      { img: "wordpress.png", label: "WordPress" },
      { img: "flutter.png", label: "Flutter" },
      { img: "dart.png", label: "Dart" },
      { img: "firebase.png", label: "Firebase" },
      { img: "appscript.png", label: "Appscript" },
      { img: "c++.png", label: "C++" }
    ];
  
    const toolsIcons = [
      { img: "vs_code.png", label: "VS Code" },
      { img: "netbeans.png", label: "Netbeans" },
      { img: "pycharm.png", label: "Pycharm" },
      { img: "android_studio.png", label: "Android Studio" },
      { img: "visual_basic_net.png", label: "VB .NET" },
      { img: "xampp.png", label: "Xampp" },
      { img: "adobe_photoshop.png", label: "Photoshop" },
      { img: "adobe_illustrator.png", label: "Illustrator" },
      { img: "adobe_xd.png", label: "XD" },
      { img: "adobe_indesign.png", label: "Indesign" },
      { img: "adobe_premiere_pro.png", label: "Premiere" },
      { img: "adobe_media.png", label: "Media Encoder" },
      { img: "google_workspace.png", label: "Google Workspace" } 
    ];
  
    const renderIcons = (list, containerId, basePath) => {
      const container = document.getElementById(containerId);
      list.forEach(item => {
        const wrapper = document.createElement("div");
        wrapper.className = "tech-icon";
        wrapper.innerHTML = `
          <img src="${basePath + item.img}" alt="${item.label}" />
          <span>${item.label}</span>
        `;
        container.appendChild(wrapper);
      });
    };
  
    renderIcons(techIcons, "tech-icons", "assets/icons/");
    renderIcons(toolsIcons, "tools-icons", "assets/icons/");
  });
  