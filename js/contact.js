document.addEventListener("DOMContentLoaded", () => {
  const contacts = [
    {
      icon: "https://lh3.googleusercontent.com/pw/AP1GczOpkoUqa3LEa8fblLzZUNEeFodezP30aQ86ynbEiQ40piKgTZ8V5bPBb1X7doNjy4TWrdh_u91GNgC091BxBY6WPr9VciJVBI_r85YuA3iLIkqh_mC0-fpCma1M8NbtCFiLY0ub5IIkaAQFqZFncaFe=w128-h128-s-no-gm?authuser=0",
      label: "FACEBOOK",
      actionText: "Visit",
      action: () => {
        window.open('https://www.facebook.com/profile.php?id=61575231713325', '_blank');
      }
    },
    {
      icon: "https://lh3.googleusercontent.com/pw/AP1GczPYt5IdKZwuJIKB-ZDIEBzkHPfnbzHVkOuImz2ewUQDaLBaPVvVSTtNOXS7PvnUhdzPjZlAIkHmGhUxXds0FcHsSJTkPRvRte_xUtNlVun5B_PM85Tp-sR0t_aLkP1WGtmO0mmwbX4aFr5O5YA_d5lV=w128-h128-s-no-gm?authuser=0",
      label: "MESSENGER",
      actionText: "Chat",
      action: () => {
        window.open('https://m.me/654888081030637', '_blank');
      }
    },
    {
      icon: "https://lh3.googleusercontent.com/pw/AP1GczMnA-Vey-pPNqph3ZuPLcowZ9sUPQBpRha5OFfqXwWlTpnfjPGq61Hcg5fVRLHlsRVEMgcQuZRNR8hALMpNaYnJ2MKEYlVYJvxfDLDO1laPDOqe0tWBCs1Y5n61op-lrA4IMjlkaKFxC8uOP0Mp5kUr=w128-h128-s-no-gm?authuser=0",
      label: "GMAIL",
      actionText: "Mail",
      action: () => {
        const subject = encodeURIComponent("New Client Inquiry - Select Services Below");
        const body = encodeURIComponent(`Services you want to avail:\n\nFullname:\nContact No (Optional):\nAddress:`);
        window.location.href = `mailto:mdctechservices@gmail.com?subject=${subject}&body=${body}`;
      }
    }
  ];

  const container = document.getElementById("contact-options");

  contacts.forEach(contact => {
    const div = document.createElement("div");
    div.className = "contact-item";

    div.innerHTML = `
      <img src="${contact.icon}" alt="${contact.label}" class="contact-icon" />
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
