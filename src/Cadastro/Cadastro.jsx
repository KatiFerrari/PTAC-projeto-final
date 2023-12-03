import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| []
    const [titulo, setTitulo] = useState("")
    const [nome, setNomeMusc ] = useState("");
    const [letra, setLetra ] = useState("");
    const [artista, setCantor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [link, setLink] = useState("");
    const [lista, setLista ] = useState(listaLocalStorage || []);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                titulo: titulo, 
                nome: nome, 
                letra: letra, 
                artista: artista,
                descricao: descricao,
                data: data,
                id: id,
                link: link
        }]);

        setTitulo(id + 1);
        setNomeMusc("");
        setLetra("");
        setCantor("");
        setDescricao("");
        setData("");
        setId("");
        setLink("");
  
    }

     return(
      <div className="container">
      <div className="botões">
          <h1 className="title">Cadastro de Videos</h1>

          <form class="form" onSubmit={salvar}>
                <h2 class="text">Titulo</h2>
                  <input value={titulo}
                      onChange={(e) => setTitulo(e.target.value)} />

                <h2 class="text">Nome da Música</h2>
                  <input value={nome}
                      onChange={(e) => setNomeMusc(e.target.value)} />

                <h2 class="text">Letra da Música</h2>
                  <input value={letra}
                      onChange={(e) => setLetra(e.target.value)} />

               <h2 class="text">Nome do Cantor</h2>
                  <input value={cantor}
                      onChange={(e) => setCantor(e.target.value)} />

               <h2 class="text">Data de Publicação</h2>
                  <input value={data}
                      onChange={(e) => setData(e.target.value)} />

               <h2 class="text">Código Vídeo</h2>
                  <input value={id}
                      onChange={(e) => setId(e.target.value)} />

              <h2 class="text">Link</h2>
                  <input value={link}
                      onChange={(e) => setLink(e.target.value)} />
                       </form>       

    </div>
</div>
     )}
