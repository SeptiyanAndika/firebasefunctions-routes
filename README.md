# firebasefunctions-routes
Simple boilerplate firebase functions, with config routes. logic in folder functions/controllers

# Example
routes.js:

  let routes = {
    'get /middleware': ['middleware.test','user.getProfile'],
    'get /halo': ['user.hallo'],
    'get /halo/subroute': ['user.subroute'],
  }

  module.exports = routes

