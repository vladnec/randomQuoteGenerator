function generateRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function addToDOM(str) {
    let quote = $("<p class='card-text'></p>").text((str))
    let cardbody = $("<div class='card-body'></div>");
    let card = $("<div class='card text-center'></div>");
    cardbody.append(quote);
    card.append(cardbody);
    $(".quote-container").append(card);
}


function clearList() {
    $(".quote-container").html("");
};


function getFilter(filter) {
    return $(`select[class="${filter}"]`).children("option:selected").val();
}
// select pirate - Get ye some pirate speak for any swashbucklin' situation. Y'arrr!
// select mafia - Yo, dis' thing gives ya some random mafia speak. Bada-bing.


function getQuote(){
    clearList();
    // select type of Quote 
    let categoryOfQuotes = getFilter("category").toLowerCase() || null;
    let selectedQuotes = {};

    // generate quotes
    let numberOfQuotes = getFilter("number");
    for (i=0 ; i < numberOfQuotes ; i++){
        if (categoryOfQuotes){
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
