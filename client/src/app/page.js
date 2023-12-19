import styles from "./page.module.css";

import { HeroContainer } from "@/components/styles/globalStyles";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroContainer>
        <HeroSection />
      </HeroContainer>
    </main>
  );
}
