 const addVeggies = (callback)=>{
    setTimeout(()=>{
        const veggies="veggies";
        console.log("veggies prepared",veggies);
        callback(veggies)
    },3000);

 };
 const addTikki=(veggies,callback)=>{
    setTimeout(()=>{
        const Tikki = veggies + "Tikki";
        console.log("Tikki  prepared ",Tikki);
        callback(Tikki)
    },)
 }
 const addBurger=(veggies, Tikki , callback=>{
    setTimeout(()=>{
        const burger = veggies + tikki + "burger";
        console.log("burger is prepared", burger);
    })
 })

 
 
 addVeggies((veggies)=>{
    console.log("preparing for Tikki started")
    addTikki(veggies,(Tikki)=>{
        console.log("preparing for burger started")
        makeBurger(veggies,Tikki,(burger)=>{
console.log("burger is served")
        })

    })

 })