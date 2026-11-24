function showExperience(placeId){
    const experience =document.getElementById(placeId);

    if(experience.style.display === "block"){
        experience.style.display = "none";
    
    }else{
        experience.style.display = "block";
    }
    
}