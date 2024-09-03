import { useEffect, useState } from "react";

const CAT_PREFIX_URL = 'https://cataas.com';

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(()=>{ 
        if(!fact) return;
        //const firstWord = fact.split(' ').slice(0, 3).join(' ');
        //const firstWord = fact.split(' ', 3);
        const firstWord = fact.split(' ')[0];
        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        .then(res => res.json())
        .then(response => {
          console.log(response) 
          const { _id } = response
          const url = `/cat/${_id}/says/${firstWord}`
          const newUrl = `${CAT_PREFIX_URL}${url}`
          setImageUrl(newUrl)
        }) 
    }, [fact]);

    return {imageUrl};
}