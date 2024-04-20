var seg = 0;
var min = 0;
var hora = 0;
let interval

const display = document.getElementById('display')

function iniciar (){
    if(seg > 0) return
      interval = setInterval(() => {
        seg ++;
        if (seg == 60){
        seg = 0;
        min ++;
        }
       
       if (min == 60) {
            min = 0;
            hora ++
        }
       
       // TERNÁRIO: CONDIÇÃO ? FAZ ALGUMA COISA : FAZ OUTRA COISA 
       /* 
       ? = ENTÃO
       : = SE NÃO
       */
       display.innerHTML = `${hora < 10 ? '0' + hora : hora }: ${min < 10 ? '0' + min : min }:${seg < 10 ? '0' + seg : seg }`
        console.log(`${hora}:${min}:${seg}`);
    },1000);
}


function pause() {
    clearInterval(interval)
}

function reset() {
    seg = 0
    min = 0
    hora = 0
    display.innerHTML = `${hora < 10 ? '0' + hora : hora }: ${min < 10 ? '0' + min : min }:${seg < 10 ? '0' + seg : seg }`
    pause()
    console.log(`${hora}:${min}:${seg}`);
}