function tambah(input1, input2, input3){
    var input1 = document.getElementById('angka1').value;
    var input2 = document.getElementById('angka2').value;
    var input3 = document.getElementById('angka3').value;

    var hasil = parseInt(input1) + parseInt(input2) + parseInt(input3)
    document.getElementById('hasil').innerHTML = 'Hasil : ' + hasil;
}

function kurang(){
    var input1 = document.getElementById('angka1').value;
    var input2 = document.getElementById('angka2').value;
    var input3 = document.getElementById('angka3').value;

    var hasil = parseInt(input1) - parseInt(input2) - parseInt(input3)
    document.getElementById('hasil').innerHTML = 'Hasil : ' + hasil;
}

function kali(){
    var input1 = document.getElementById('angka1').value;
    var input2 = document.getElementById('angka2').value;
    var input3 = document.getElementById('angka3').value;

    var hasil = parseInt(input1) * parseInt(input2) * parseInt(input3)
    document.getElementById('hasil').innerHTML = 'Hasil : ' + hasil;
}

function bagi(){
    var input1 = document.getElementById('angka1').value;
    var input2 = document.getElementById('angka2').value;
    var input3 = document.getElementById('angka3').value;

    var hasil = parseInt(input1) / parseInt(input2)  / parseInt(input3)
    document.getElementById('hasil').innerHTML = 'Hasil : ' + hasil;
}