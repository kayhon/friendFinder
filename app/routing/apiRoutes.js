var path = require('path');
var friends = require('../data/friends.js');
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 500;

        
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var k = 0; k < userResponses.length; k++) {
                diff += Math.abs(friends[i].scores[k] - userResponses[k]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(userInput);
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
    });
};
