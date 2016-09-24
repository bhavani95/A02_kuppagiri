function euroconverter(){

document.converter.dollar.value = document.converter.euro.value * 1.270
document.converter.rupee.value = document.converter.euro.value * 74.90
}

function dollarconverter(){
document.converter.euro.value = document.converter.dollar.value * 0.680
document.converter.rupee.value = document.converter.dollar.value * 66.71

}
function rupeeconverter(){
document.converter.euro.value = document.converter.rupee.value * 0.013
document.converter.rupee.value = document.converter.rupee.value * 0.01
}
function nm(){
    document.converter.result.value=document.converter.name.value+" thankyou for using my website"
}

