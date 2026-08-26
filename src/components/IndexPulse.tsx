import '../css/index-pulse.css'
import{HomeProps} from '../interfaces/HomeProps'

export function Home({onEntrar} : HomeProps){
   return (

    <div className="home-page">
        <button className="btn neon-pulse" onClick={onEntrar}>
              <span>Começar</span>
        </button>
    </div>
        
   ) 
}
