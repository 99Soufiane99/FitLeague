const defi = JSON.parse(localStorage.getItem("defi"))
const defiinfo = document.getElementById("defi-info")
function afichierdetail(){
    if(!defi) return;
    defiinfo.innerHTML = ``
    defiinfo.innerHTML = `
    <div>
            <h2 class="font-bold text-3xl">${defi.objective} ${defi.unit} en ${defi.deadline}</h2>
            <span>${defi.sport}</span>
            <p class="text-gray-500 text-base">${defi.description}</p>
            <p class="text-gray-500 font-bold text-base">Objectif : ${defi.objective} ${defi.unit} · ${defi.deadline}</p>
            </div>

    `
}

function afichageclassment(){
    const classmendefi = document.getElementById("classment-defi")
    const membres = participants.filter( participant => defi.participants.includes(participant.id))
    membres.sort((participant1, participant2) =>{participant2.performance - participant1.performance})

    classmendefi.innerHTML = ``
    membres.forEach((participant, index) =>{
        classmendefi.innerHTML += `
        <div class="flex items-center justify-between px-4 py-3 rounded-md border border-gray-200">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-yellow-200 text-yellow-800 flex items-center justify-center text-xs font-semibold">${index + 1}</span>
                <span class="font-medium">${participant.name}</span>
              </div>
              <span class="font-semibold">${participant.performance} ${participant.unite}</span>
            </div>
        `

    })
    
}



afichierdetail()
afichageclassment()