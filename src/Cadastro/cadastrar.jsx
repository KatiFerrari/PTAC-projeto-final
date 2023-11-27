import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Cadastar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
   const [NomeDaMusica, setNomeMusc ] = useState("");
   const [Letra, setLetra ] = useState("");
   const [Artista, setCantor] = useState("");
   const [Link, setLink] = useState("");
   const [lista, setLista ] = useState(listaLocalStorage || []);
   const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, marca:marca, preco:preco, img:img,

                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
        setImg("");
        console.log(id)
    }}
