import styles from './Calling.module.css';

export default function Calling() {
  return (
    <div className={`${styles.calling} text-center`}>
        <div className="container">

          <h2 className={`${styles.calling__title}`}>فراخوانی برای اقدام</h2>

          <p className={`${styles.calling__par}`}>
          اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
          </p>

          <a href="#" className={`${styles.calling__links_link}`}>فراخوانی برای اقدام</a>

        </div>
    </div>
  )
}
