import { useEffect, useState } from "react";
import "./App.css";

interface DigitProps {
  digit: string;
}

function formatClassNumber(digit: string) {
  let topClass = "";
  let bottomClass = "";

  if (Number(digit) === 0) {
    topClass = "zero-top";
    bottomClass = "zero-bottom";
  }

  if (Number(digit) === 1) {
    topClass = "one-top";
    bottomClass = "one-bottom";
  }

  if (Number(digit) === 2) {
    topClass = "two-top";
    bottomClass = "two-bottom";
  }

  if (Number(digit) === 3) {
    topClass = "three-top";
    bottomClass = "three-bottom";
  }

  if (Number(digit) === 4) {
    topClass = "four-top";
    bottomClass = "four-bottom";
  }

  if (Number(digit) === 5) {
    topClass = "five-top";
    bottomClass = "five-bottom";
  }

  if (Number(digit) === 6) {
    topClass = "six-top";
    bottomClass = "six-bottom";
  }

  if (Number(digit) === 7) {
    topClass = "seven-top";
    bottomClass = "seven-bottom";
  }

  if (Number(digit) === 8) {
    topClass = "eight-top";
    bottomClass = "eight-bottom";
  }

  if (Number(digit) === 9) {
    topClass = "nine-top";
    bottomClass = "nine-bottom";
  }

  return {
    topClass,
    bottomClass,
  };
}

function Digit({ digit }: DigitProps) {
  const { topClass, bottomClass } = formatClassNumber(digit);

  return (
    <div>
      <div className={`box ${topClass}`}></div>
      <div className={`box ${bottomClass}`}></div>
    </div>
  );
}

function padTime(time: string) {
  if (Number(time) >= 10) return time;

  return "0" + time;
}

export default function Clock() {
  const [clock, setClock] = useState({
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();

      setClock({
        hours: date.getHours().toString(),
        minutes: date.getMinutes().toString(),
        seconds: date.getSeconds().toString(),
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {padTime(clock.hours)
          .split("")
          .map((digit, idx) => (
            <Digit key={idx} digit={digit} />
          ))}
        :
        {padTime(clock.minutes)
          .split("")
          .map((digit, idx) => (
            <Digit key={idx} digit={digit} />
          ))}
        :
        {padTime(clock.seconds)
          .split("")
          .map((digit, idx) => (
            <Digit key={idx} digit={digit} />
          ))}
      </div>
    </>
  );
}
