const placeOrder=()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("placeOrder");
            resolve();
        },2000)
    })
}

const startProduction=()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("production started");
            resolve();
        },2000)
    })
}
const printID=()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("ID printed");
            resolve();
        },2000)
    })
}
const PrintingStared=()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("printing started");
            resolve();
        },2000)
    })
}
const description=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("product description");
            resolve();
        },2000)
    })
}






console.log("order is now going to take");
placeOrder()
.then(()=>{
    console.log("product is in production");
    return startProduction();
})
.then(()=>{
    console.log("ID printing started")
    return printID();
})
.then(()=>{
 console.log("New printing stared")
 return printName();
})
.the(()=>{
    console.log("production description printing stared")
    return printProductDescription();
})
