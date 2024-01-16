function showContent(id){
    const spinner = document.querySelector(".skeleton-spinner")
    const contentContainer = document.getElementsByClassName("jobContainer-section-1")
    for (let i = 0; i < contentContainer.length; i++){
        contentContainer[i].style.display="none"
    }
spinner.style.display="block"

    setTimeout(() => {
        spinner.style.display="none"
        document.getElementById(id).style.display="block"

    for (let i = 0; i < contentContainer.length; i++){
        contentContainer[i].classList.add("animate")

    }
    }, 1000);


}

window.addEventListener("scroll", scrollEffect)

 function scrollEffect(){
    const container = document.querySelectorAll(".animate-show")
    container.forEach(function(container){
        const counterPosition = container.getBoundingClientRect().top
        const currentPosition =  window.innerHeight / 2.1

        if(counterPosition < currentPosition){
            container.classList.add("show")
        }
    })
 }

 

 function clickshowNav(){
    const navlinks = document.querySelector(".nav-links")
    navlinks.classList.toggle("show")
 }