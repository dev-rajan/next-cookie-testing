import { getCookie, removeCookies, setCookies } from "cookies-next";
import { useState } from "react";

function App() {
  const [cookieValue, setCookieValue] = useState("");

  const handleAdd = () => {
    setCookies("abc", "Next Test Cookie", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
  };

  const handleRead = () => {
    setCookieValue(
      getCookie("abc", {
        path: "/",
      })
    );
  };

  const handleRemove = () => {
    removeCookies("abc", {
      path: "/",
      domain: process.env.REACT_APP_DOMAIN,
    });
  };

  const handleNormalAdd = () => {
    setCookies("abcNormal", "Next Test Cookie", {
      path: "/",
    });
  };

  const handleNormalRead = () => {
    setCookieValue(
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
      <div>Cookie: {cookieValue}</div>
      <h1>
        {process.env.NEXT_PUBLIC_DOMAIN} LOCAL SESSION COOKIE TEST IN NEXTJS
      </h1>
      <button onClick={handleNormalAdd}>Add Normal Cookie</button> &nbsp;
      <button onClick={handleNormalRead}>Read Normal Cookie</button> &nbsp;
      <button onClick={handleNormalRemove}>Remove Normal Cookie</button>
      <br />
      <div>Cookie: {cookieValue}</div>
    </div>
  );
}

export default App;
