
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
      // 1. Reseta os estados de carregamento
      setIsTimeUp(false);
      setPercentage(0);
      setLoading(true);

      // 2. Inicia o timer com incrementos de 20 a cada 1 segundo (1000ms)
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

      // 3. Chamada da API
      fetch('/api/buttons/findallbuttons')
        .then((res) => res.json())
        .then((data: CommunicationButton[]) => {
          const agrupados = groupButtonsByCategory(data);
          setBotoesAgrupados(agrupados);
        })
        .catch((err) => console.error("Erro ao carregar botões:", err))
        .finally(() => setLoading(false));

      // 4. Limpeza do intervalo caso o componente desmonte
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

  // Tratamento visual enquanto traz os dados da API Java
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

 

 

  if (loading) return <div>Carregando botões...</div>;


 

  return (
    <>
      <Header />

      {/* Renderiza as opções principais (com as imagens fixas) */}
      {categoriaSelecionada === '' && (
        <Main onSelecionarCategoria={setCategoriaSelecionada} />
      )}

      {/* Renderiza o SubMenu passando a lista dinâmica filtrada pela chave */}
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

