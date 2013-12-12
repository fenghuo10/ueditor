UE.parse.register('vedio',function(utils){
    var video = this.root.getElementsByTagName('video'),
        audio = this.root.getElementsByTagName('audio');

    document.createElement('video');document.createElement('audio');
    if(video.length || audio.length){
        var sourcePath = utils.removeLastbs(this.rootPath),
            jsurl = sourcePath + '/third-party/video-js/video.dev.js',
            cssurl = sourcePath + '/third-party/video-js/video-js.min.css',
            swfUrl = sourcePath + '/third-party/video-js/video-js.swf';

        utils.loadFile(document,{
            id : "video_css",
            tag : "link",
            rel : "stylesheet",
            type : "text/css",
            href : cssurl
        });
        utils.loadFile(document,{
            id : "video_js",
            src : jsurl,
            tag : "script",
            type : "text/javascript"
        },function(){
//            setTimeout(function(){
//                videojs.options.flash.swf = 'http://vjs.zencdn.net/4.2/video-js.swf';
//                videojs('example_video_1');
//            }, 2000);
        });

    }
});