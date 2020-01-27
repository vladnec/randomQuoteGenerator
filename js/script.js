function generateRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function getFilter(filter) {
    return  document.querySelector(`select[class="${filter}"]`).value;
}

function clearList() {
    document.querySelector(".quote-container").innerHTML = "";
};

function addToDOM(str) {
    let quote = document.createElement("p");
    quote.classList.add("card-text");
    quote.innerHTML = str;
    
    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-center");
    
    cardbody.append(quote);
    card.append(cardbody);
    
    let container = document.querySelector(".quote-container");
    container.appendChild(card)
    card.appendChild(cardbody)
    cardbody.appendChild(quote);
}



document.querySelector(".category").addEventListener("change", function(){
    clearList();
    if(this.value === "Mafia"){
        document.querySelector(".category-title").innerHTML = "Yo, dis' thing gives ya some random mafia speak. Bada-bing.";
        document.querySelector(".category-image").src = "./img/mafia.jpg"
    } else if (this.value === "Pirate"){
        document.querySelector(".category-title").innerHTML = " Get ye some pirate speak for any swashbucklin' situation. Y'arrr!";
        document.querySelector(".category-image").src = "./img/pirate.jpg";
    } else {
        document.querySelector(".category-title").innerHTML = "Random quotes"
        document.querySelector(".category-image").src = "./img/random.jfif";
    }
})



function getQuote(){
    clearList();
    // select type of Quote 
    let categoryOfQuotes = getFilter("category").toLowerCase() || null;
    let selectedQuotes = {};

    // generate quotes
    let numberOfQuotes = getFilter("number");
    for (i=0 ; i < numberOfQuotes ; i++){
        if (categoryOfQuotes !== "random"){
            selectedQuotes = quotes[categoryOfQuotes];
        } else {
           let x = generateRandomNumber(2);
           if (x == 0 ) {
               selectedQuotes = quotes.pirate
           } else {
               selectedQuotes = quotes.mafia
           }
        }
        let str = '';
        for(j=0 ; j < selectedQuotes.length ; j++){
            let randomNumber = generateRandomNumber(selectedQuotes[j].length)
            str += selectedQuotes[j][randomNumber];
        }
        //  append to DOM
        addToDOM(str);
    }
}