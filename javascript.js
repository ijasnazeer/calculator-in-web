// <---ADDITION--->
function add() {
    var a, b, c;
    a = Number(document.formadd.txtadd1.value);
    b = Number(document.formadd.txtadd2.value);
    c = a + b;
    document.formadd.txtsum.value = c;
}
function clearadd() {
    document.formadd.txtadd1.value = '';
    document.formadd.txtadd2.value = '';
    document.formadd.txtsum.value = '';
}

// <---SUBTRACTION--->
function minus() {
    var d, e, f;
    d = Number(document.formsub.txtsub1.value);
    e = Number(document.formsub.txtsub2.value);
    f = d - e;
    document.formsub.txtsub.value = f;
}
function clearminus() {
    document.formsub.txtsub1.value = '';
    document.formsub.txtsub2.value = '';
    document.formsub.txtsub.value = '';
}

// <---MULTIPLICATION--->
function multiply() {
    var g, h, i;
    g = Number(document.formmult.txtmult1.value);
    h = Number(document.formmult.txtmult2.value);
    i = g * h;
    document.formmult.txtmult.value = i;
}
function clearmultiply() {
    document.formmult.txtmult1.value = '';
    document.formmult.txtmult2.value = '';
    document.formmult.txtmult.value = '';
}

// <---DIVISION--->
function divide() {
    var j, k ,l;
    j = Number(document.formdiv.txtdiv1.value);
    k = Number(document.formdiv.txtdiv2.value);
    l = j/k;
    document.formdiv.txtdiv.value = l;
}
function cleardivide() {
    document.formdiv.txtdiv1.value = '';
    document.formdiv.txtdiv2.value = '';
    document.formdiv.txtdiv.value = '';
}