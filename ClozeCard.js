function ClozeCard(text, cloze){
    this.cloze = cloze,
    this.fullText = text;
    this.partialText = this.clozeCheck(text, cloze);
    // this.partialText = clozeCheck(text, cloze);
}

// done this way, users cannot access clozeCheck function

// function clozeCheck(full, cloze){
//     if (full.includes(cloze)){
//         return full.replace(cloze, "...");
//     }
// }  

ClozeCard.prototype.clozeCheck = function(full, cloze){
    if (full.includes(cloze)){
        return full.replace(cloze, "...");
    } else {
        this.error();
    }
}

ClozeCard.prototype.error = function (){
    console.log("Error! Cloze text was not found within full text");
};

module.exports = ClozeCard;