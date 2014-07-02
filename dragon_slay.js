var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    slaying = false;
    if (youHit) {
        console.log("Congrats, you hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("Dragon slain!");
            slaying = false;
        }
        else {
            youhit = Math.floor(Math.random() * 2)
        }
}
    else {
    console.log("The Dragon defeated you")
} 
    
}