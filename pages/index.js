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
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      })
    );
  };

  const handleRemove = () => {
    removeCookies("abc", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
  };

  return (
    <div className="App">
      <h1>PROGRAMMIZ SESSION COOKIE TEST IN NEXTJS</h1>
      <button onClick={handleAdd}>Add Cookie</button> &nbsp;
      <button onClick={handleRead}>Read Cookie</button> &nbsp;
      <button onClick={handleRemove}>Remove Cookie</button>
      <br />
      <div>Cookie: {cookieValue}</div>
    </div>
  );
}

export default App;
