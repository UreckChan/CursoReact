import './app.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from "./hooks/useCatFact.js";
import { Otro } from './components/Otro.jsx';



export function App() {

    const {fact, refreshFact} = useCatFact();
    const {imageUrl} = useCatImage({fact});

    const handleClick = async() => {
        refreshFact()
    }

    return (
        <main>
            <h1>App Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>

                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Imagen extraida de la primera palabra que es ${fact.split(' ')[0]}`} />}
        
            {/* <Otro/> */}
        
        </main>

    )
}