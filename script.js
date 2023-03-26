var n1 = ''
var n2 = ''
var nda = '0'
var operador = ''
var txtn1 = document.querySelector('div#visor')
txtn1.innerHTML = `<p>${nda}</p>`


/* OPERADORES
   ----------*/ 

function div() {
    if (n1 == ''){
        window.alert('[ERROR] digite um valor antes')
    } else if (n2 != ''){
        window.alert('[ERROR] Só é permitido um operador')
    } else {
        operador = '/'
        txtn1.innerHTML = `<p>${n1} ${operador}</p>`
    }
}
function mult() {
    if (n1 == ''){
        window.alert('[ERROR] digite um valor antes')
    } else if (n2 != ''){
        window.alert('[ERROR] Só é permitido um operador')
    } else {
        operador = 'x'
        txtn1.innerHTML = `<p>${n1} ${operador}</p>`
    }
}
function adi() {
    if (n1 == ''){
        window.alert('[ERROR] digite um valor antes')
    } else if (n2 != ''){
        window.alert('[ERROR] Só é permitido um operador')
    } else {
        operador = '+'
        txtn1.innerHTML = `<p>${n1} ${operador}</p>`
    }
}
function sub() {
    if (n1 == ''){
        window.alert('[ERROR] digite um valor antes')
    } else if (n2 != ''){
        window.alert('[ERROR] Só é permitido um operador')
    } else {
        operador = '-'
        txtn1.innerHTML = `<p>${n1} ${operador}</p>`
    }
}



/* NÚMEROS
   -------*/

// o número ao lado de clicar está como se fosse em um vetor, começa no 0.
function clicar0() {
   if (operador == '') {
    n1 += '1'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '1'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar1() {
   if (operador == '') {
    n1 += '2'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '2'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar2() {
   if (operador == '') {
    n1 += '3'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '3'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar3() {
   if (operador == '') {
    n1 += '4'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '4'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar4() {
   if (operador == '') {
    n1 += '5'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '5'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar5() {
   if (operador == '') {
    n1 += '6'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '6'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar6() {
   if (operador == '') {
    n1 += '7'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '7'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar7() {
   if (operador == '') {
    n1 += '8'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '8'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar8() {
   if (operador == '') {
    n1 += '9'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '9'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}
function clicar9() {
   if (operador == '') {
    n1 += '0'
    txtn1.innerHTML = `<p>${n1}</p>`
   } else {
    n2 += '0'
    txtn1.innerHTML = `<p>${n1} ${operador} ${n2}`
   }
}

/* contas / sinal ingual
   ---------------------*/

function ingual() {
    switch (operador) {
        case '/':
            n1 = Number(n1) / Number(n2)
            n1 = n1.toString()
            n2 = ''
            operador = ''
            txtn1.innerHTML = `<p>${n1}</p>`
            break
        case 'x':
            n1 = Number(n1) * Number(n2)
            n1 = n1.toString()
            n2 = ''
            operador = ''
            txtn1.innerHTML = `<p>${n1}</p>`
            break
        case '+':
            n1 = Number(n1) + Number(n2)
            n1 = n1.toString()
            n2 = ''
            operador = ''
            txtn1.innerHTML = `<p>${n1}</p>`
            break
        case '-':
            n1 = Number(n1) - Number(n2)
            n1 = n1.toString()
            n2 = ''
            operador = ''
            txtn1.innerHTML = `<p>${n1}</p>`
            break
        default:
            window.alert('Nenhum valor inserido')
            break
    }
}

/* Apagar 
   ------*/

function apagar() {
    n1 = ''
    n2 = ''
    operador = ''
    txtn1.innerHTML = `<p>${nda}`
}