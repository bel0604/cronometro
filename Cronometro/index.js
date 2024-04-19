function iniciar (){
    var seg = 0;
    var min = 0;
    var hora = 0;

    setInterval(() => {
        seg ++;
        if (seg == 60){
        seg = 0;
        min ++;
        }if( min == 60){
            min = 0;
            hora ++
        }
        console.log(`${hora}:${min}:${seg}`);
    },1000);
}

