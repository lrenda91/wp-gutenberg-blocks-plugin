const fs = require("fs");
var exec = require('child_process').exec;
var path = require("path");

let directoryName = "blocks";

let dirs = fs.readdirSync(directoryName, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.resolve(path.join(directoryName, dirent.name)));

dirs.forEach((dir) => {
    exec('cd ' + dir + ' && wp-scripts build', function(error, stdout, stderr) {
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.error(stderr);
        }
    });
});

