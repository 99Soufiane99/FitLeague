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

function aficherparticipants(participants, id) {
    let element = document.getElementById(id);
    element.innerHTML = "";
    participants.forEach((participants, index) => {
        element.innerHTML += `
                             <div class="flex justify-between items-center py-3 text-sm">
                                    <span>${participants.name}</span>
                                    <button class="text-gray-500">Retirer</button>
                                    </div>
        `
    })
}


afficherClass(participants, "classment-defi")
aficherparticipants(participants, "participantlist")