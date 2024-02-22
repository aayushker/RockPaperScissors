function main(){
   console.log(randomSelect())
}


function randomSelect(){
    const n = Math.random();
    if (n > 0.6){
        return "stone";
    }
    else if (n > 0.3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

main();