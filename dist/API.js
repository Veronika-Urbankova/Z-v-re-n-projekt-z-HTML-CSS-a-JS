"use strict";
const select = document.getElementById("vyber");
const vysledky = document.getElementById("vysledky");
select.addEventListener("change", async () => {
    const dotaz = select.value.toLowerCase().trim();
    vysledky.innerHTML = "";
    if (!dotaz)
        return;
    const odpoved = await fetch(`https://api.tvmaze.com/search/shows?q=${dotaz}`);
    const data = await odpoved.json();
    data.forEach((polozka) => {
        const show = polozka.show;
        const nazev = show.name.toLowerCase();
        const slovaVNazvu = nazev.split(/\W+/);
        if (slovaVNazvu.includes(dotaz) && show.image?.medium) {
            const img = document.createElement("img");
            img.src = show.image.medium;
            img.alt = show.name;
            vysledky.appendChild(img);
        }
    });
});
