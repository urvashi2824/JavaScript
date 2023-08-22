async function fetchData()
{

try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok){
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);

}catch{(error)=>
{
    console.log('Error Fetching', error)
}
}
}
fetchData();