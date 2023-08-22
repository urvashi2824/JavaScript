function dealy(time) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },time);
    })
}

async function placeOrder(){
    await delay(2000);
    console.log("Order Taken");
}
async function startProduction(){
    await delay(2000);
    console.log("production started")
}
async function printID(){
    await dealy(2000);
    console.log("ID printed")
}
async function productName(){
    await dealy(2000);
    console.log("product name printed")
}
async function productDescription(){
    await dealy(2000);
    console.log("product Description")
}
async function main(){
    console.log("order is now going to be take");
    await placeOrder();
    console.log("product is in production");
    await startProduction();
    console.log("production is stared")
    await printId();
    console.log("id is printed");
    await productName();
    console.log("product name")
    await productDescription();
    console.log("product description")

}