function input(value){
    document.getElementById("display").value += value;
}

function bersihkanLayar(){
    document.getElementById("display").value ="";
}

function hasil(){
    try{
        const hasil = eval(document.getElementById("display").value);
        document.getElementById("display").value = hasil;
    }
    catch{
        alert("Maaf, ada kesalahan dalam perhitungan Anda");
        document.getElementById("display").value = "";
    }

}
