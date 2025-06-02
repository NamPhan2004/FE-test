// App.jsx
import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// Để giải mã token lấy user info

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId="84683326107-7t6rnb7estngf22kn5qlh03gaurtffeb.apps.googleusercontent.com">
      <div style={{ padding: 30 }}>
        {!user ? (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // Giải mã credential JWT để lấy info user
              const userInfo = jwtDecode(credentialResponse.credential);

              setUser(userInfo);
              // userInfo có các trường: email, name, picture, ...
            }}
            onError={() => {
              alert("Đăng nhập Google thất bại!");
            }}
            useOneTap // Cho phép popup 1 chạm (tùy thích)
          />
        ) : (
          <div>
            <h3>Xin chào, {user.name}!</h3>
            <img
              src={user.picture}
              alt="avatar"
              width={50}
              style={{ borderRadius: 8 }}
            />
            <div>Email: {user.email}</div>
            <button
              onClick={() => {
                googleLogout();
                setUser(null);
              }}
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}
