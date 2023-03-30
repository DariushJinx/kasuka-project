import styles from './Title.module.css';

export default function Title({title,par}) {
  return (
    <>
      <div className="subTitle__details d-flex align-items-center">
        <h4 className={`${styles.subTitle__details_title} ms-3`}>{title}</h4>
        <div className={`vr ${styles.subTitle__details_vr}`}></div>
      </div>

      <h2 className={`${styles.mainTitle} mt-2`}>{par}</h2>
    </>
  );
}
