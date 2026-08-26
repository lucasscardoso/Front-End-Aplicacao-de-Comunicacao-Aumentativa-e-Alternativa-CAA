
  import { useEffect, useState } from 'react';
  import './App.css'
  import { Header } from './components/Header';
  import { Main } from './components/Main';
  import { SubMenu } from './components/SubMenu';
  import {Home} from './components/IndexPulse'
  


  function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [exibirHome, setExibirHome] = useState<boolean>(true);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

    if(exibirHome){
      return <Home onEntrar={() => setExibirHome(false)} />;
    }

    
  
    return (
      <>
      
      <Header/>

      {categoriaSelecionada === '' && (
        <Main onSelecionarCategoria={setCategoriaSelecionada}/>
        )}

      {categoriaSelecionada && (
        <SubMenu 
        CategoriaSelecionada={categoriaSelecionada}
        onSelecionarCategoria={setCategoriaSelecionada}/>
        )}
      
      
      </>
    )
  }

  export default App

