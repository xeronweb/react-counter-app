export const getImagen = async() => {
    try {

        const apiKey = 'qQQ2AkKACeRfa2wMj4Fhc0sGqpXzd6la';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

        return url;

    } catch (error) {
        reject( 'No existe el gif' );
    }    
}



