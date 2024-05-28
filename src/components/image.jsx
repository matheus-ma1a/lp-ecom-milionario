import styles from "../styles/Home.module.css";

function imagem({src}) {
    return ( 
        <img className={styles.imagem} src={src} alt="" />
     );
}

export default imagem;