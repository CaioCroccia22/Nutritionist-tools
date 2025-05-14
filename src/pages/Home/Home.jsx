import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className={styles.homeContent}>
                <div className={styles.homeContentElements}>
                    <div className={styles.homeContentText}>
                        <h1 className={styles.homeContentTextTitle}>Nutricionist App</h1>
                        <p className={styles.homeContentTextSubTitle}>O melhor app para nutricionista de todo o Brasil</p>
                    </div>
                    <div className={styles.homeContentButtons}>
                        <Link to="/Dashboard">
                            <button className={styles.loginButton}>Login</button>
                        </Link>
                        <button className={styles.registerButton}>Sign in</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;