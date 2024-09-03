import{useCatImage} from '../hooks/useCatImage';

export function Otro() {
    const {imageUrl} = useCatImage({fact: 'gatitos'});
    
    return (
    <>
        {imageUrl && <img src={imageUrl}  />}
    </>
    )
}