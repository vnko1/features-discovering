import { Button } from "@/components";
import { IconsEnum } from "@/types";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button className={styles.btn} icon={IconsEnum.Arrow}>
        Безкоштовні уроки
      </Button>
    </main>
  );
}
