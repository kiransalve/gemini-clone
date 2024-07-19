import { createContext, useState } from "react";
import run from "../geminiconfig/gemini-config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentInput, setRecentInput] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    await run(input);
  };
  const contextValue = {
    input,
    setInput,
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentInput,
    setRecentInput,
    showResult,
    setShowResult,
    resultData,
    loading,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
