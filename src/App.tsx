
  import { useEffect, useState } from 'react';
  import './App.css'
  import { Header } from './components/Header';
  import { Main } from './components/Main';
  import { SubMenu } from './components/SubMenu';


  function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);
  
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

