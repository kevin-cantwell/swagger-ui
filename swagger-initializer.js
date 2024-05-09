window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  const urlParams = new URLSearchParams(window.location.search);
  let url = urlParams.get('url')
  if (!url) {
    // default url
    url = "https://petstore.swagger.io/v2/swagger.json";
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
