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
        console.log(id)
    }}
