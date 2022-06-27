import React, { useEffect, useMemo, useState } from "react";

function HowManyMeals() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = isKorea ? "South Korea" : "Foreign Country";
  const locationObj = {
    country: isKorea ? "한국" : "외국",
  };
  const locationMemo = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [locationMemo]);

  return (
    <div>
      <h2>하루에 몇끼먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {locationObj.country}</p>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        비행기 타자
      </button>
    </div>
  );
}
export default HowManyMeals;
