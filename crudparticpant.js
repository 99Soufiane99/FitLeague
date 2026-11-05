function affichageParticipant(){
    let listParticipant=document.getElementById("list-participants")
    listParticipant.innerHTML=""
    participants.forEach(participant=>{
        listParticipant.innerHTML+= `

        <article class="bg-white border border-gray-200 rounded-xl p-3">
        <div class="flex justify-between items-start flex-wrap gap-3">
        <div>
        <div class=" list-participants flex items-center gap-2 mb-1 flex-wrap">
                    <a href="defi-details.html" class="font-bold text-lg hover:underline">${participant.name}</a>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">${participant.pseudo}</span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">actif</span>
            </div>
            <p class="text-sm text-gray-500">${participant.defi}</p>
            <p class="text-sm text-gray-500 mt-1">Performance : ${participant.performance} ${participant.unite}</p>
          </div>
            <div class="flex gap-2 shrink-0">
                <a  href="defi-details.html" class="border border-gray-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50">Ouvrir</a>
                <a data-id=${participant.id} class="btn-modif border border-gray-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50">Modifier</a>
                <button data-id=${participant.id} class="btn-supprimer border border-red-200 text-red-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-red-50">Supprimer</button>
            </div>
            </div>
      </article>
    `}
)

modifierParticpant()
supprimerParticipant()
}

function ajouterParticipant(){
    let nvparticipant={
        id:6,
        name:"nv_name",
        pseudo:"nv_pseudo",
        defi:"musculation en october",
        performance:8,
        unite:"seance"

    }
    participants.push(nvparticipant)
    affichageParticipant()}


function modifierParticpant(){
    btnModifer=document.querySelectorAll(".btn-modif")
    btnModifer.forEach(btn=>{
       
        btn.addEventListener("click",()=>{
            let id=Number(btn.dataset.id)
            participant=participants.find(p=>p.id===id)
            if(participant){
                participant.name="name_modif"
                participant.pseudo="pseudo_modif"
                participant.defi="defi_modif"
                participant.performance="performance_modif"
                participant.unite="unit_modif"
                affichageParticipant()
               
            }
        })
    })
}
function supprimerParticipant(){
    let btnSuprrimer=document.querySelectorAll(".btn-supprimer")
    btnSuprrimer.forEach(btnn=>{
        
         btnn.addEventListener("click",()=>{
            let id=Number(btnn.dataset.id)
              let elemntSupprimer=participants.findIndex(p=>p.id===id)
              console.log(elemntSupprimer)
                 console.log(btnn)
             if(confirm('vous confirmer supprimer ce participant!')&&elemntSupprimer>-1){
       
              participants.splice(elemntSupprimer,1)
                affichageParticipant()
                }
                
         })
    })
}
affichageParticipant()
ajouterParticipant()
modifierParticpant()
supprimerParticipant()