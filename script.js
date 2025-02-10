document.addEventListener("DOMContentLoaded", () => {
    const teamData = {
        owners: [
            { name: "Melon", uuid: "31192189-3829-4fe0-b474-c972c21632e0" },
        ],
        developers: [
            { name: "Dev1", uuid: "f81ebc71-12e1-47d9-bab5-dc9a6fa189e3" },
        ],
        staffs: [
            { name: "Hapixh", uuid: "d618f8b1-7ea4-40e1-8b23-35958376bf41" },
        ]
    };

    function populateTeam(category, elementId) {
        const container = document.getElementById(elementId);
        teamData[category].forEach(member => {
            const div = document.createElement("div");
            div.classList.add("team-member");

            div.innerHTML = `
                <img class="front" src="https://skins.mcstats.com/body/front/${member.uuid}" alt="Front Image" data-name="${member.name}">
                <img class="back" src="https://skins.mcstats.com/body/back/${member.uuid}" alt="Back Image" data-name="${member.name}">
                <p>${member.name}</p>
            `;

            const frontImage = div.querySelector(".front");
            const backImage = div.querySelector(".back");

            // Füge einen Klick-Event hinzu, der zwischen Vorder- und Rückseite wechselt
            div.addEventListener("click", () => {
                if (frontImage.style.display !== "none") {
                    frontImage.style.display = "none"; // Vorderseite ausblenden
                    backImage.style.display = "block"; // Rückseite anzeigen
                } else {
                    frontImage.style.display = "block"; // Vorderseite anzeigen
                    backImage.style.display = "none"; // Rückseite ausblenden
                }
            });

            // Initial die Rückseite ausblenden
            backImage.style.display = "none";

            container.appendChild(div);
        });
    }

    populateTeam("owners", "owners");
    populateTeam("developers", "developers");
    populateTeam("staffs", "staffs");
});
