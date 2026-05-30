"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import landing_page from "../../public/landing_page.jpg";
import ArrowBackIconRounded from "@mui/icons-material/ArrowBack";
import RootLayout from "./layout";
import { signInWithEmail, signInWithGoogle } from "./auth/firebaseAuthHelpers";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

export default function Home() {
  const [showingTNC, setShowingTNC] = useState(false);
  // const [recaptchaVerifier, setRecaptchaVerifier] =
  //   useState<RecaptchaVerifier | null>(null);

  // useEffect(() => {
  //   const auth = getAuth();
  //   try {
  //     const verifier = new RecaptchaVerifier(auth, "sign-in-button", {
  //       size: "invisible",
  //       callback: (response: any) => {},
  //     });
  //     setRecaptchaVerifier(verifier);
  //   } catch (error) {
  //     console.error("Error creating RecaptchaVerifier:", error);
  //   }
  // }, []);

  const handleSignInWithEmail = async () => {
    const email = prompt("Enter your email");
    const password = prompt("Enter your password");
    if (email && password) {
      await signInWithEmail({ email, password });
    }
  };

  const signUpFunct = () => {
    console.log("signUpFunct called for sign-up");
  };

  const toggleTNC = () => {
    setShowingTNC(!showingTNC);
  };

  return (
    <RootLayout>
      <main
        className="relative flex min-h-screen flex-col items-center justify-between p-4"
        id="overlay"
      >
        {showingTNC ? (
          <div className="bg-zinc-500 h-full w-full overflow-y-auto z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-8 rounded-md">
            <ArrowBackIconRounded
              className="absolute top-5 left-5"
              onClick={toggleTNC}
              data-testid="ArrowBackIcon"
            />
            <div className="text-2xl font-bold text-white p-4">
              Terms and Conditions
            </div>
            <div className="text-xs text-white p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="text-xs text-white p-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="text-xs text-white p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        ) : null}
        <div className="w-full items-center justify-center">
          <div className="pr-2 pl-2">
            <Image
              src={landing_page}
              className="rounded-md"
              height={400}
              width={400}
              alt="Picture of laundry on countertop"
            />
          </div>

          <h1 className="text-2xl font-bold text-white p-4">
            Manage your household chores more effectively
          </h1>
          <div className="flex text-xs items-center justify-center font-bold text-zinc-400">
            Sign in with:
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-bold text-white p-4">
            <button
              className="border-2 border-transparent bg-blue-500 w-1/2 font-bold py-2 px-4 rounded-full"
              onClick={handleSignInWithEmail}
            >
              Email
            </button>
            <button
              className="border-2 border-zinc-400 bg-black w-1/2 font-bold py-2 px-4 rounded-full"
              onClick={signInWithGoogle}
            >
              Google
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-xs font-bold text-zinc-400">
            Don't have an account?{" "}
            <span className="text-white" onClick={signUpFunct}>
              Register here
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-xxs font-bold text-zinc-500 p-2">
            By continuing, you agree to the{" "}
            <span className="underline underline-offset-2" onClick={toggleTNC}>
              Terms and Conditions
            </span>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}

// 貼在 page.tsx 的最底下
function GiftPointsComponent() {
  const [points, setPoints] = useState('');

  const handleGift = async () => {
    if (!points) return alert('請輸入點數');
    const res = await fetch('/api/points', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pointsToSend: Number(points) }),
    });
    const data = await res.json();
    if (data.error) alert(data.error);
    else alert(data.message);
  };

  return (
    <div style={{ padding: '20px', background: '#fff0f6', borderRadius: '12px', margin: '20px 0', border: '2px dashed #f472b6' }}>
      <h3 style={{ color: '#db2777', fontWeight: 'bold', marginBottom: '10px' }}>💖 主方自由犒賞點數</h3>
      <input 
        type="number" 
        value={points} 
        onChange={(e) => setPoints(e.target.value)}
        placeholder="輸入想給的點數" 
        style={{ color: 'black', padding: '8px', marginRight: '10px', borderRadius: '6px', border: '1px solid #f472b6' }} 
      />
      <button onClick={handleGift} style={{ backgroundColor: '#ec4899', color: 'white', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold' }}>
        送出點數
      </button>
    </div>
  );
}
