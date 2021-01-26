function calcu(num){
    var input = document.getElementById("calcinput")
    input.value += (num)

}

function wipe(){
    var input = document.getElementById("calcinput")
    input.value = ""
}


function res(){
    var input = document.getElementById("calcinput")
    input.value = eval(input.value)
}