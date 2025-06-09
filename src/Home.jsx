import React from "react";

export default function Home({ user }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: "245px",
          borderRight: "1px solid #262626",
          padding: "8px 12px 20px",
          position: "fixed",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Instagram Logo */}
        <div style={{ padding: "25px 12px 16px", marginBottom: "19px" }}>
          <h1
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "24px",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Instagram
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav style={{ flex: 1 }}>
          <MenuItem icon="🏠" text="Home" active />
          <MenuItem icon="🔍" text="Search" />
          <MenuItem icon="🧭" text="Explore" />
          <MenuItem icon="📹" text="Reels" />
          <MenuItem icon="💬" text="Messages" />
          <MenuItem icon="❤️" text="Notifications" />
          <MenuItem icon="➕" text="Create" />
          <MenuItem
            icon={
              user?.picture?.data?.url ? (
                <img
                  src={user.picture.data.url}
                  alt="profile"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                "👤"
              )
            }
            text="Profile"
          />
        </nav>

        {/* More Menu */}
        <MenuItem icon="☰" text="More" />
      </div>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          marginLeft: "245px",
          padding: "20px",
          maxWidth: "630px",
          margin: "0 auto",
        }}
      >
        {/* Posts Feed */}
        <div style={{ maxWidth: "470px", margin: "0 auto" }}>
          <EmptyFeed />
        </div>
      </main>

      {/* Right Sidebar */}
      <div
        style={{
          width: "319px",
          position: "fixed",
          right: 0,
          top: 0,
          padding: "30px 0",
          height: "100vh",
        }}
      >
        {/* User Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 16px 16px 24px",
          }}
        >
          {user?.picture?.data?.url ? (
            <img
              src={user.picture.data.url}
              alt="profile"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                marginRight: "12px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "#262626",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              👤
            </div>
          )}
          <div>
            <div style={{ fontWeight: 500 }}>{user?.name || "User Name"}</div>
            <div style={{ color: "#737373", fontSize: "14px" }}>
              {user?.email || "email@example.com"}
            </div>
          </div>
          <button
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              color: "#0095f6",
              fontWeight: 500,
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Switch
          </button>
        </div>

        {/* Suggested Users */}
        <div style={{ padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{ color: "#737373", fontWeight: 500, fontSize: "14px" }}
            >
              Suggested for you
            </span>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              See All
            </button>
          </div>

          {/* Suggested User Items */}
          <SuggestedUser name="user1" followed="Followed by user2" />
          <SuggestedUser name="user3" followed="Followed by user4" />
          <SuggestedUser name="user5" followed="Suggested for you" />
        </div>

        {/* Footer Links */}
        <footer style={{ padding: "0 24px", marginTop: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "12px",
              color: "#737373",
              marginBottom: "16px",
            }}
          >
            {[
              "About",
              "Help",
              "Press",
              "API",
              "Jobs",
              "Privacy",
              "Terms",
              "Locations",
              "Language",
              "Meta Verified",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#737373",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={{ color: "#737373", fontSize: "12px" }}>
            © 2024 INSTAGRAM FROM META
          </div>
        </footer>
      </div>
    </div>
  );
}

// Menu Item Component
function MenuItem({ icon, text, active }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        gap: "16px",
        width: "100%",
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        marginBottom: "4px",
        fontWeight: active ? "700" : "normal",
        backgroundColor: active ? "#121212" : "transparent",
      }}
    >
      <span style={{ fontSize: "24px" }}>{icon}</span>
      {text}
    </button>
  );
}

// Suggested User Component
function SuggestedUser({ name, followed }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "#262626",
          marginRight: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        👤
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", fontWeight: 500 }}>{name}</div>
        <div style={{ color: "#737373", fontSize: "12px" }}>{followed}</div>
      </div>
      <button
        style={{
          background: "none",
          border: "none",
          color: "#0095f6",
          fontWeight: 500,
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        Follow
      </button>
    </div>
  );
}

// Empty Feed Component
function EmptyFeed() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 0",
        color: "#737373",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          marginBottom: "12px",
        }}
      >
        👋
      </div>
      <h2
        style={{
          fontSize: "16px",
          fontWeight: 500,
          marginBottom: "8px",
        }}
      >
        Welcome to Instagram
      </h2>
      <p
        style={{
          fontSize: "14px",
        }}
      >
        Follow your friends and start sharing photos
      </p>
    </div>
  );
}
