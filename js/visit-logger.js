// ✅ Visit Logger - Logs IP, user agent, and page path to Google Sheet via Apps Script

(async function logVisitor() {
    try {
      const ipData = await fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .catch(() => ({ ip: "Unavailable" }));
  
      const visitPayload = {
        ip: ipData.ip,
        userAgent: navigator.userAgent,
        page: window.location.pathname
      };
  
      await fetch("https://script.google.com/macros/s/AKfycbx0eZRySn5Uex6eWP1Qc_wHhaiA1tj1eob0CS92nYkcbX1lVrznIz01kShUL42vt2VwEA/exec", {
        method: "POST",
        mode: "no-cors", // Required to bypass CORS for Apps Script
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(visitPayload)
      });
  
      // Optional: console.log for dev
      console.log("Visit logged:", visitPayload);
  
    } catch (err) {
      console.warn("Visit logging failed:", err);
    }
  })();
  