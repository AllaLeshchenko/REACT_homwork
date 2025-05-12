import Header from "./Header";
import Main from "./Main";
import styles from '../styles/App.module.css'


function App() {
  return (
    <div className={styles.App}>
         <Header/>
         <Main/> 
    </div>
  );
}

export default App;
