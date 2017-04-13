module.exports = {
    getProfile: function (req, res, next) {
        res.status(200).json({ code: 200, status: 'success', data:  req.pipa.test});
    },
    hallo: function (req, res, next) {
        res.status(200).json({ code: 200, status: 'success', data:  'halo'});
    },
    subroute: function (req, res, next) {
        res.status(200).json({ code: 200, status: 'success', data:  'subroute'});
    }
}