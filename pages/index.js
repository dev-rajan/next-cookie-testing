import { useState } from "react";
import { getCookie, removeCookies, setCookies } from "cookies-next";

function App() {
  const [crossCookie, setCrossCookie] = useState("");
  const [normalCookie, setNormalCookie] = useState("");

  const handleAdd = () => {
    setCookies("abc", "Cross Domain Cookie", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
  };

  const handleRead = () => {
    setCrossCookie(
      getCookie("abc", {
        path: "/",
      })
    );
  };

  const handleRemove = () => {
    removeCookies("abc", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
  };

  const handleNormalAdd = () => {
    setCookies("abcNormal", "Normal Local Cookie", {
      path: "/",
    });
  };

  const handleNormalRead = () => {
    setNormalCookie(
      getCookie("abcNormal", {
        path: "/",
      })
    );
  };

  const handleNormalRemove = () => {
    removeCookies("abcNormal", {
      path: "/",
    });
  };

  return (
    <div className="App">
      <h1>
        {process.env.NEXT_PUBLIC_DOMAIN} CROSS SESSION COOKIE TEST IN NEXTJS
      </h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRead}>Read Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {crossCookie}</div>
      <h1>
        {process.env.NEXT_PUBLIC_DOMAIN} LOCAL SESSION COOKIE TEST IN NEXTJS
      </h1>
      <button onClick={handleNormalAdd}>Add Normal Cookie</button> &nbsp;
      <button onClick={handleNormalRead}>Read Normal Cookie</button> &nbsp;
      <button onClick={handleNormalRemove}>Remove Normal Cookie</button>
      <br />
      <div>Cookie: {normalCookie}</div>
    </div>
  );
}

export default App;
