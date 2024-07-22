import { createContext, useState } from "react";
import run from "../geminiconfig/gemini-config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
    setResultData("");
  };

  const formatResponse = (response) => {
    // Split response into lines to handle code blocks
    const lines = response.split("\n");
    let formattedResponse = "";
    let inCodeBlock = false;

    lines.forEach((line) => {
      if (line.trim().startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        formattedResponse += inCodeBlock ? "<pre><code>" : "</code></pre>";
      } else {
        formattedResponse += inCodeBlock ? `${line}\n` : `${line}<br>`;
      }
    });

    // Apply other formatting (bold and italic)
    formattedResponse = formattedResponse
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    return formattedResponse.split(" ");
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    const newResponseArray = formatResponse(response);
    newResponseArray.forEach((nextWord, index) => {
      delayPara(index, nextWord + " ");
    });

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    resultData,
    loading,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
