import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pixel from '../components/pixel/facebook/pixel-1'
import Imagem from "@/components/image";


export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter()

  // function cadastroMailbiz(e) {
  //   e.preventDefault();
  //   const options = {
  //     method: 'POST',
  //     url: `https://mbiz.mailclick.me/api.php/Subscriber.Subscribe?APIKey=${process.env.API_KEY}&Command=Subscriber.Subscribe&ResponseFormat=JSON&ListID=13848&EmailAddress=${email}&CustomField1=${nome}&IPAddress=12`
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   router.push('/obrigado');
  // }

  return (
    <>
      <Pixel name='FACEBOOK_PIXEL_1' />
      <div className={styles.main}>
        <div className={styles.container}>
          <img src="\Ativo-6.svg" alt="" />
          <div>
            <img src='\Camada_1-2 (2).svg' />
            <p>Dia 11/7, Às 20h Ao Vivo
            </p>
          </div>
          <h1> Descubra a Estrutura de Campanhas Replicável que Gerou <b>mais de 7 Milhões de
            Faturamento</b> para Um Único E-commerce em Apenas 1 Ano.
          </h1>
        </div>
        <form className={styles.form} >
          <input
            className={styles.nome}
            type="text"
            placeholder='Whatsapp com DDD'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
        </form>
      </div >

      <div className={styles.contentForm}>
        <div className={styles.circulo}></div>

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

      <div className={styles.secao2} >
      </div>
    </>
  );
}
