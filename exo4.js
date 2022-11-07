function nombreDepart(a){

    var nombreCalcul = 0

    for(var i = 1; i <= a ; i++){
        nombreCalcul= nombreCalcul + i;
    }

    return nombreCalcul;
}

console.log(nombreDepart(5));