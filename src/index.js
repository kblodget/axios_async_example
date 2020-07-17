import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useArticle from "./useArticle";

//import axios from "axios";
import "./styles.css";

function App() {
  //const [articles, setArticles] = useState([]);
  const [articleArray, setArticleArray] = useState([]);
  const { fetchArticles } = useArticle;

  const getArticles = () => {
    (async () => {
      setArticleArray(await fetchArticles());
      console.log("getArticles: articleArray");
      console.log(articleArray);
    })();
  };

  // To get rid of the eslint error  missing dependency warning
  // ESLint rule "react-hooks/exhaustive-deps" will always fail
  //on empty dependency lists.
  // useMount when your effect function needs something from props
  //but never needs to run again without linter warnig:
  const useMountEffect = func => useEffect(func, []);
  useMountEffect(getArticles);

  /*
  useEffect(() => {
    setArticles(fetchArticles());
    console.log("UseEffect: articleArray");

    console.log(articles);
  }, [fetchArticles]);
*/

  const displayArticles = () => {
    console.log("displayArticle: articleArray");
    console.log(articleArray);
    /*
    return (
      <div>
        {articleArray[0].map((item, i) => (
          <p key={i}>Title: {item.featuredImage}</p>
        ))}
      </div>
    );
    */
  };

  return (
    <div className="App">
      <h1>Axios, Async, await Example</h1>
      <button onClick={displayArticles}>Click</button>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
