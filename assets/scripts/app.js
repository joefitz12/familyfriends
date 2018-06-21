let app = function(){
    $.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLyFrUcGn-IldniMyfNtQT_LToF03Pev5R&maxResults=50&key=AIzaSyC19r8LuwLnKeMHPEitY8QMFma527ac2pc',function(data){
        console.log(data);
        for (let i = 0; i < data.items.length; i++){

            let videoDiv = $('<div class="video__container">');
            let title = $('<div class="video__title">');
            let thumbnail = $('<div class="video__thumbnail">');

            if (data.items[i].snippet.thumbnails.maxres){
                thumbnail.css('background-image', 'url("' + data.items[i].snippet.thumbnails.maxres.url + '")');
            }
            else {
                thumbnail.css('background-image', 'url("' + data.items[i].snippet.thumbnails.high.url + '")');
            }
            title.append($('<h5>' + data.items[i].snippet.title + '</h5>'));
            videoDiv.append(title).append(thumbnail).attr('data-vid-title', data.items[i].snippet.title).attr('data-id',data.items[i].snippet.resourceId.videoId);
            // console.log(data.items[i].snippet.title);
            // console.log(data.items[i].snippet.resourceId.videoId);
            // console.log(data.items[i].snippet.thumbnails.default.url);
            $('.nav__videos').append(videoDiv);
        }
    });

    $('.nav').on('click', '.video__container', function(){
        // Put play function here
        if($('#youtube-video').length > 0 && $(this).data('id') !== $('#youtube-video').data('video-id')){
            $('#youtube-video').remove();
            let videoId = $(this).data('id');
            let youtube = $('<iframe id="youtube-video" data-video-id=' + videoId +' width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
            $('.main__title').empty();
            $('.main__title').append(youtube);
        }
        else if($('#youtube-video').length > 0 && $(this).data('id') === $('#youtube-video').data('video-id')){
            console.log('2');
            $('.main__title').empty();
            $('.main__title').html('<h1>Family Friends</h1>');
        }
        else {
            let videoId = $(this).data('id');
            let youtube = $('<iframe id="youtube-video" data-video-id=' + videoId +' width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
            $('.main__title').empty();
            $('.main__title').append(youtube);
        }
        
    });

    // $('.nav').keyup(function(){
    //     // Put filter function here

    //     var input, filter, navbar, li, a, i;
    //     input = document.getElementById('search');
    //     filter = input.value.toLowerCase();
    //     navbar = document.getElementById('nav');
    //     // console.log(navbar.getElementsByClassName);
    //     li = navbar.getElementsByClassName('video__container');

    //     // Loop through all list items, and hide those who don't match the search query
    //     for (i = 0; i < li.length; i++) {
    //         let title = li[i].getElementsByClassName('video__title')[0].innerHTML;
    //         console.log(title)
    //         a = li[i].getElementsByClassName(".video__title")[0];
    //         if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // });

}();