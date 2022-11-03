import React, { useState, useEffect } from 'react';
import styles from './countdownTimer.module.css';

function calcDiff(currentDateTime, futureDateTime) {
  var diffInMillis = futureDateTime.getTime() - currentDateTime.getTime(); // TODO CALCULATIONS HERE

  const date = new Date(diffInMillis);

  const months = date.getMonth();
  const days = date.getUTCDate() - 1;
  const hrs = date.getUTCHours();
  const mins = date.getUTCMinutes();
  const secs = date.getUTCSeconds();

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownItem}>
        <div>{months.toString().padStart(2, '0').padStart(2, '0')}</div>
        <div style={{ color: 'white' }} className="commentFontStyle">
          Meses
        </div>
      </div>
      <div className={styles.countdownItem}>
        <div>:</div>
      </div>
      <div className={styles.countdownItem}>
        <div>{days.toString().padStart(2, '0')}</div>
        <div style={{ color: 'white' }} className="commentFontStyle">
          Dias
        </div>
      </div>
      <div className={styles.countdownItem}>
        <div>:</div>
      </div>
      <div className={styles.countdownItem}>
        <div>{hrs.toString().padStart(2, '0')}</div>
        <div style={{ color: 'white' }} className="commentFontStyle">
          Horas
        </div>
      </div>
      <div className={styles.countdownItem}>
        <div>:</div>
      </div>
      <div className={styles.countdownItem}>
        <div>{mins.toString().padStart(2, '0')}</div>
        <div style={{ color: 'white' }} className="commentFontStyle">
          Minutos
        </div>
      </div>
      <div className={styles.countdownItem}>
        <div>:</div>
      </div>
      <div className={styles.countdownItem}>
        <div>{secs.toString().padStart(2, '0')}</div>
        <div style={{ color: 'white' }} className="commentFontStyle">
          Segundos
        </div>
      </div>
    </div>
  );
}

const CountdownTimer = () => {
  const weddingDate = new Date('2023-05-19T12:00:00');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [, setMinutesDiff] = useState(calcDiff(currentDate, weddingDate));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentDate]);

  useEffect(() => {
    setMinutesDiff(calcDiff(currentDate, weddingDate));
  }, [currentDate, weddingDate]);

  const diff = calcDiff(new Date(), weddingDate);

  return diff;
};

export default CountdownTimer;
