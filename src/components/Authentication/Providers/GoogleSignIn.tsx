// import React from 'react';
// import {  signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import auth from '../../../../firebase.js'
// const GoogleSignIn: React.FC = () => {
//   const handleSignIn = async () => {

//     const provider = new GoogleAuthProvider();

//     try {
//       const result = await signInWithPopup(auth, provider);

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential?.accessToken || "";

//       // The signed-in user info.
//       const user = result.user || "";

//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//       console.log(user)

//     } catch (error:any) {
//       // Handle Errors here.
//       const errorCode = error?.code || "";
//       const errorMessage = error?.message || "";
//       // The email of the user's account used.
//       const email = error.customData?.email || ""; // Note: "customData" might not exist, handle accordingly.
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);

//       // ...
//     }
//   };

//   return (
//     <button onClick={handleSignIn} className="bg-black text-gray-200 rounded-xl shadow-xl py-4 px-4 font-bold transition duration-300 transform hover:scale-105 hover:ring-light-accent focus:outline-none ring ring-gray-300">
//       Sign in with Google
//     </button>
//   );
// };

// export default GoogleSignIn;
