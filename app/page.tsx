"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "./home.module.css";
import {openLink, PROJECT_LINKS, SOCIAL_LINKS} from "./utils/links";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // 10% chance to use lucky favicon
        if (Math.random() < 0.1) {
            const favicon = document.getElementById("favicon") as HTMLLinkElement;
            if (favicon) {
                favicon.href = "/images/pointer_lucky.ico";
            }
        }

        // Redirect mobile users to Instagram
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
        const isSmallWindow = window.innerWidth < 600 || window.innerHeight < 500;

        if (isMobile || isSmallWindow) {
            router.push(SOCIAL_LINKS.instagram);
        }
    }, [router]);

    return (
        <div className={styles.container}>
            {/* Socials Container */}
            <div className={styles.socialsContainer}>
                <Image
                    alt="GitHub"
                    className={styles.socialIcon}
                    onClick={() => openLink(SOCIAL_LINKS.github)}
                    src="/images/github.svg"
                    width={28}
                    height={28}
                    style={{cursor: "pointer"}}
                />
                <Image
                    alt="Instagram"
                    className={styles.socialIcon}
                    onClick={() => openLink(SOCIAL_LINKS.instagram)}
                    src="/images/instagram.svg"
                    width={28}
                    height={28}
                    style={{cursor: "pointer"}}
                />
            </div>

            {/* Top Bar */}
            <div className={styles.containerTopBar}>
                <div className={`${styles.controls} ${styles.controlsClose}`}>×</div>
                <div className={styles.controls}>−</div>
                <div className={styles.controls}>☐</div>
            </div>

            {/* Content */}
            <div className={styles.contentWrapper}>
                <h1>Gabi Minto</h1>

                <h2>About Me</h2>
                <p className={styles.aboutText}>
                    I'm an undergraduate computer science and engineering major at UC Merced, specializing in full-stack
                    development. I enjoy testing things out and making fun projects in my free time. Besides computer
                    science, I
                    enjoy listening to music, taking photos, and reading books.
                    <br/>
                    <br/>
                    This is a placeholder site. Projects below.
                </p>
            </div>

            {/* Projects Container */}
            <div className={styles.projectsContainer}>
                <div
                    className={styles.projectButton}
                    onClick={() => openLink(PROJECT_LINKS.codeForCause)}
                >
                    <p>Code For Cause</p>
                </div>

                <div
                    className={styles.projectButton}
                    onClick={() => openLink(PROJECT_LINKS.shareABite)}
                >
                    <p>ShareABite</p>
                </div>

                <div
                    className={styles.projectButton}
                    onClick={() => openLink(PROJECT_LINKS.chemAcademy)}
                >
                    <p>ChemAcademy</p>
                </div>

                <div
                    className={styles.projectButton}
                    onClick={() => openLink(PROJECT_LINKS.keepersLand)}
                >
                    <p>Keeper's Land</p>
                </div>

                <div
                    className={styles.githubButton}
                    onClick={() => openLink(PROJECT_LINKS.allProjects)}
                >
                    <svg
                        className={styles.externalLinkIcon}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
