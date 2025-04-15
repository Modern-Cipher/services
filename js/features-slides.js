document.addEventListener("DOMContentLoaded", function () {
    const slideTrack = document.getElementById("feature-slide-track");
  
    const slides = [
      { img: "https://lh3.googleusercontent.com/pw/AP1GczNttjn1CVTKUGthpvhDurAfGRCh1sJ8reyH4vytUksBEiEIhBHYLKawXmL4DH2G3ii5tM8fQInRYh5_dO-iXC1M-U9VuFWUQvSHTZd3EoafeI7ieFIfbZlu1C3tyrvYK1U0w9Hu5agNZqNZKiHfBPbv=w740-h740-s-no-gm?authuser=0", label: "Fixing Computer" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOdNFOH4CnsDkZCoHkBsRux5rnRCun1ea9nKPYDxv9q_VdfnntZDkbhop0PgGD4ca9BX5Cf8MLbUgmq54bkcRJ1xB3CQeNzd9_8o_fZRW3-rNUaIrXQ5Rz1QtpKHTTOFqcEj9XKfL3__NT3U53G8Zyp=w740-h740-s-no-gm?authuser=0", label: "Laptop Repair" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczPmKZxA9Vh5Rj-kGWKp1Vv15xXRU2GSr3Auxc8wiE38AuDC8_y8qMZ6PcyCHLM8A6Geut25G0LcCHD1_muVqVWCnPyV44--rVEFCAT_NzcPzbdwTBzUO7tU1vaaACS36m8H4-MYHr0k_saPSqtfRngf=w740-h740-s-no-gm?authuser=0", label: "Cleaning PC" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOC0IIgQFP7sTqFWewsmGNQNgpcgXDRwXeIfn0zA6kNGkYMIm3jkhC6CWMRlftplYQ-Vqw5-YqF9Yr-RR_JU9mnlWhuuv8Bi63QTIXaIZp_2MTwV8fVWY2Y_tH7p-rnQeiHI5QgKtQSTbuodNomRSk8=w740-h740-s-no-gm?authuser=0", label: "Install Software" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczMHUobr1CXYp-V66Fd0nByzNPysoX4rQcLN2_OJcL_nVWijh1PJTdW8vyvNUUlIXGKTt-cKSQwcbquyhRj3zlrkIzZ24vKVfCLuMpZJKciiJYGsXpYqf12nXTiK4OSq3v7SodWVJGWYo_GTTYLQ03Ao=w740-h740-s-no-gm?authuser=0", label: "Graphic Design" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczP5hSZFF1h_-JXJ-XQssVpRX11Q7fEKMa2QK3rJH8nl666Eer_MwFCc61qXVSVfjT3ZREeykDuAUFt2XflWHWiQA718aWGE_h5oB5ux3zzzAGWldAJ4rN2vdkG3nIu6Dg65fXS2hUaBfeYgI2uzKaRo=w740-h740-s-no-gm?authuser=0", label: "Marketing Design" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczNSdTPoe7sMGjqVOtGC6qmEFiyL9-AbGGPB102_J2z2UApUWA89axKchelZgohPaMilYaSjcJk4JtuVOOg5-n-O8ulhVczn9_zeFCaqLv9DfsYzxisHctDjWeUFdoDBanpVZ-LrGXIMXDkCjh-NsTlb=w740-h740-s-no-gm?authuser=0", label: "Custom Coding" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczMUGUWci0QfkeEFZPN0hdG3i59X_gcRKv-wFJJqlFt4W_jLJhxTgOK8BYdI8fRkwivfaROJRDr-fDy9TpxKfC0-kZ4ZSm0iP7geJAY2T4Q93Cr3s7BxRNScAh7HZXbY_Pdkfx_Y7Hs1Bx9YGaOs0N9z=w740-h740-s-no-gm?authuser=0", label: "Websites Development" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOZYys5ONOzvQtonGyrbXe0Wk5pLuEjoOO2ewufHQ1HirOHw6Fo5JOqSPPCZeOB2hbft0yQHLUOvG686PXEvv-OHMwcZY-LsW4jxCrYQxHdLxRUELjsnHYBIX_yjwP4aypQIKnafQpAGhzh64htMMPn=w740-h740-s-no-gm?authuser=0", label: "Mobile Wireframes" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczMdTn3AD-TtMm2O0jlcjDtssOHB_QzppanaEPzDekrg67zMbe4RsBIFNnPTbBbzg8nAomf6zfqpLz66GoFXk6lgUXKJiKiTOfy9GUWRasypokxw59Y6LO6V0vQBnss3j8WJQvNNWVb_sVnBGzrLfhxD=w740-h740-s-no-gm?authuser=0", label: "Mobile Development" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOg7QPRvqlPJV7ZK5X5q8khEa7gWa9Gf9st0q683ioN9lQzeNv40MHyJUN0VceAWGkdNZlCJF-RQLDSIgKHGV1TiFEN2SpjYomIpBxwHd3N1gk_stRzypsdYy0u_xMCIedPHC1ItyAovUiXMGpGQqwT=w740-h528-s-no-gm?authuser=0", label: "Automation Appscript" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOF0nnJzjy2DPwgjBNRZKx1VsSOFhMlpvZXA6V4bs3B4JP4N7TKIp5PTFccP1w8OUAY45dD-dFNBkSVzcKEfkfz0_2S2g_LNUQR13Yz6TqyNgLTO6o_MBhKvjQvw-hggv8RSAdQhU7X16kG7tvq8PhC=w740-h528-s-no-gm?authuser=0", label: "Dashboard" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczNLHeBlldxA5aS4Q6MzD0fYtbXLmDkPMpWxvmps6G9cb9xHGOqwt-5Y2vMrThiTfQOAt6dZEySUtY0HnXTFUnen6ywkXtl41t04EdfcCY17PV65uBYV2mmnlFigsZhXbTsGtyHMaefwayZgBYYVefzn=w740-h740-s-no-gm?authuser=0", label: "Network Management" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczOshZHtkTCeg0XrBgM98T31PB7oicfQtvPM7pwZt_upadl0RuPAJGVag4Oy8MW6HaLKijK7Uo5-PS3XXTbyl-DfII6fiByQz9RYarEqkjzcKFgcKupDTYtU40BvJVDo8OIO9ys2y-PUXW9a5pVgAXVN=w740-h740-s-no-gm?authuser=0", label: "Server Configuration" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczNn2176ZmMuCcwD1tFhbGFm6ySLWTCmHgeubKquCMhs_wDLZBgQ4GftX-ZFEnrbAn73yAzRqLR2QYymTTI5SGTBdr9vDAYI2ACAyfvAU0UPQ1x9jgO7jrVbbpGG6iiyMTVCWAXDgu5TW8VnSwwfie-v=w740-h740-s-no-gm?authuser=0", label: "CCTV Setup" },
      { img: "https://lh3.googleusercontent.com/pw/AP1GczNlTwRJN3XXg3kucMwR5jajzOI5Z1KWps25R6_i82u69ZwOL60QRHlH0-cZdepyp4ZK0JYGFK8JQma4m3JZLbwcB3kknOer3RRTE9LANbp0RPfb40ZGZrHuX1V9jMhkUUay4Vnc4Bit771t6RVugJXB=w740-h740-s-no-gm?authuser=0", label: "CCTV Installation" },
    ];
  
    slides.forEach((item) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
  
      slide.innerHTML = `
        <img src="${item.img}" alt="${item.label}" />
        <span class="slide-label">${item.label}</span>
      `;
  
      slideTrack.appendChild(slide);
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const slideTrack = document.querySelector(".slide-track");
  
    if (!slideTrack) return;
  
    const slides = Array.from(slideTrack.children); // Original slides
  
    // ✅ Clone all slides 4x for longer seamless scroll
    for (let i = 0; i < 4; i++) {
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
      });
    }
  });
  