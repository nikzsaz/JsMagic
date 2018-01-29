var express = require('express');
var router = express.Router();

router.get('/friends', function(req, res){
  var data = req.app.get('appData');
  var pageFriends = data.friends;

  res.render('friends', {
    pageTitle: 'Friends',
    friends: pageFriends,
    pageID: 'friends'
  });

});

router.get('/friends/:friendid', function(req, res){
  var dataFile= req.app.get('appData')
  var friend = dataFile.friends[req.params.friendid];
  res.send(`
    <link rel="stylesheet" type="text/css"
    href="/css/style.css">
    <h1>${friend.EmpNo}</h1>
    <h2>${friend.FirstName} ${friend.LastName}</h2>
    <p>${friend.Age} ${friend.Gender} ${friend.Skill} ${friend.Salary}<p>
    <script src="/reload/reload.js"></script>

    `);
});


module.exports = router;
