let routes = {
  'get /middleware': ['middleware.test','user.getProfile'],
  'get /halo': ['user.hallo'],
  'get /halo/subroute': ['user.subroute'],
}

module.exports = routes