app.factory("CiModel", function($http) {

  function getFieldsParams(config) {
    if (!config.server_url || !config.project) return "";

    var input = {
      server_url: config.server_url,
      project: config.project
    };

    return _.map(input, function(value, key) {
      return "fields[" + key + "]=" + encodeURIComponent(value);
    }).join("&");
  }

  function getParams(config) {
    return { source: config.source };
  }

  function getData(config) {
    return $http.get("/api/ci?" + getFieldsParams(config), { params: getParams(config) });
  }

  return {
    getData: getData
  };
});
