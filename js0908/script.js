function kattintas(){

    let elsoAdatbekeres = parseInt(document.getElementById("ID-meretbekeres").value);
    let csuszkaertek = parseInt(document.getElementById("ID-csuszkazodasi").value);
    let mertekvalasztas = document.getElementById("meretValasztas").value;

    document.getElementById("ID-eredmeny").innerHTML = Math.round(elsoAdatbekeres/csuszkaertek);
    
    if (mertekvalasztas == "MB") {
        elsoAdatbekeres *= 1000;
    }
    
}

function CsuszkaSzia(){

    let csuszkaertek = parseInt(document.getElementById("ID-csuszkazodasi").value);
    document.getElementById("ID-csuszkaerteke").innerHTML = csuszkaertek;
}