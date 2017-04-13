module.exports = {
     test: function (req, res, next) {
      
      req.pipa.test = "from middleware";  
      
      next();
    }
}