import styles from "./About.module.css";

export const metadata = {
  title: "About Page",
  description: "",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>About page</h1>
    </div>
  );
};

export default AboutPage;
