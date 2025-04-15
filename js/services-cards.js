document.addEventListener("DOMContentLoaded", () => {
    const services = [
      {
        title: "Computer | Laptop",
        image: "https://lh3.googleusercontent.com/pw/AP1GczP9cS0IkZkRQ6ELyly685O5-EUzrtuKa4GKX-iaBbNUfh9w9Ai-EhcqJQDPrTpWGfnPnjkOVX_GYke2z485ADxpw0pas_FIK7MA0X83F1e9al9uVazpelKviIJdmkQVN5padp6rlaNUJK34ylehvhE=w740-h740-s-no-gm?authuser=0",
        service: "computer"
      },
      {
        title: "Website Dev",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNpvYMmVV0xluO1f-QJlMoRMn7Yo-_aI0z7WSonI9ngxOFk_jEDa2wV25XeFxI1W9zeIiefVkkca2iXWsNQ8GeIXQSWKwvwNwErLW2pETnYrqyK2QjxsyG9YOLb-2-rnOBZNu5iyqYNYlBDq7dpDiWv=w996-h664-s-no-gm?authuser=0",
        service: "webdev"
      },
      {
        title: "Mobile App",
        image: "https://lh3.googleusercontent.com/pw/AP1GczOPb2h5DTUA6wojpKoyPW9_5geKV_xjDU1_oKbrKiRjHdqfG5hBsAGtQTJ6nidNSytPP7fjobDVrFEgvblF2zIffoRzLQ24s12QWoilpSztjYfE-22Gfq8gnRBsCCnfhGyYAqe8JCAU-UpV9KD8TO_C=w996-h664-s-no-gm?authuser=0",
        service: "appdev"
      },
      {
        title: "Graphics Design",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNNgMvyDMXOhQNV7MNZNlU_pJsW-1NsoC399f7apRGXjWS3-Lk_5V91kekOZ-PG8dJkF8iroLMuFU89jXgdh05Q79Oxt2nTOKSrpIfH-3O-GvEq_nf1ETtspS_6XpRjdnXoVaR0f7adOiHcW0XwBYUA=w996-h664-s-no-gm?authuser=0",
        service: "design"
      },
      {
        title: "Network Management",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNeuchPfS5QlNtMdp9Q1TBjj6yhM1hJIJoCEqpM6paPdiTKvhjWNQEMoeCe7A-qc0QappZxvPKZM-Yov7acSVs2pRPBlZI0i4kcTN_muVUy6NaaJhnAV7OmWXTEMGf9pEnEGY0WEMTETWzxPL8vumU2=w740-h740-s-no-gm?authuser=0",
        service: "network"
      },
      {
        title: "CCTV Setup",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNRJURd9YY5ZaZF_Rxk-HVi8s9IqeyU3368s1foHLPmQCsx02ojmBjHcbqDRl_USKXY9EywNKlUZW9wpJL8l8pZ4Cjhp4XPebE_dUb61FfrtpLNsc_oK6EIwsP93vjWD5qjjzOxyixRSJqHdj1akBHd=w740-h605-s-no-gm?authuser=0",
        service: "cctv"
      },
      {
        title: "Automation",
        image: "https://lh3.googleusercontent.com/pw/AP1GczPK0E5E16L59SRY4Q0iRk5VqvexgMAVmYrRM9CitPUb4HQzrLNE6Oacwlg4VlBd2DxVxEuXnmqW8v_lHJm4YJf7u3Z8tzoM8pjmzYUGnK4qtm_IyErWK14yZQeck5LLt2NqrBQ9VHTWKo_WU59I1xwA=w740-h740-s-no-gm?authuser=0",
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
  