// import React, {useState, useEffect } from "react";

// function Signup() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")



//   function handleSignupSubmit(e) {
//     e.preventDefault
//     fetch("http://localhost:3000/api/v1/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(username, password),
//     })
//       .then((r) => r.json())
//       .then((data) => {


//         // save the token to localStorage for future access
//         // localStorage.setItem("jwt", data.jwt);
//         // save the user somewhere (in state!) to log the user in
//         // setUser(data.user);
//       });
//       }

    
     

//   // useEffect(() => {
//   //   fetch("http://localhost:3000/api/v1/users", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Accept: "application/json",
//   //     },
//   //     body: JSON.stringify(newUserData),
//   //   })
//   //     .then((r) => r.json())
//   //     .then((data) => {
//   //       // save the token to localStorage for future access
//   //       localStorage.setItem("jwt", data.jwt);
//   //       // save the user somewhere (in state!) to log the user in
//   //       setUser(data.user);
//   //     });
//   //     }, []);

//   return (
//     <div>
//       <form onSubmit={handleSignupSubmit}>
//         Username:
//         <input 
//         className="Signup-inputs" 
//         type="text" 
//         id="username" 
//         placeholder=" Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)}
//         />
//         Password:
//         <input 
//           className="Signup-inputs" 
//           type="password" 
//           id="password"
//           placeholder=" Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Signup</button>

//       </form>
//     </div>
//   )
  
// }

// export default App;