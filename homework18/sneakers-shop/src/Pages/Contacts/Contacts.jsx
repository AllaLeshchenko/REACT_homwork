import styles from './Contacts.module.css';
import snapchatIcon from '../../assets/snapchat.png';
import facebookIcon from '../../assets/facebook.png';
import xIcon from '../../assets/x.png';

const News = () => {
  return (
    <section className={styles.newsSection}>
      <h1>Контакты</h1>
      <div className={styles.contactsSection}>
          <ul>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>
        <div className={styles.contactInfo}>
          <form className={styles.contactForm}>
            <div className={styles.input}>
              <input type="email" placeholder="Ваш email" required />
              <input type="text" placeholder="Ваше имя" required />
            </div>
            <input type="text" placeholder="Ваше сообщение" required />
          </form>
          <div className={styles.socialLinks}>
          <p>Найдите нас:</p>
          <div className={styles.icons}>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
                <img src={snapchatIcon} alt="Snapchat" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src={xIcon} alt="X" />
              </a>
          </div>
        </div>
      </div>

        
      </div>
      <button className={styles.button} type="submit">Отправить</button>
    </section>
  );
};

export default News;