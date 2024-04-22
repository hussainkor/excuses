import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [advice, setAdvice] = useState("Excuse will appear here");
  const [count, setCount] = useState(0);
  const [excuseType, setExcuseType] = useState("");

  async function fetchData(excuse) {
    const res = await fetch(
      `https://excuser-three.vercel.app/v1/excuse/${excuse}`
    );
    const data = await res.json();
    setAdvice(data[0].excuse);
    setCount(data[0].id);
    setExcuseType(excuse);
    console.log(excuse);
  }

  useEffect(() => {
    fetchData("college");
  }, []);

  return (
    <div className="excuse-box">
      <p>{`Excuses No.: ${count}`}</p>
      <h4>{advice}</h4>
      <button
        className={excuseType === "family" ? "active" : ""}
        onClick={() => fetchData("family")}
      >
        Family
      </button>
      <button
        className={excuseType === "college" ? "active" : ""}
        onClick={() => fetchData("college")}
      >
        College
      </button>
      <button
        className={excuseType === "party" ? "active" : ""}
        onClick={() => fetchData("party")}
      >
        Party
      </button>
    </div>
  );
}

export default App;
