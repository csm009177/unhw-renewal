'use client'

import React, { useState, useEffect } from "react";
import "/app/globals.css";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/signupForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId, pw: userPw, username:username }),
      });
      const data = await response.json();
      setMessage(data.message);
      router.push('/login')
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="SignUp">
      <div className="Lobby-RightCont">
        <h2>Sing UP</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User Id:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="userPw">User Pw:</label>
            <input
              type="userPw"
              id="userPw"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}