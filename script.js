function add() {
    let a11
    let a12
    let a21
    let a22
    let b11
    let b12
    let b21
    let b22
    a11=parseFloat(document.getElementById("firstnumber").value);
    a12=parseFloat(document.getElementById("secondnumber").value);a21=parseFloat(document.getElementById("thirdnumber").value);
    a22=parseFloat(document.getElementById("fournumber").value);
    b11=parseFloat(document.getElementById("firstnum").value);b12=parseFloat(document.getElementById("secondnum").value);
    b21=parseFloat(document.getElementById("thirdnum").value);
    b22=parseFloat(document.getElementById("fournum").value);

    let c11=a11+b11
    document.getElementById("output1").value=c11;

    let c12=a12+b12
    document.getElementById("output2").value=c12;

    let c21=a21+b21
    document.getElementById("output3").value=c21;

    let c22=a22+b22
    document.getElementById("output4").value=c22;
}
function mul(){
    let a11
    let a12
    let a21
    let a22
    let b11
    let b12
    let b21
    let b22
    a11=parseFloat(document.getElementById("firstnumber").value);
    a12=parseFloat(document.getElementById("secondnumber").value);a21=parseFloat(document.getElementById("thirdnumber").value);
    a22=parseFloat(document.getElementById("fournumber").value);
    b11=parseFloat(document.getElementById("firstnum").value);b12=parseFloat(document.getElementById("secondnum").value);
    b21=parseFloat(document.getElementById("thirdnum").value);
    b22=parseFloat(document.getElementById("fournum").value);

    let d11=(a11*b11)+(a12*b21);
    document.getElementById("result1").value=d11;

    let d12=(a11*b12)+(a12*b22);
    document.getElementById("result2").value=d12;

    let d21=(a21*b11)+(a22*b21);
    document.getElementById("result3").value=d21;

    let d22=(a21*b12)+(a22*b22);
    document.getElementById("result4").value=d22;
}