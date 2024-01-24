const transition = document.querySelector(".transition")
const liens = document.querySelectorAll('a')

setTimeout(function(){
    transition.classList.remove("active")
}, 400)

for(i=0; i< liens.length; i++){
    let lien = liens[i]
    console.log(lien)
    lien.addEventListener('click' , function(event){
        event.preventDefault();
        transition.classList.add('active')
        lienclic = event.target.href
        setTimeout(function(){
            window.location.href = lienclic
        }, 400)
    })
}
