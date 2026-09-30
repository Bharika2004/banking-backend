document.getElementById("transferBtn").addEventListener("click", function(){             
    const toaccount = document.getElementById("toAccount"). value;
    const amount    = document.getElementById("amount"). value;
    const description = document.getElementById("description").value;
    fetch("http://localhost:3000/api/transfer",{
        method: "POST",
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            fromAccount: "1234567890",
            toAccount  :  toAccount,
            amount     :  amount,
            description:  description
        })
    })
    .then(response =>{
        if (!response.ok){
            throw new Error("Transfer request failed");
        }
        return response.json();
    })
    .then(data =>{
        alert(data.message);
    })
    .catch(error =>{
        console.error("Error:", error);
        alert("unable to connect to backend");
    }); 
});