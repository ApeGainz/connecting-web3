import './App.css';
import 'bulma/css/bulma.min.css';

function App() {

  async function requestAccount(){

    if(window.ethereum){
      console.log('detected')
    }
    else{
      console.log('metamask not detected')
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <button
        class="button is-large is-info"
        onClick={requestAccount}
      >
        Connect wallet!
      </button>


      </header>
    </div>
  );
}

export default App;
