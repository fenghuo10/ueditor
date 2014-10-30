var fs = require('fs');

fs.readdir(__dirname, function(err, files){
	console.log(files);
});

var len = 135,
	fill = '',
	oldPath, newPath,
	timer = setInterval(function(){
		if(!len){
			clearInterval(timer);
			return false;
		}
		--len;
		if(len < 10){
			fill = '0';
		}
		oldPath = __dirname + '\\' + fill + len + '.gif';
		if(len === 9){
			fill = '';
		}
		newPath = __dirname + '\\' + fill + (len + 1) + '.gif';
		if(fs.existsSync(newPath)){
			++len;
			return false;
		}
		if(fs.existsSync(oldPath)){
			fs.rename(oldPath, newPath, function(err){
				if(err){
					console.log(err);
				}
			});
			console.log(newPath);
		}
	}, 10);
