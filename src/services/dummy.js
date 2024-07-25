const helper=()=>{
    const num=Math.floor(Math.random()*10);
    return num%2==0;
}

export const execute=()=>{
    const res=helper();
    if(res){
        return "Learning JS"
    }
    else{
        return "LEARNING BACKEND IN JAVA";
    }
}