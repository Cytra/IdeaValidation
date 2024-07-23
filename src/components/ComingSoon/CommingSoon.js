import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const ComingSoon = () => {
  const [state, handleSubmit] = useForm("xrbzeeyv");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {'send_to': 'AW-1030563991/MtaWCNjtv9MYEJfRtOsD'});
      }
    }
  }, [state.succeeded]);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2024 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div className="coming-soon-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="coming-soon-content">
            <h2>AI-Powered Website Scraping Tool</h2>
            <p>
              No programming skills required! Simply enter the URL and the data you need,
              and our tool will provide you with a JSON response. 
            </p>
            <div
              id="timer"
              className="flex-wrap d-flex justify-content-center"
            >
              <div
                id="days"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {days} <span>Days</span>
              </div>
              <div
                id="hours"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {hours} <span>Hours</span>
              </div>
              <div
                id="minutes"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {minutes} <span>Minutes</span>
              </div>
              <div
                id="seconds"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {seconds} <span>Seconds</span>
              </div>
            </div>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <span className="label-title">
                  <i className="bx bx-envelope"></i>
                </span>
              </div>

              <button type="submit" className="default-btn" disabled={state.submitting}>
                <i className="flaticon-user"></i>
                Notify Me<span></span>
              </button>

              <p>
                If you would like to be notified when your app is live, Please
                subscribe to our mailing list.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
