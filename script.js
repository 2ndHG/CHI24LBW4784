const videoLink = 'https://youtu.be/wYDNaNWxH5c';

function buttonAction(buttonName) {
    switch (buttonName) {
        case 'paper':
            //alert("Coming soon! Please wait for the publication of the paper");
            window.open("https://dl.acm.org/doi/10.1145/3613905.3651018")
            break;
        case 'scholar':
            alert("Coming soon! Please wait for the publication of the paper");
            break;
        case 'video':
            window.open(videoLink, '_blank');
            break; 
    }
}
