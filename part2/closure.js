function myFunction(){
    let c=1;
    function my2Function(){
        if(c!==1){
            console.log("bhai i am already called");
        }
        else{
            console.log("hello bha");
        }
        c++;
    }
    return my2Function;
}

const ans = myFunction();
ans();
ans();
ans();

const ans2 = myFunction();
ans2();
ans2();
