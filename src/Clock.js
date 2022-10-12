import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div
      style={{
        display: "flex",
        width: "350px",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <div className="Clock-days" style={{ margin: "0 8px" }}>
        <p style={{ fontSize: "30px" }}>{leading0(days)}</p>{" "}
        <p style={{ fontSize: "10px" }}> Days</p>
      </div>
      <div className="Clock-hours" style={{ margin: "0 8px" }}>
        <p style={{ fontSize: "30px" }}>{leading0(hours)}</p>{" "}
        <p style={{ fontSize: "10px" }}>Hours</p>
      </div>
      <div className="Clock-minutes" style={{ margin: " 0 8px" }}>
        <p style={{ fontSize: "30px" }}>{leading0(minutes)}</p>{" "}
        <p style={{ fontSize: "10px" }}>Minutes</p>
      </div>
      <div className="Clock-seconds" style={{ margin: "0 8px" }}>
        <p style={{ fontSize: "30px" }}>{leading0(seconds)}</p>{" "}
        <p style={{ fontSize: "10px" }}>Seconds</p>
      </div>
      <span style={{ fontSize: "13px", marginTop: "auto" }}>To Go !!!</span>
    </div>
  );
};

export default Clock;
