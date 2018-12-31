var int=0;
function myFunction() {
    var num=2;
    let x = document.getElementById("demo").style.fontSize ;


    // document.getElementById("demo").style.backgroundColor = "white";
    // console.log(x);
    // for(let i=0; i<num;i++) {
        if (int==0) {
            int=1;

                ++num;
            // document.getElementById("demo").style.fontSize = "50px";
            document.getElementById("demo").style.backgroundColor= "black";
        } else {
            int=0;
            document.getElementById("demo").style.backgroundColor="purple"

            // document.getElementById("demo").style.fontSize = "70px";
            ++num;
        }
    // }
}