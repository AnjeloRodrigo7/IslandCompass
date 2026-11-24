const searchInput=
document.getElementById("searchInput");

const imageCards =
document.querySelectorAll(".image-card");

searchInput.addEventListener("input",fuctions()){
    const searchText =
    searchInput.ariaValueMax.toLowerCase();

    photoCards.forEach(function(card){
        const placeName =
        card.querySelector("h3").textContent.toLowerCase();

        if(placeName.includes(searchText)){
            card.style.display="block";

        }
        else{
            card.style.display="none";
        }
    });
};