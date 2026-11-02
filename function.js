function afficherClass(participants, id) {
    const elementid = document.getElementById(id);
    elementid.innerHTML = "";
     participants.forEach((participants, index) => {
        elementid.innerHTML += `
        <div class="flex items-center justify-between px-4 py-3 rounded-md border border-gray-200">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-yellow-200 text-yellow-800 flex items-center justify-center text-xs font-semibold">${participants.id}</span>
                <span class="font-medium">${participants.name}</span>
              </div>
              <span class="font-semibold">${participants.performance} ${participants.unite}</span>
            </div>
        `
    })
}
function supprimerDefis(){
    let btnSupprimer=document.querySelectorAll(".btn-supprimer")
    btnSupprimer.forEach(btn=>{
        let id=Number(btn.dataset.id)
        btn.addEventListener("click",()=>{
            if(confirm("vous conferme pour supprimer ce defis?")){
                challenges=challenges.filter(d=>d.id!==id)
                affichageDefis()
            }
        })
    })
};

function modifierDefis() {

    let btnModifier = document.querySelectorAll(".btn-modifier");

    btnModifier.forEach(btn => {

        btn.addEventListener("click", function() {

            let id = Number(btn.dataset.id);

            let defi = challenges.find(d => d.id === id);

            if (defi) {

                defi.title = "Nouveau défi sportif";
                defi.sport = "Musculation";
                defi.description = "Réaliser 1000 pompes progressivement.";
                defi.objective = 1000;
                defi.unit = "répétitions";
                defi.deadline = "2026-12-30";
                defi.status = "active";

                affichageDefis();
            }

        });

    })};

function ajouterDefis() {

    let nvDefis = {
        id: 6,
        title: "500 pompes",
        sport: "Musculation",
        description: "Réaliser 500 pompes progressivement pendant le mois.",
        objective: 500,
        unit: "répétitions",
        deadline: "2026-12-15",
        status: "active",
        participants: [3, 4, 5]
    };

    challenges.push(nvDefis);

    affichageDefis();
}
affichageDefis()
ajouterDefis()
supprimerDefis()
modifierDefis()