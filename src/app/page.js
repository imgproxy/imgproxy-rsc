import Link from 'next/link';
import Day from './components/day';
import styles from './page.module.css';

const getDays = () => {
  const dates = [];
  for (let i = 0; i < 5; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - i);
    dates.push(newDate.toISOString().split('T')[0]);
  }
  return dates;
};

export default async function Home({ searchParams }) {
  const dayLinks = [];
  const days = getDays();
  const activeDay = searchParams.day;

  for (let i = 0; i < days.length; i++) {
    dayLinks.push(
      <li key={days[i]}>
        <Link
          className={`${styles.link} ${
            days[i] === activeDay ? styles.linkActive : ''
          }`}
          href={`/?day=${days[i]}`}
        >
          {days[i]}
        </Link>
      </li>
    );
  }

  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.title}>Next.js + Imgproxy</h1>
        <div className={styles.wrapper}>
          <aside className={styles.menu}>
            <h2>Pick a date</h2>
            <ul className={styles.list}>{dayLinks}</ul>
          </aside>
          <div className={styles.textWrapper}>
            <p className={styles.intro}>
              Image processing is an essential part of web development,
              especially when it comes to optimizing images for better
              performance and user experience.
            </p>
            <p className={styles.intro}>
              Imgproxy is a fast and secure standalone server for resizing and
              converting remote images. The main principles of imgproxy are
              simplicity, speed, and security.
            </p>
            <p className={styles.intro}>
              This example shows how to use imgproxy with RSC (React Server
              Component) and Next Image component.
            </p>
          </div>
        </div>
        {activeDay ? (
          <Day value={activeDay} />
        ) : (
          <p className={styles.noDay}>
            To see the content you need to select a date
          </p>
        )}
      </section>
    </main>
  );
}
