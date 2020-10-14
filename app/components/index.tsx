/* eslint-disable */
import React,{useContext,useEffect} from 'react';
import {UserContext,LanguageContext} from "../context/context"
/*eslint-enable*/
// import ReactDOM from 'react-dom';
// import Routes from './routes';
import './index.css';

function App() {
  const use = useContext(UserContext);
  const lang = useContext(LanguageContext);
  console.log(use.state);
  console.log(lang.state.language);
  useEffect(() => {
    use.dispatch.login('email', 'pass');
    lang.dispatch.setLanguage('fr');
  }, []);

  return (
    <div className="App">
      <p className="App-intro">Get Started</p>
    </div>
  );
}

export default App;
