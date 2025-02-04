import Header from "../components/header";
import styles from "../components.style/main.module.scss";
const FirstPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.videoBackground}>
        <video autoplay="" muted loop>
          <source
            src="/public/bg-video.webm"
            width={"100vw"}
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>

      </div>
    </div>
  );
};

export default FirstPage;
