const placeorder=(callback)=>{
    setTimeout(()=>
     {
        console.log("order placed");
        callback();
    },2000);

}
const startProduction=(callback)=>{
    setTimeout(()=>{
        console.log("production stared");
        callback();
    },5000);
}
const Printingstared=(callback)=> {
    setTimeout(()=>{
        console.log("print ID");
        callback();
    },5000);
}
const printID=(callback)=>{
    setTimeout(()=>{
        console.log("ID printed");
        callback();
    },5000);
}
const productName=(callback)=>{
    setTimeout(()=>{
        console.log("Name Printed");
        callback();
    },5000);
}
const productDesc= (callback)=>{
    setTimeout(()=>{
       console.log("Description printed");
        callback();
    },5000);
}

console.log("ordering product............");
placeorder(()=>{

    console.log("IN Production");
    startProduction(()=>{

        console.log("printing started");
        printID(()=>{
            productName(()=>{
                productDesc(()=>{
                console.log("day ended");

                });
            });
        });
    });
});
    
