/**
 * File Login.jsx - Component trang đăng nhập Instagram
 * Component này tạo giao diện đăng nhập giống Instagram với:
 * - Phần carousel ảnh bên trái
 * - Form đăng nhập bên phải
 * - Phần đăng ký và footer bên dưới
 */
import React, { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import carouselImg from "./assets/login-image.png"; // Ảnh mô phỏng carousel
import Home from "./Home";

export default function InstagramLogin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID || "1099747145540524";

  const handleFacebookSuccess = async (response) => {
    try {
      setIsLoading(true);
      setError("");
      console.log("Login Success!", response);

      if (response.accessToken) {
        // Lấy thông tin người dùng
        const userResponse = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${response.accessToken}`
        );
        const userData = await userResponse.json();

        if (userData.error) {
          throw new Error(userData.error.message);
        }

        console.log("User Data:", userData);
        setUser(userData);
      } else {
        throw new Error("Facebook login failed. Missing access token.");
      }
    } catch (err) {
      console.error("Facebook login error:", err);
      setError(err.message || "Facebook login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookFailure = (error) => {
    console.error("Login Failed!", error);
    setError("Facebook login failed. Please try again.");
    setIsLoading(false);
  };

  // Nếu đã đăng nhập, hiển thị trang Home
  if (user) {
    return <Home user={user} />;
  }

  // Nếu chưa đăng nhập, hiển thị trang Login
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Main content container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%",
          maxWidth: "935px",
        }}
      >
        {/* Left column: Carousel image */}
        <div
          style={{
            width: "auto",
            height: 450,
            display: "flex",
            alignItems: "center",
            marginRight: "32px",
          }}
        >
          <img
            src={carouselImg}
            alt="Instagram carousel"
            style={{
              width: "auto",
              height: 450,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right column: Login / Signup */}
        <div
          style={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {/* Login Card */}
          <div
            style={{
              backgroundColor: "#000",
              border: "1px solid #262626",
              borderRadius: "1px",
              padding: "40px",
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Instagram Logo */}
            <h1
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontStyle: "italic",
                fontSize: "45px",
                color: "#fff",
                margin: "0 0 40px",
              }}
            >
              Instagram
            </h1>

            <form style={{ width: "100%" }}>
              {/* Username/Email/Phone Input */}
              <div style={{ marginBottom: "6px" }}>
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  style={{
                    width: "100%",
                    padding: "12px 8px",
                    background: "#262626",
                    border: "1px solid #262626",
                    borderRadius: "3px",
                    color: "#fff",
                    fontSize: "12px",
                    outline: "none",
                    disabled: isLoading,
                  }}
                />
              </div>

              {/* Password Input */}
              <div style={{ marginBottom: "14px" }}>
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    width: "100%",
                    padding: "12px 8px",
                    background: "#262626",
                    border: "1px solid #262626",
                    borderRadius: "3px",
                    color: "#fff",
                    fontSize: "12px",
                    outline: "none",
                    disabled: isLoading,
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div
                  style={{
                    color: "#ed4956",
                    fontSize: "14px",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "7px 16px",
                  backgroundColor: "#3441af",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  marginBottom: "16px",
                  disabled: isLoading,
                }}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>

              {/* OR Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 0 18px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "#262626",
                  }}
                />
                <span
                  style={{
                    margin: "0 18px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#737373",
                  }}
                >
                  OR
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "#262626",
                  }}
                />
              </div>

              {/* Facebook Login */}
              <FacebookLogin
                appId={FB_APP_ID}
                onSuccess={handleFacebookSuccess}
                onFail={handleFacebookFailure}
                initParams={{
                  version: "v18.0",
                  cookie: true,
                  xfbml: true,
                }}
                scope="public_profile,email"
                fields="id,name,email,picture"
                language="vi_VN"
                auth_type="rerequest"
                returnScopes={true}
                use_continue_as={true}
                render={({ onClick }) => (
                  <button
                    onClick={onClick}
                    disabled={isLoading}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "rgb(53, 121, 234)",
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "20px",
                      opacity: isLoading ? 0.7 : 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="rgb(53, 121, 234)"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    {isLoading
                      ? "Đang đăng nhập..."
                      : "Đăng nhập bằng Facebook"}
                  </button>
                )}
              />

              {/* Forgot Password */}
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "rgb(112, 141, 255)",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </form>
          </div>

          {/* Sign Up Card */}
          <div
            style={{
              backgroundColor: "#000",
              border: "1px solid #262626",
              borderRadius: "1px",
              padding: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#fff", fontSize: "14px" }}>
              Don't have an account?{" "}
              <a
                href="#"
                style={{
                  color: "rgb(112, 141, 255)",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "auto",
          paddingTop: "24px",
          width: "100%",
          maxWidth: "1024px",
        }}
      >
        {/* Footer Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          {[
            "Meta",
            "About",
            "Blog",
            "Jobs",
            "Help",
            "API",
            "Privacy",
            "Terms",
            "Locations",
            "Instagram Lite",
            "Threads",
            "Contact Uploading & Non-Users",
            "Meta Verified",
          ].map((text, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                color: "#737373",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            color: "#737373",
            fontSize: "12px",
            marginTop: "12px",
          }}
        >
          <select
            style={{
              background: "none",
              border: "none",
              color: "#737373",
              fontSize: "12px",
              marginRight: "16px",
            }}
          >
            <option value="en">English</option>
          </select>
          © 2024 Instagram from Meta
        </div>
      </footer>
    </div>
  );
}
