var http = require('http'),
	fs = require('fs');
	
var dlName = '',
	fileName = '',
	i = 1,
	errFiles = [];

var timer = setInterval(function(){
	if(i >= 167){
		clearInterval(timer);
		return false;
	}
	dlName = (i<100 ? '0' : '') + (i<10 ? '0' : '') + i;
	fileName = (i<10 ? '0' : '') + i;
	downLoad(dlName, fileName);
	++i;
}, 100);

function downLoad(srcName, fileName){
	var type = '.png',
		sn = srcName,
		fn = fileName,
		fl = fs.createWriteStream(fn + type);
	http.get('http://res.mail.qq.com/zh_CN/images/mo/EMOJI/' + sn + type, function(res){
		res.on('data', function(data){
			fl.write(data);
		}).on('end', function(){
			fl.end();
			console.log('success: ', fn + type);
		});
	}).on('error', function(e){
		console.log('ERROR: ', fn + type, e);
		console.log('reLoad: ', fn + type);
		downLoad(sn, fn);
	});
}