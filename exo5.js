function ordreCroissant(tableau){

    for(var i = 0; i < tableau.length; i++){

        for(var j = i +  1; j < tableau.length; j++){

            if(tableau[i] > tableau[j]){

                var temp =  tableau[i];
                tableau[i] = tableau[j];
                tableau[j] = temp;

            }
        }
    }
    return tableau;
}

console.log(ordreCroissant([1,10,4,3,16]))


