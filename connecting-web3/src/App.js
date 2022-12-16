import './App.css';
import 'bulma/css/bulma.min.css';

import {useState} from 'react';

function App() {

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount(){

    if(window.ethereum){
      console.log('detected')

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(accounts)
        setWalletAddress(accounts)
        
      } catch (error) {
        console.log(error)
      }



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

      <h1> 
        Wallet Address: {walletAddress}
      </h1>


      </header>
    </div>
  );
}

export default App;
