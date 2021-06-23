const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "",
    proxy({
      target: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://figma.com.com",
      changeOrigin: true
    })
  );
};