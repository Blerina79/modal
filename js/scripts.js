
window.onload = () =>{

           //recupere les boutons ouverture de la modale  modale 

           const modalButtons = document.querySelectorAll("[data-toggle=modal]");

           for(let button of modalButtons){
            button.addEventListener('click', function(e) {
            // on empeche la navigation
            e.preventDefault();
            // on recupere le data target
            let target = this.dataset.target

            //on recupere la bonne modale 

            let modal = document.querySelector(target);

            //on affiche la modale
            modal.classList.add("show");
             //on recupere les boutons de fermeture

            const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
   
                for(let close of modalClose){
                close.addEventListener("click", () =>{
                   modal.classList.remove("show");
    
                });
            }

            //gère la fermeture lors du clic sur la zone grise
            modal.addEventListener("click",function(){
                this.classList.remove("show");
            })
            //évite la propagation du clic d'un enfant à son parent
            modal.children[0].addEventListener("click",function(e){
                e.stopPropagation();
            })


        });
    }
    
   
}