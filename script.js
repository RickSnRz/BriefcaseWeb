let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("team");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

function redirigirURL(url) {
    window.open(url, '_blank');
}

var videoElement = null;
function reproducirVideo(videoUrl) {
    var videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    videoElement = document.createElement('video');
    videoElement.setAttribute('src', videoUrl);
    videoElement.setAttribute('controls', 'controls');
    videoElement.setAttribute('autoplay', 'autoplay');

    videoContainer.appendChild(videoElement);

    document.body.appendChild(videoContainer);

    videoContainer.addEventListener('click', salirDelVideo);
}

function salirDelVideo(event) {
    var videoContainer = event.currentTarget;

    
    var isInsideVideoContainer = (event.target === videoElement) || videoElement.contains(event.target);

    if (!isInsideVideoContainer || event.key === 'Escape') {
        videoElement.pause();
        videoElement.currentTime = 0;

        videoContainer.parentNode.removeChild(videoContainer);
        videoElement = null;

        
        videoContainer.removeEventListener('click', salirDelVideo);
    }
}

window.onscroll = function(){
    efectoHabilidades();
}