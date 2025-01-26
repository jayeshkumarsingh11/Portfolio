function addRecommendation(){

    let recommendation = document.getElementById("new_recommendation");
    
    if(recommendation.value !=null && recommendation.value.trim() !=""){
        console.log("New recommendation added");

        var element=document.createElement("div");
        element.setAttribute("class","all_recommendations");
        element.innerHTML="\<span\>&#8220;\<span\>"+ recommendation.value +"\<span\>&#8221;\</sapn\>";

        document.getElementById("recommendations").appendChild(element);

        recommendation.value=" ";
    }
}

function showPopup(bool){
    if (bool){
        document.getElementById('popup').style.visibility='visible'
    }else{
        document.getElementById('popup').style.visibility='hidden'
    }
}
