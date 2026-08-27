
  import { useEffect, useState } from 'react';
  import './App.css'
  import { Header } from './components/Header';
  import { Main } from './components/Main';
  import { SubMenu } from './components/SubMenu';
  import {Home} from './components/IndexPulse'
  import { CommunicationButton } from './backend/interfacesBackend/communicationButton';
  import { ButtonsByCategory, groupButtonsByCategory } from './backend/service/ButtonsByCategory';
  import { CircularProgressbar } from 'react-circular-progressbar';
  import 'react-circular-progressbar/dist/styles.css';
import { fetchAllButtons } from './backend/service/communicationService';


  function App() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [exibirHome, setExibirHome] = useState<boolean>(true);

  const [botoesAgrupados, setBotoesAgrupados] = useState<ButtonsByCategory>({});
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [percentage, setPercentage] = useState(0); 

   useEffect(() => {
    if (!exibirHome) {
      setIsTimeUp(false);
      setPercentage(0);
      setLoading(true);

      
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsTimeUp(true);
            return 100;
          }
          return prev + 20;
        });
      }, 1000);

      
      fetchAllButtons()
        .then((data: CommunicationButton[]) => {
          const agrupados = groupButtonsByCategory(data);
          setBotoesAgrupados(agrupados);
        })
        .catch((err) => console.error("Erro ao carregar botões:", err))
        .finally(() => setLoading(false));

      
      return () => clearInterval(interval);
    }
  }, [exibirHome]);



      useEffect(() => {
          window.speechSynthesis.getVoices();
        }, []);

          

    
  
      if(exibirHome){
          return <Home onEntrar={() => setExibirHome(false)} />;
      }
  
      const exibirLoading = loading || !isTimeUp;


  if (exibirLoading) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <p>Carregando dados da aplicação...</p>
        </div>
      </>
    );
  }

 
  return (
    <>
      <Header />
      {categoriaSelecionada === '' && (
        <Main onSelecionarCategoria={setCategoriaSelecionada} />
      )}

      {categoriaSelecionada && (
        <SubMenu
          CategoriaSelecionada={categoriaSelecionada}
          botoesDaCategoria={botoesAgrupados[categoriaSelecionada.toLowerCase()] || []}
          onSelecionarCategoria={setCategoriaSelecionada}
        />
      )}
      
      </>
    )
  }

  export default App

