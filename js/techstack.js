document.addEventListener("DOMContentLoaded", () => {
  const techIcons = [
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNkZRXTYQsbowoqL6vUY4FRwMvQjHkMpKc9TizRtQLtktucxhurRElSwxiJkT4PLUyL656WTB5_h2Lnh4mQqVSoGfQnKW_cXFLHcYKgPVOU2hH2vJgznRgmjvuBaqsFDKa2CWZcgWPrbD-FmKayxGlE=w128-h128-s-no-gm?authuser=0", label: "HTML" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNR2GoCAdxOlPE2OmkI3qTEylllOOs2uHyEKlemocRWsPy4UY-x_6Z61bg6qBkR0eIZjsSpHW0gqILDsp9R5cf7Ztx2HFIZXrp3ZK9b7gLYjio5RlkNYDND7tSYjXs-pTnf__pDWBOPCwT0Ff3VPm1Y=w128-h128-s-no-gm?authuser=0", label: "CSS" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNw_-PlNaRBEe4y7PuCHaHa8C_voWTNCQ_gSrwAcq0GL1UwMxdaK8mDOsTRz5ehJUAvD-294XZ8vPo__xBVdn-cj4mOVLKmtYJQK6Yg2DQkEz9OLvfc3vdjkUoeRyDGWfuHKSaZdBq8nNR0qAjepNR6=w128-h128-s-no-gm?authuser=0", label: "JavaScript" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczOwZ2L4gcy4jfticuz15HcnMxSb9MEVThFgDC-aTNP6vzqIT0imj_0mCXyIA-d3Qoe323gTYUmTi86DqVny8A28Rcc1tYeikTNOsOhC2Gn0RIIJPg6B_-rP021knLimQwhoE2r2u_RVMw0IM7aKNN7O=w128-h128-s-no-gm?authuser=0", label: "PHP" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNvTfmOyhHjZ0poS_mAJlEt5xfIKexNNRalSjOtCW4PFv-FqygeRpcScT85Aa1rZffEwXW47l68act5I5Vc2HI1H3-2J-41gZT8z5TqtJ4yFpETFJxUgON2Khg-0ZuxNVDGQE9IdSNPzcH_jl2k68Zc=w1280-h872-s-no-gm?authuser=0", label: "MySQL" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNbFNeqAWRaW0hBln6PK1bY1GuixviWVB_-VqtVpnELGElj4fi8ei0Wu1qLpJAuDAiTXZ5WBFicAAA8NJlPnfkGAe5ZNnCd9Sv7YP9fh_l14QLlJa7KWa9dHCGNxtcnNRoeXP6ltR1RghdiS6ueEjBF=w128-h128-s-no-gm?authuser=0", label: "Python" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczOEK_IJrbP0weKj9u0m0v-MJw1gvDIycsC6ta1QPosTC0LaMBVf3tVkGlzl1uU5AbozIST05WJOVuqUr7llHHdVnnhFsZ34-TMgAOSyBDDUpG-6rroix7CJPdR9qVN759fpFeIWwhWdY-NWgTVn_kHJ=w128-h128-s-no-gm?authuser=0", label: "Java" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczM9Thq012CG3DEUm9iySlWLIQg-oyNgXMcODWqpJ8jqLzEGB77bZp1kCOnOhAshCGVGlQRV2AxDN6zA3fFqznXYKl2HjK1A5R7eULnD2xH6p2KWVeCI-XEilVYHGFGnOehR2Ym31VRFbksYyMql4ohi=w1200-h957-s-no-gm?authuser=0", label: "Bootstrap" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNLkUnIJ7n0iZwFRhvvGJZ-H6UIBD51LUJbg9pgCcflT9btO0KIoJ2s2POgT4uVzGNRiNSFuwZ81kgrmS7tluh7vkZj7obKhQohv5AqJOuvHXZJ8WdvhGnShslyBDizPWgalwbV9RhvytYIZPDPZKxI=w2372-h1142-s-no-gm?authuser=0", label: "Ajax" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczO7Dg7xzEX48-DzCkb1qoeF8kP59hAo-ATQWD_RxeHbjGIHjrM50SG_xgaRNKlqBZljjp1Apz02ksuUKY8c90BtlX_gsu_LQwdMf2Lekzce5s4mSCd5Ggyz8-Oy0eTCrcQmwf1irHewoxBQKj1FhLxy=w1387-h1266-s-no-gm?authuser=0", label: "jQuery" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczP7XVYPZf48HIi7TNFIqV1PDndvpRNmfhO-DEd985acGFIqF_zrKwzDOURllRmxBNs8uHf-T-HF52lM2LegOPThSu_vwPFWsRZxjjHBp0a_MzMjRDfwHujzspTd01fHKFog81DGhkGf17fz0ZbLNTqr=w1266-h1266-s-no-gm?authuser=0", label: "Git" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNQFN35okROITSNjAHxUX481vQhryL2m2OsT1QsJdVxxcH-ONd12s_X2h5QNOaei2L568MRr1fboPWAq8Ma32E888c0KudUimVotyi9A-EDP9u8VYblcYfBWPvRM0d8TUZhiMmHn7XNqA03Tx1ac4PW=w300-h356-s-no-gm?authuser=0", label: "Composer" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczP8VjHtyiBp-e5pvXr0gtgXqV3y6RcxKYwxA4GQG69JremYeANZ-uweKQE7zDh4GfXXxIAwJYkxvSQnb7De6_vvAhiCBL5LEgjpuM9Xf2_8snscx-zFS1MeZC1oj7kQWY0u-dkmBVf6ZXMvXvvKRiWE=w512-h512-s-no-gm?authuser=0", label: "GitHub" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczMpNMDPK_DatMabYzTSwEWcec4fW1nTm4chH_TgJWeTClfUEEb6U2qgyXbnuxMGUYiKWv4d1GPU7zthDt2uIVUBG4gReKSCiCMWjHGWdUXkeX_Y4OncqIXd7vD64FSXG_O7CXBfuMl4_kvj-ffOYjFO=w1224-h1266-s-no-gm?authuser=0", label: "Laravel" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNe2ey7XJp0slZUF2I2tX19rnXAmw2uAq1YC9ax_JnQl_M20Js9ZmqrGQppyL0F0ROzV7s_7OeDk8p1bnYfagjpW1pBnG5MGUE8Rd7NNpXvmgpFk9vOrtCIyHm8ban8gYj8AiWil6IsA2efFy9EpXzy=w147-h174-s-no-gm?authuser=0", label: "CodeIgniter" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczMxlZPuOoZGv6JCx-11Z-9yhJiv9u0nf3ZNWbJ7NvBxDuwbqNTyh6OMsAYHdrpjDPqClaKT0gQ6UzwvL_TG9hCLXxKMhh8AoWhMOaLfzy8chOD133lmvrz5CsK2biIBDOydlt6q874K2El85cZhub0G=w128-h128-s-no-gm?authuser=0", label: "WordPress" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczM22p3bnzpha517xkNaMUxotumONikQCdcLol45ZJXKFXk8S32At13YzVLl9ScmedNia4HF6M9BkLxIumtSn0DnvF4tuD0tmyMXRp1UmkDFZITRo65-W-B95A3e5NHRNGzBLPB-uvW8a1QMAdTpCkOA=w320-h320-s-no-gm?authuser=0", label: "Flutter" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczO9vBJQ5emCw2RTqiRltyqZg26J37bay2YAmaAJqIDog0x57n7UKxLyoXnQrViNdYgpjbQyIoCY4z_EPe74_TTauYddS99D6wq-le_hSrIAcRwvGdKRrGy1bVqF6qxvoSgjrprmMVu1TzMvtsNYaSI2=w1080-h1080-s-no-gm?authuser=0", label: "Dart" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczOFORJB0YgzdZg3dDxVVReRZhUzMEGxpXZLT57fctakas9dhVT2VnzaVM9LAuYPoaesiA64Jlfn6akQpN-qGeO5nwe5l-YeIDBcDGtsO9pdE-S-BBEGIoqaPU7jt66LZq0Oz95vVc76BT5ahSTemfO4=w180-h180-s-no-gm?authuser=0", label: "Firebase" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNiJropVcUPx27-KqtCWQO0i6-EQhuD09E8GE-kQUuHekhSY1Zy5VXtlq5L3Oe3bouSOjIIreUfndlzrgNsNZFeqSGfdi4KsPwpEMeSVgUjG-OemrijAQYRR5v830mhJeuqMt7np5rpI5sZT4a3zm7O=w1024-h1024-s-no-gm?authuser=0", label: "Appscript" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPq6lAdUJ8UlHz0z6YV4mH8-F18a7bS-N_Xw1Xq7JFn2qWZ_Ptr8kf_qlx9wmyf9gfL4aiCpl7WUGt0cufg91qjuackWtfz3Re2uaQsxbuWhK8Qc0czQF_ZdVAMjVSdz6xqmSnlp5iZ2M-ii-xiqqoa=w1125-h1266-s-no-gm?authuser=0", label: "C++" }
  ];

  const toolsIcons = [
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPWEGDuImoz1YcfNGlVM6-hhpnMsTezYOZCE3cH68Ijcnc20AF2nhSKNqFWq4z4l9zZkpEAFO72xvg723YO-W9FHay-EbjPMnkN8fbjxInNoPcQrPpMJrtNN9LfTVfOQ8YIHq0X0lWrMQA73rKjVLPl=w512-h512-s-no-gm?authuser=0", label: "VS Code" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPVO1wrQUq1KtTSfKcDoHYnuU0Q6QTJ1Gxi_gqyTHpF7SB0xEZ9f93llUuMf04SAqnyDFffBuEnYfx9wQL8EJEKyXFei7rZJ4gHIGRuFRC7wF3k9asHS7PV7xUAdMNHHC845uwZB3Dhi5AuPwO_oK6p=w1098-h1266-s-no-gm?authuser=0", label: "NetBeans" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPO7nGgzLZXfbupVRIgd5AHsljRK7JS1nZor5dtE4VmImFVv7EAyXrV1SMD4PZvUAQH8EcgOsJiMfJ_7UqwaSGBoN9IyrZfJ4lSd0qkaLUGJoRZZ_5SG85LXJKB-B2gqjU5qsrwu5b_aNfsZ-YD3FYc=w1266-h1266-s-no-gm?authuser=0", label: "Pycharm" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPyPpUvxynolAe-jG_H6RMh2S2c6qHNzQyQLzrDjIziZI9_vCjJvkueDjHn3nHqhoreS7BFmjPVlfUW5OvGgYUl9OO4WyQPIXcsFl3BQ23moC9Ce5qiFQ33Mb8zTSeklj8vyaU6WcvGCfRBTAbf3XLB=w1024-h1024-s-no-gm?authuser=0", label: "Android Studio" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPKy1NovvSwMv_iv_gOZRBxvru9RAMohuuKPVI-X3xbBp9A0fzYJ3mRscjnnC9B1b78t1eya5chbT2STJphEVU5XycyjYyBE5b_wMKRiKtY7JoP_7HZ1WyBSVMx45GohZuD7VDxCVrlPNmf2t9QxKQV=w1024-h1024-s-no-gm?authuser=0", label: "VB .NET" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczOfYg5L5jq5uddH69H_jU3CZc7alETHptvnKiJg4Y03A8iZsPXMPZQWt-EuXDBv8dxY91lP_cJy_ONOosVYbWsxFPnJ7LKYm5zUA4gLDG9tmDl89AWx2_MzY2eOMcRbgmRLFghNOeLduT162jKqXI_I=w1024-h1034-s-no-gm?authuser=0", label: "XAMPP" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNg_KDqVfKudGyd8FjqulYoDNrh3p9_Xc7-eZl6WFCVA92FyRAGa0o5R9CvcLvaSXfxKse73JcslO7K9sNKfH8zOhn26YzSMkDkBY2yBISUOdhMdGgNIwMeC8XqygBkFt-5J2yXZQAZ2asP5COS_oG3=w1024-h998-s-no-gm?authuser=0", label: "Photoshop" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNiiAPvXAFqwWeFaHXtg4yF0T3mhh7Pj25QhZFubTkHYN3orUl0r0Y7YT7YI6iU4txzAWW4uIACtui30CCIwFocv4j81dwvoFz6rVfuZCOoApjt5tw2Xyjl7PpoRkmPnpF-1Jr5HyBSspmiGvrPcymM=w1024-h999-s-no-gm?authuser=0", label: "Illustrator" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczMsFEtJ7v_KCzsZoOQIwUVPYGclVzSNpD6j2o3Kzz1KY230KtMpbG10BamGyIp30E1mxhEOSHLMusezy7fTwTgSRAEFZAA2HdZmB3H3pyWQYKgXsYKGSvPtTfCUEHHkIP-VLQONN3a1DMKz-gfltPO1=w1024-h999-s-no-gm?authuser=0", label: "Adobe XD" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczM_j-aazDMDL0JSgq--l--fZ8aKb1x333BpXfVrgDHpIY8r-3PEVfQ02xzRttkN2mGceAEVT4QzENnMJMksuPKJfza4Ay0SyftZp4Xy2Qqa0mBtb76YV2T82d60aozFf54JXpP1BbMLN0vYyhfDRxqd=w1024-h999-s-no-gm?authuser=0", label: "InDesign" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNyInFVkWmX03j_DkKMJYQagEht-BEpD3jzTKNUACAt-7UX6I2yM0PYBZfVuhx-RIMEk5hzQJ5esgwJ_Ix2gq0TuMm1uwehJA3oXwazgmw6QIjSoFEpFP-m7zzQDTpwAMde1qmCRu4dfJaGnTqZ3XtB=w1024-h999-s-no-gm?authuser=0", label: "Premiere Pro" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczNU0HHpm4g0AbyOHW-5FOvvUfVC8Jb6Mb4S0_SWqO_Pn9PjZoBWoYHvF96wAPb9E1LeBe7KalhaLwIL39lBBYWP6rAjNp2vOb6O4jvJvwrmtY40JCyirk50fRHCiqPVnm5pcHhqes4Q9JQ5kRtCRv7F=w1024-h998-s-no-gm?authuser=0", label: "Media Encoder" },
    { img: "https://lh3.googleusercontent.com/pw/AP1GczPnNU5XGA3qKxvBMq-YVrp_lRlW6LxlnmjH8J5lEG-aPxftMk4EQ92NI3w6WNndYvk-hCuEUitjUozEBi5AvvbiddBnHmBdRZ4apR5XLrxu99nyIxs3VRsneFMpXaunZZIcjlNcBgJI2XHqGOFuhdbD=w512-h66-s-no-gm?authuser=0", label: "Google Workspace" }
  ];
  const renderIcons = (list, containerId) => {
    const container = document.getElementById(containerId);

    list.forEach(item => {
      const wrapper = document.createElement("div");
      wrapper.className = "tech-icon";

      const spinner = document.createElement("div");
      spinner.className = "spinner";

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.label;

      const label = document.createElement("span");
      label.textContent = item.label;

      // When image successfully loads
      img.addEventListener("load", () => {
        spinner.remove(); // Remove spinner if image loads
        img.classList.add("loaded");
      });

      // When image fails to load
      img.addEventListener("error", () => {
        spinner.remove();
        img.style.display = "none"; // hide image if broken
      });

      // Fallback for cached images (no flicker)
      if (img.complete && img.naturalWidth !== 0) {
        spinner.remove();
        img.classList.add("loaded");
      }

      wrapper.appendChild(spinner);
      wrapper.appendChild(img);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
  };

  renderIcons(techIcons, "tech-icons");
  renderIcons(toolsIcons, "tools-icons");
});