// "use client"
// import React from 'react';
// import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
// import auth from '../../../../firebase.js'

// const FacebookSignInButton: React.FC = () => {
//   const handleSignIn = async () => {

//     const provider = new FacebookAuthProvider();

//     try {
//       const result = await signInWithPopup(auth, provider);

//       // The signed-in user info.
//       const user = result.user || "";

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       const credential = FacebookAuthProvider.credentialFromResult(result);
//       const accessToken = credential?.accessToken || "";

//       // IdP data available using getAdditionalUserInfo(result)
//       // ...

//     } catch (error:any) {
//       // Handle Errors here.
//       const errorCode = error?.code || "";
//       const errorMessage = error?.message || "";
//       // The email of the user's account used.
//       const email = error.customData?.email || ""; // Note: "customData" might not exist, handle accordingly.
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);

//       // ...
//     }
//   };

//   return (
//     <button onClick={handleSignIn} className="bg-black text-gray-200 rounded-xl shadow-xl py-4 px-4 font-bold transition duration-300 transform hover:scale-105 hover:ring-light-accent focus:outline-none ring ring-gray-300">
//       Sign in with Facebook
//     </button>
//   );
// };

// export default FacebookSignInButton;
