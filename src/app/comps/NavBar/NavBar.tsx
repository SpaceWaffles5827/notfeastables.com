import React from "react";
import styles from "./index.module.css";
import Image from "next/image"

export default function NavBar() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <Image
                    className={styles.logo}
                    src={"/Feastables_Rebrand_Lockup_Tilted_1.avif"}
                    alt="Logo"
                    width={180}
                    height={60}
                />
                <h1 className={styles.option}>Feast</h1>
            </div>
            <div className={styles.right}>
                <Image
                    src={"/help_24dp_FILL0_wght400_GRAD0_opsz24.svg"}
                    width={35}
                    height={35}
                    alt=""
                />
                <Image
                    src={"/circle_24dp_FILL0_wght400_GRAD0_opsz24.svg"}
                    width={35}
                    height={35}
                    alt=""
                />
                <Image
                    src={"/sentiment_very_satisfied_24dp_FILL0_wght400_GRAD0_opsz24.svg"}
                    width={35}
                    height={35}
                    alt=""
                />
                <Image
                    src={"/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg"}
                    width={35}
                    height={35}
                    alt=""
                />
            </div>
        </div>
    );
}
