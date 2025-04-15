document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.querySelector("#col1-row2 video");
    const playlistItems = document.querySelectorAll(".playlist li");

    playlistItems.forEach(item => {
        item.addEventListener("click", () => {
            const videoSrc = item.getAttribute("data-video");
            videoPlayer.src = videoSrc;
            videoPlayer.play();
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const playlistItems = document.querySelectorAll(".playlist li");

    playlistItems.forEach(item => {
        const videoSrc = item.getAttribute("data-video");
        const videoElement = document.createElement("video");
        videoElement.src = videoSrc;
        videoElement.currentTime = 5; // Capture thumbnail at 5 seconds

        videoElement.addEventListener("loadeddata", () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = 160; // Thumbnail width
            canvas.height = 90; // Thumbnail height
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            const thumbnail = canvas.toDataURL("image/jpeg");
            const imgElement = document.createElement("img");
            imgElement.src = thumbnail;
            imgElement.alt = "Video Thumbnail";
            item.prepend(imgElement);
        });
    });
});