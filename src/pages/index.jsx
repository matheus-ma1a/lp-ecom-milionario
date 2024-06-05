import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pixel from '../components/pixel/facebook/pixel-1'
import Imagem from "@/components/image";
import Botao from "@/components/botao";


export default function Home() {
  const [email, setEmail] = useState('');
  const [contato, seContato] = useState('');
  const router = useRouter()

  function cadastroMailbiz(e) {
    e.preventDefault();

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json" 
     }
     
     let bodyContent = JSON.stringify({
       "email": email,
       "contato": contato
     });
     
     let reqOptions = {
       url: "https://hook.us1.make.com/2dy7gf4ds7rb3bp4wses8bquna26lbae",
       method: "POST",
       headers: headersList,
       data: bodyContent,
     }
     
    axios.request(reqOptions);

    console.log(email,contato);
    router.push('/obrigado');
  }

  return (
    <>
      <Pixel name='FACEBOOK_PIXEL_1' />
      <div className={styles.main}>
        <div className={styles.container}>
          <img src="\Ativo-6.svg" alt="" />
          <h1> Descubra a Estrutura de Campanhas Replicável que Gerou <b>mais de 7 Milhões de
            Faturamento</b> para Um Único E-commerce em Apenas 1 Ano.
          </h1>
        </div>
        <form className={styles.form} onSubmit={cadastroMailbiz} >
          <input
            className={styles.nome}
            type="text"
            placeholder='Whatsapp com DDD'
            value={contato}
            onChange={(e) => seContato(e.target.value)}
          />
          <input
            className={styles.email}
            type="email"
            name="email"
            placeholder='Seu melhor e-mail'
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className={styles.button} type="submit" value={'CLIQUE AQUI E RESERVE SUA VAGA'} />

          <div>
            <img src='\Camada_1-2 (2).svg' />
            <p>Dia 11/7, Às 20h Ao Vivo</p>
            <img src='\relgio.svg' />
          </div>
        </form>
      </div >

      <div className={styles.secao2}>
        <h1> O Melhor Método de Anúncios Online para E-commece
        </h1>
        <h3>
          Criamos uma Masterclass completa com o caminho <b>para gerar múltiplos 7 dígitos
            de faturamento pra qualquer e-commerce.</b>
        </h3>
        <ul className={styles.cards}>
          <li>
            <Imagem src={'/img01.webp'} />
            Descubra como criar campanhas de anúncios online que vão vender muito
            o ano todo. Seu cliente ganha e você também.

          </li>
          <li>
            <Imagem src={'/img02.webp'} />
            O ponto cego que impede 9 em cada 10 gestores de tráfego de
            conquistarem clientes de e-commerce e receberem enormes comissões por
            venda.

          </li>
          <li>
            <Imagem src={'/img03.webp'} />
            Conheça os fundamentos para transformar pequenas lojas virtuais em
            empresas de grande faturamento e enriquecer através da gestão de tráfego.

          </li>
        </ul>
      </div>

      <div className={styles.secao3} >
        <h1>Pra quem é essa Masterclass?</h1>
        <ul>
          <div>
            <p>01</p>
            <li><p>Iniciantes no tráfego pago sem tempo a perder e que desejam dar<br></br> os primeiros
              passos na direção certa no mercado de e-commerce</p></li>
          </div>
          <div>
            <p>02</p>
            <li><p>Gestores de tráfego que estão cansados de aplicar métodos comuns<br></br> de tráfego pago
              pra clientes de e-commerce e não terem resultado.</p></li>
          </div>
          <div>
            <p>03</p>
            <li><p>Gestores de tráfego experientes, que desejam escalar a sua agência <br></br>de tráfego
              dominando o nicho mais rentável do mercado digital.</p></li>
          </div>
        </ul>
      </div>

      <div className={styles.secao4} >
        <div>
          <div>
            <h1>Lucas Renault</h1>
            <h2>O REI DO TRÁFEGO</h2>
            <p>Lucas Renault é gestor de tráfego profissional e empresário, CEO da Agência Rei, onde gerencia mais de 201 clientes. Todos de e-commerce, dos mais diversos segmentos. Somente em 2023 investiu mais de 24 milhões de reais em anúncios online para ecommerce e gerou um faturamento de 181 milhões de reais, vindos exclusivamente desses anúncios. Como educador, Lucas transformou vidas através de seus treinamentos e hoje tem mais de 11.100 alunos gestores de tráfego que formou através do conceito #ROInoTalo, um método único que entrega grande retorno sobre investimento nas campanhas de anúncios online.</p>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className={styles.secao5} >
        <div>

          <div>
            <h1>Uiara Freitas</h1>
            <h2>UIARA INTIMATES</h2>
            <p>Criadora da Uiara Intimates e da Versiani Swim, Uiara Freitas é empresária de longa data e responsável por movimentar mais de 7 milhões de reais por ano no mundo do ecommerce de moda. Depois de construir um negócio milionário e de muito sucesso, com coleções exclusivas de grandes celebridades como Luciana Gimenez, ela vai te mostrar o passo a passo para construir uma loja virtual de excelência, ainda que você esteja começando, além de te ajudar a criar processos bem definidos, de alta lucratividade e o melhor, fazer com que seus clientes sejam apaixonados pela sua marca.</p>
          </div>

        </div>
        <div>
          <Botao />
        </div>
      </div>

      <div className={styles.secao6} >
        <div>
          <img width={270} src="/Ativo-6.svg" alt="" />
          <p>ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc. Nós NÃO compartilharemos seu endereço de e-mail com ninguém. Você pode cancelar sua inscrição a qualquer momento. Ao se cadastrar você está concordando com a nossa política de privacidade e termos de uso. CNPJ: 38312105000159 | Copyright © Segredos do E-commerce Milionário – Todos os direitos reservados.</p>
        </div>
      </div>

    </>
  );
}
