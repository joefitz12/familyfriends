let app = function(){
    $.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLyFrUcGn-IldniMyfNtQT_LToF03Pev5R&maxResults=50&key=AIzaSyC19r8LuwLnKeMHPEitY8QMFma527ac2pc',function(data){
        console.log(data);
        for (let i = 0; i < data.items.length; i++){
            let videoDiv = $('<div class="video__container">');
            let title = $('<div class="video__title">');
            let thumbnail = $('<div class="video__thumbnail">');
            thumbnail.css('background-image', 'url("' + data.items[i].snippet.thumbnails.high.url + '")');
            title.append($('<h4>' + data.items[i].snippet.title + '</h4>'));
            videoDiv.append(title).append(thumbnail);
            console.log(data.items[i].snippet.title);
            console.log(data.items[i].snippet.resourceId.videoId);
            console.log(data.items[i].snippet.thumbnails.default.url);
            $('.nav__videos').append(videoDiv);
        }
    });
}();