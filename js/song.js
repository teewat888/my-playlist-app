(function (selectPlayList, document, window) {

    const currentMood = sessionStorage.getItem("mood");
    const songId = sessionStorage.getItem("songId");
    const mainContent = document.querySelector(".main-content");

    const renderSongPage = function(currentMood, songId) {
        const song = selectPlayList(currentMood).find(song => song.id === songId);

        if (!song) {
            renderEmpty();
            return;
        }

        let img = document.createElement("img");
        img.className = "img-fluid title-image";
        img.src = song.image;

        let h5 = document.createElement("h5");
        h5.innerText = song.artist;

        let songName = document.createElement("p");
        songName.innerText = song.song;

        let played = document.createElement("p");
        played.innerText = `Played ${song.played} times`;

        mainContent.appendChild(img);
        mainContent.appendChild(h5);
        mainContent.appendChild(songName);
        mainContent.appendChild(played);
    }

    const renderEmpty = function() {
        let h1 = document.createElement("h1");
        h1.innerText = "SONG NOT FOUND";
        mainContent.appendChild(h1);
    }

    console.log(currentMood, songId);
    if (currentMood && songId) {
        renderSongPage(currentMood, songId);
    } else {
        renderEmpty();
    }

})(selectPlayList, document, window);