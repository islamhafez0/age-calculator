import React, { useState } from "react";

const AgeCalculatorApp: React.FC = () => {
  const [birthdate, setBirthdate] = useState<string>("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = (): void => {
    if (birthdate) {
      const birthdateDate: Date = new Date(birthdate);
      const now: Date = new Date();

      let years: number = now.getFullYear() - birthdateDate.getFullYear();
      let months: number = now.getMonth() - birthdateDate.getMonth();
      let days: number = now.getDate() - birthdateDate.getDate();

      if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({ years, months, days });
    }
  };

  return (
    <div className="app">
      <h1>Age Calculator</h1>
      <label>
        Enter your birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p>
          <b>Your age is:</b> {age.years} years, {age.months} months, and {age.days} days
        </p>
      )}
    </div>
  );
};

export default AgeCalculatorApp;
