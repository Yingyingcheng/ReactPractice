import { useState, useEffect } from "react";

const createConnection = () => {
  return {
    connect() {
      console.log("Connecting...");
    },
    disconnect() {
      console.log("Disconnected...");
    },
  };
};

// React will call your cleanup function each time before the Effect runs again,
// and one final time when the component unmounts (gets removed).
export default function SynchronizeEffect() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    }; // return a cleanup function from your Effect
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(window.scrollX, window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
