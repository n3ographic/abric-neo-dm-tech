function bigNombre(a, b, c) {
    var resultatNombre = 0
    if(a > b){
        resultatNombre = a
    }
    else{
        resultatNombre = b
    }
    if(c > resultatNombre){
        resultatNombre = c
    }
    return resultatNombre;
}
console.log(bigNombre(2,20,6));


