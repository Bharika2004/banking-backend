document.getElementById("loginBtn").addEventListener("click", function(event){
   event.preventDefault();
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
         "content-Type": "application/json"
      },
      body: JSON.stringify({
         username: username,
         password: password
      })
   })
   .then(response => response.json())
   .then(data =>{
      alert (data.message);
   })
   .catch(error =>{
      console.error("Error:", error);
      alert("unable to connect to backend");
  });
});  
