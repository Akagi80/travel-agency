import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownDays() {

    const currentDate = new Date();

    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getUTCDay();
    const currentUTCDate = new Date (currentYear, currentMonth, currentDay);

    console.log('currentDate: ', currentDate,);
    console.log('currentYear: ', currentYear, 'currentMonth: ', currentMonth, 'currentDay: ', currentDay); // maj - wtf?
    console.log('currentUTCDate: ', currentUTCDate,);


    const startDate = new Date(currentYear, 6, 21);
    const endDate = new Date(currentYear, 9, 23);

    let toDate;
    if (currentUTCDate.getTime() > startDate.getTime()) {
      const nextYear = currentYear + 1;
      const nextDate = new Date(nextYear, 6, 21);

      if (currentUTCDate.getTime() >= startDate.getTime() && currentUTCDate.getTime() <= endDate.getTime()) {
        toDate = null;
      } else {
        toDate = Math.abs(nextDate - currentUTCDate);
      }
    } else {
      toDate = Math.abs(startDate - currentUTCDate);
    }

    const days = toDate / (1000 * 3600 * 24);

    return days;
  }

  render() {
    return (
      <div className={styles.component}>
        {this.getCountdownDays() == 0 ? null : (this.getCountdownDays() == 1 ? `${this.getCountdownDays()} day to summer` : `${this.getCountdownDays()} days to summer`)}
      </div>
    );
  }
}

export default DaysToSummer;
