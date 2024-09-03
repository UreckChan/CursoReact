import { useEffect, useState } from "react";

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENPOINT_URL = `https://cataas.com/cat/says/${firstWord}`;

export function App() {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
 
    useEffect(()=>{
        fetch(CAT_ENPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                
                const { fact } = data
                setFact(fact)


                //const firstWord = fact.split(' ').slice(0, 3).join(' ');
                //const firstWord = fact.split(' ', 3);
                const firstWord = fact.split(' ')[0];
                console.log(firstWord);

                fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                .then(res => res.json())
                .then(response => {
                  const { _id } = response
                  const url = `/cat/${_id}/says/${firstWord}`
                  setImageUrl(url)
                })


            })
    }, []);

    return (
        <main>
            <h1>Gatito</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen extraida de la primera palabra que es ${fact}`} />}
        </main>
  );
}