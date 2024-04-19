const videoLink = 'https://youtu.be/wYDNaNWxH5c';

function buttonAction(buttonName) {
    switch (buttonName) {
        case 'paper':
            alert("Coming soon! Please wait for the publication of the paper");
            break;
        case 'scholar':
            alert("Coming soon! Please wait for the publication of the paper");
            break;
        case 'video':
            window.open(videoLink, '_blank');
            break; 
    }
}
