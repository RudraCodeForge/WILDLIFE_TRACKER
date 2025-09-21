import React from 'react';
import styles from '../styles/Dashboard.module.css';

const activityData = [
  { day: 'Mon', value: 100},
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 20 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 80 },
  { day: 'Sat', value: 95 },
  { day: 'Sun', value: 55 }
];

const totalMax = 100;

const RecentActivity = () => {
  return (
    <div className="card my-4 bg-dark text-white">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title">Recent Activity</h5>
          <p className="h6 text-success">+15% Last 7 Days</p>
        </div>
        <div className={styles.activityChartContainer}>
          {activityData.map((item, index) => {
            const barHeight = (item.value / totalMax) * 100;
            return (
              <div
                key={index}
                className={styles.activityBar}
                style={{ height: `${barHeight}%` }}
              ></div>
            );
          })}
        </div>
        <div className="d-flex justify-content-around mt-2 text-muted small">
          {activityData.map((item, index) => (
            <span key={index} className="day-label text-white">
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
