var fs = require("fs");

var createStream = fs.createWriteStream("JournalDEV.txt");
createStream.end();