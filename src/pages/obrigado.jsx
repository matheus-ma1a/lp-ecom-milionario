import styles from "../styles/obrigado.module.css";
import Pixel from '../components/pixel/facebook/pixel-1'
import { useEffect } from "react";
import ProgressBar from "@/components/pixel/facebook/progresbar";



export default function Home() {

    useEffect(() => {
        fbq('track', 'Lead');
    }, [])

    return (
        <>
            <Pixel name='FACEBOOK_PIXEL_1' />
            <div className={styles.mainObrigado}>

                <div className={styles.wapper}>

                    <div className={styles.headline}>
                        <h1>Falta pouco pra você descobrir...</h1>
                        <h2>...os segredos do e-commerce milionário</h2>
                        <ProgressBar percentage={85} />

                    </div>

                    <div className={styles.listContent}>
                        <div>
                            <p>
                                01
                            </p>
                        </div>
                        <div>
                            <h3>Entre no Grupo de WhatsApp</h3>
                            <p>
                                Para finalizar sua inscrição, clique no botão abaixo e entre para o grupo do WhatsApp, somente lá você terá acesso a informações privilegiadas.
                            </p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div>
                            <p>
                                02
                            </p>
                        </div>
                        <div>
                            <h3>Confirme seu e-mail</h3>
                            <p>
                                Acesse a sua caixa de e-mail, procure a mensagem que eu te enviei e clique no link para confirmar a sua inscrição. Você receberá um presente logo após a confirmação.
                            </p>
                        </div>
                    </div>

                    <div className={styles.butaoWapp}>
                        <img width={15} src="/Vector.png" alt="" />
                        <a className={styles.buttonObg} href="https://devzapp.com.br/api-engennier/campanha/api/redirect/63c086109243310001e35796">ENTRAR NO GRUPO FECHADO DE WHATSAPP</a>
                    </div>

                    <div className={styles.footer}>
                        <img width={270} src="/Ativo-6.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
