function affichageDefis() {
    let defis = document.getElementById("lest-defis");

    defis.innerHTML = "";

    challenges.forEach(challenge => {
        defis.innerHTML += `
            <article class="bg-white border border-gray-200 rounded-xl p-5">

                <div class="flex justify-between items-start flex-wrap gap-3">

                    <div>
                        <div class="flex items-center gap-2 mb-1 flex-wrap">

                            <a href="defi-details.html"
                               class="font-bold text-lg hover:underline">
                                ${challenge.title}
                            </a>

                            <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                ${challenge.sport}
                            </span>

                            <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                ${challenge.status}
                            </span>

                        </div>

                        <p class="text-sm text-gray-500">
                            ${challenge.description}
                        </p>

                        <p class="text-sm text-gray-500 mt-1">
                            Objectif : ${challenge.objective} ${challenge.unit}
                            · échéance ${challenge.deadline}
                            · ${challenge.participants.length} participant(s)
                        </p>
                    </div>

                    <div class="flex gap-2 shrink-0" id="div-defi">

                        <a data-id="${challenge.id}"
                        href="defi-details.html"
                           class="border border-gray-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
                            Ouvrir
                        </a>

                        <button
                            data-id="${challenge.id}"
                            class="btn-modifier border border-gray-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50">
                            Modifier
                        </button>

                        <button
                            data-id="${challenge.id}"
                            class="btn-supprimer border border-red-200 text-red-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-red-50">
                            Supprimer
                        </button>

                    </div>

                </div>
            </article>
        `;
    });
    supprimerDefis();
    modifierDefis();
}
function supprimerDefis(){
    let btnSupprimer=document.querySelectorAll(".btn-supprimer")
    btnSupprimer.forEach(btn=>{
        
        btn.addEventListener("click",()=>{let id=Number(btn.dataset.id)
            let elementSupprimer=challenges.findIndex(c=>c.id=id)
            if(confirm("vous conferme pour supprimer ce defis?")&&elementSupprimer>-1){
                challenges.splice(elementSupprimer,1)
                // challenges=challenges.splice((c=>c.id===id),1)    
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

 const defiinfo = document.getElementById("defi-info")

function ouvrirdefi(){
const divdefi = document.getElementById("lest-defis")
divdefi.addEventListener("click", (event) =>{
    const bouton = event.target.closest("[data-id]")
    if(!bouton) return;
    const id = Number(bouton.dataset.id)
    const defi = challenges.find(challeng => challeng.id === id)
    localStorage.setItem("defi", JSON.stringify(defi))
    
    })
}


affichageDefis()
ajouterDefis()
supprimerDefis()
modifierDefis()
ouvrirdefi()
