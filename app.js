function afficheStatique(){
let statique = document.getElementById("dashboard-statistique");
let active=challenges.filter(challenge=>challenge.status==="active")
statique.innerHTML = "";
statique.innerHTML += `
            <div id="nombre-defi" class="rounded-xl bg-white p-6 min-h-[160px] w-full">
                <p class="text-gray-500 font-bold text-base">
                    Total des défis
                </p>
                <p class="text-4xl font-bold text-gray-800 mt-2">
                    ${challenges.length}
                </p>
                <p class="text-gray-500 mt-2 text-sm">
                    Défis créés
                </p>
            </div>
            <div id="participants" class="rounded-xl bg-white p-6 min-h-[160px] w-full">
                <p class="text-gray-500 font-bold text-base">
                    Participants
                </p>

                <p class="text-4xl font-bold text-gray-800 mt-2">
                    ${participants.length}
                </p>

                <p class="text-gray-500 mt-2 text-sm">
                    Membres du groupe
                </p>
            </div>
            <div id="defi-actifs" class="rounded-xl bg-white p-6 min-h-[160px] w-full">
                <p class="text-gray-500 font-bold text-base">
                    Défis actifs
                </p>

                <p class="text-4xl font-bold text-gray-800 mt-2">
                    ${active.length}
                </p>

                <p class="text-gray-500 mt-2 text-sm">
                    En cours actuellement
                </p>
            </div>
`;
}
function defiSection(){
    let defiSection=document.getElementById("defi-section")
    defiSection.innerHTML=``
    if(challenges.length===0){
        defiSection.innerHTML+=`
            
            <div class="bg-white p-5 rounded-xl text-center">
                Aucun défi pour le moment
            </div>
        
        `
        return
    }
    let dernerDefis=challenges.slice(-2).reverse()
    console.log(dernerDefis)
    for(let i=0;i<dernerDefis.length;i++){
        defiSection.innerHTML+=`
            <div id="defi-section" class="flex flex-col gap-3 mt-1">
                <!-- Défi 1 -->
                <div class="flex justify-between items-center bg-white rounded-xl px-5 py-4">
                    <div>
                        <h3 class="font-bold text-sm text-gray-800">
                            ${dernerDefis[i].objective+ ` `+ dernerDefis[i].unit + `en `+dernerDefis[i].deadline} 
                        </h3>
                        <p class="text-gray-500 text-xs mt-1">
                            ${dernerDefis[i].sport + ` · objectif  ` + dernerDefis[i].objective+` `+ dernerDefis[i].unit + ` · `  + dernerDefis[i].participants.length +` participants`}
                        </p>
                    </div>
                    <span class="bg-green-50 text-green-700 rounded-full px-3 py-1 text-xs font-bold">
                        ${dernerDefis[i].status}
                    </span>
                </div>
           `
    }
}
function affichageTop3(){
    let ranking=document.getElementById("tp-ranking")
    
    let classment=participants.sort((a,b)=>b.performance-a.performance).slice(0,3)
    ranking.innerHTML=`<h2 class="font-bold text-2xl text-gray-800">
                Meilleures performances
            </h2>

            <p class="text-gray-500 text-sm">
                Les meilleurs résultats apparaissent ici
            </p>`
    for(let i=0;i<classment.length;i++){
        ranking.innerHTML+=`
            <div class="flex justify-between items-center p-3 border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <span class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">
                            ${i+1}
                        </span>
                        <div>
                            <h3 class="font-bold text-xs text-gray-800">
                               ${classment[i].name}
                            </h3>

                            <p class="text-gray-500 text-xs">
                                ${classment[i].defi}
                            </p>
                        </div>
                    </div>
                    <p class="font-bold text-base text-gray-800">
                        ${classment[i].performance + ``+classment[i].unite}
                    </p>
                </div>
        `
    }
}
afficheStatique()
defiSection()
affichageTop3()
