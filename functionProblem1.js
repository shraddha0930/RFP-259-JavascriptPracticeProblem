function degCTodegF(temperature){
    let degF = temperature*1.8 + 32;
    if(degF>=32 && degF<=212){
      console.log(degF +" degF");
    }else{
      console.log("Invalid input");
    }
    }
    function degFTodegC(temperature){
    let degC = (temperature-32)*0.555;
    if(degC>=0 && degC<=100){
      console.log(degC +" degC");
    }else{
      console.log("Invalid input");
    }
    }
    
    let temperature = 10;
    let input =1;
    
    switch(input){
    case 1:degCTodegF(temperature)
    break;
    case 2:degFTodegC(temperature)
    break;
    }