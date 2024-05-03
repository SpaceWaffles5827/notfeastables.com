import styles from "./page.module.css";
import NavBar from "./comps/NavBar/NavBar";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.main}>
            <NavBar />
            <section className={styles.sectionOne}>
                <div className={styles.floater}>
                    <div className={styles.flagContainer}>
                        <Image
                            className={styles.flag}
                            src={"/icon-flag-worlds-best-chocolate.svg"}
                            width={651}
                            height={364}
                            alt="Picture of the author"
                        />
                    </div>
                    <Image
                        className={styles.flightItemOne}
                        src={"/icon-air-balloon-chocolate.svg"}
                        width={61}
                        height={89}
                        alt="Picture of the author"
                    />
                    <Image
                        className={styles.flightItemTwo}
                        src={"/icon-parachute-chocolate.svg"}
                        width={61}
                        height={89}
                        alt="Picture of the author"
                    />
                    <Image
                        className={styles.heroImage}
                        src={"/hp-hero-bw-desktop_3.webp"}
                        width={2072}
                        height={1161}
                        alt="Picture of the author"
                    />
                </div>
            </section>
            <h1>Not Feastables</h1>
        </div>
    );
}