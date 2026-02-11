
let xp = 10002
let nome = "Gui"
let nivel = ""

if (xp <= 1000) {
    

} else if (xp >=1001 && xp <= 2000) {
    nivel = "ferro"
    
}else if (xp >=2001 && xp <= 5000) {
     nivel = "bronze"

    }else if (xp >=6001 && xp <= 7000) {
    nivel = "prata"

 

 }else if (xp >=7001 && xp <= 8000){
    nivel = "ouro"
 } else if (xp >=8001 && xp <= 9000) {
    nivel = "platina"

 } else if (xp >=9001 && xp <=10000) {
  
    nivel ="Ascendente"
 }
  else if(xp >=10001){
    nivel = "radiante"
 }
console.log("Parabens " + nome + " vc Está no nivel: " + nivel + "!!")