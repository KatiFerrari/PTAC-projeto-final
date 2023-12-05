export default function Card({video}){
<div>
       
        <h1>PTAC 2 - PROJETO FINAL</h1>

        {lista.map((video) =>
        <div className= "">
        <p>{video.titulo}</p>
        <p>{video.nome}</p>
        <p>{video.letra}</p>
        <p>{video.artista}</p>
        <p>{video.descricao}</p>
        <p>{video.data}</p>
        <p>{video.id}</p>
        
        <p>{video.link}</p>
        
      </div>
        
     )}

     </div>


}