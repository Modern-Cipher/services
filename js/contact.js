document.addEventListener("DOMContentLoaded", () => {
    const contacts = [
      {
        icon: "facebook.png",
        label: "FACEBOOK",
        actionText: "Visit",
        action: () => {
          window.open('https://www.facebook.com/profile.php?id=61575231713325', '_blank');
        }
      },
      {
        icon: "messenger.png",
        label: "MESSENGER",
        actionText: "Chat",
        action: () => {
          window.open('https://m.me/654888081030637', '_blank');
        }
      },
      {
        icon: "gmail.png",
        label: "GMAIL",
        actionText: "Mail",
        action: () => {
          const subject = encodeURIComponent("New Client Inquiry - Select Services Below");
          const body = encodeURIComponent(
            `Services you want to avail:\n\nFullname:\nContact No (Optional):\nAddress:`
          );
          window.location.href = `mailto:mdctechservices@gmail.com?subject=${subject}&body=${body}`;
        }
      }
    ];
  
    const container = document.getElementById("contact-options");
  
    contacts.forEach(contact => {
      const div = document.createElement("div");
      div.className = "contact-item";
  
      div.innerHTML = `
        <img src="assets/icons/${contact.icon}" alt="${contact.label}" class="contact-icon" />
        <span class="contact-label"><small>${contact.label}</small></span>
      `;
  
      const btn = document.createElement("button");
      btn.className = "contact-btn";
      btn.textContent = contact.actionText;
      btn.onclick = contact.action;
  
      div.appendChild(btn);
      container.appendChild(div);
    });
  });
  