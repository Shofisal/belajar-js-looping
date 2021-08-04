// Nomor 1
for ( let i = 1 ; i <= 100 ; i++) {
    if ( i <= 100) {
        document.write ('<br />')
        document.write ('User ke - ' , i )
    }
}

// Nomor 2
for ( let j = 0 ; j <=18 ; j++) {
        console.log(j);
        j += 1
    }

// Nomor 3 
for ( let k = 1 ; k <=20 ; k++) {
    if ( k % 2 == 1) {
        console.log(k , 'Ganjil');
    } else if ( k % 2 == 0) {
        console.log(k, "Genap")
    }
}

// Nomor 4 
let ulang = confirm('Apakah anda mau mengulang?')
let count = 0 

while (ulang) {
    count ++;
    ulang= confirm('Apakah anda mau mengulangi?')
}
document.write ('<br />')
document.write ('Perulangan sudah dilakukan sebanyak ', count, ' kali')

// Nomor 5
let kuis = prompt('Sebutkan kepanjangan dari nama IB?')

    if ( kuis == 'Impact Byte') {
        document.write('<h1>Selamat Jawaban Kamu Benar !</h1>')
    } else {
        document.write('<h1>Jawaban Kamu Salah, Silahkan COBA LAGI!</h1>')
    }
