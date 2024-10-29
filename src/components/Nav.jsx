import React from 'react';
import "../css/style.css"

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Início</a></li>
        <li>
          <a href="#produtos">Produtos</a>
          <ul>
            <li><a href="#brinquedos-educativos">Brinquedos Educativos</a></li>
            <li><a href="#brinquedos-de-construcao">Brinquedos de Construção</a></li>
            <li><a href="#bonecas">Bonecas</a></li>
            <li><a href="#veiculos">Veículos</a></li>
          </ul>
        </li>
        <li><a href="#ofertas">Ofertas</a></li>
        <li><a href="#sobre">Sobre Nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

