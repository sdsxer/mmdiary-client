/**
 * @author leon
 */

const configs = {
  debug: true,
  mockData: true,
  apiServerDev: "http://127.0.0.1:8000/mmdiary/api",
  apiServerProd: "http://123.10.145.36:8000/mmdiary/api",
};

let Settings = {

  debug: function() {
    return configs.debug; 
  },

  mockData: function() {
    return configs.mockData;
  },

  apiServer: function() {
    return configs.debug ? apiServerDev : apiServerProd;
  }

};

export default Settings;

