// import { useState } from 'react'
// export default function LoginPage({login, signup}) {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [newUsername, setNewUsername] = useState('')
//     const [newPassword, setNewPassword] = useState('')
//     const [bio, setBio] = useState('')
//     const [avatar, setAvatar] = useState('')

//     function handleSubmitSignup(e) {
//         e.preventDefault()
//         signup(newUsername, newPassword, bio, avatar)
//     }

//     function handleSubmitLogin(e) {
//         e.preventDefault()
//         login(username, password)
//     }

//     return (
//         <div className="login">
//             <div className="title">
//                 <h1>DINNER'S ARCADE</h1>
//             </div>
//             <form onSubmit={(e) => handleSubmitLogin(e)}>
//             <input
//                 placeholder="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 placeholder="password"
//                 type="text"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//             </form>

//             <form onSubmit={(e) => handleSubmitSignup(e)}>
//             <input
//                 placeholder="username"
//                 type="text"
//                 value={newUsername}
//                 onChange={(e) => setNewUsername(e.target.value)}
//             />
//             <input
//                 placeholder="password"
//                 type="text"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <input
//                 placeholder="bio"
//                 type="text"
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//             />
//             <input
//                 placeholder="avatar"
//                 type="text"
//                 value={avatar}
//                 onChange={(e) => setAvatar(e.target.value)}
//             />
//             <button type="submit">Signup</button>
//             </form>
//             {/* <img src="http://33.media.tumblr.com/f02aed641beb7a5059d57484c7f80f8c/tumblr_nlmmguXypN1tv87ujo1_400.gif" alt="cute cat"/> */}
//         </div>
//     )

// }