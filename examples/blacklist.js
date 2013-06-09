/**
 * Auto boot people that are on a blacklist.
 */

var Bot    = require('ttapi');
var AUTH   = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var USERID = 'xxxxxxxxxxxxxxxxxxxxxxxx';
var ROOMID = 'xxxxxxxxxxxxxxxxxxxxxxxx';

var bot = new Bot(AUTH, USERID, ROOMID);

// Define global variable "blackList" as an array of USERIDs
var blackList = ['xxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxx'];

// When someone enters the room, the bot checks whether or not that user is on blacklist.
bot.on('registered', function (data) {
  var user = data.user[0];
  if (blacklist.indexOf(user.userid) != -1) {
    bot.bootUser(user.userid, 'You are on the blacklist.'
  }
});
