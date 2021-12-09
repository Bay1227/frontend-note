// import { useEffect, useState } from "react";
// import EditForm from "./EditForm";

// export default function Home({ update, url }) {
//   const [form, setForm] = useState(false);
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");

//     fetch("http://localhost:3000/api/v1/users", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           setUser(data.user);
//         });
//       } else {
//         console.log("please log in");
//       }
//     });
//   }, []);

//   function handleSubmit(id, username, bio, avatar) {
//     fetch(`${url}/api/v1/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: `${username}`,
//         bio: `${bio}`,
//         avatar: `${avatar}`,
//       }),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(data);
//         setUser(data);
//         update(data);
//         setForm(!form);
//       });
//   }

//   function handleClick() {
//     setForm(!form);
//   }

//   return (
//     <>
//       <div className="container1">
//         <div className="welcome">
//           <h1 className="glow">Welcome!</h1>
//           <div className="profile">
//             {user ? (
//               <>
//                 <h2>{user.username}</h2>
//                 {/* <img src={user.avatar} alt="you" /> */}
//                 <p>{user.bio}</p>
//                 <button onClick={handleClick}>Edit Profile</button>
//                 {form ? <EditForm user={user} submitForm={handleSubmit} /> : ""}
//               </>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function Home() {
  return (
      <p>This is the home Component.</p>
  )
}

export default Home;
