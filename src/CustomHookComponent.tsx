import { useState, useEffect } from "react";
export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData(url: string): {
  data: Beverage[] | null;
  done: boolean;
} {
  const [data, setData] = useState<Beverage[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d) => {
        setData(d);
        setDone(true);
      });
  }, [url]);
  return { data, done };
}

function CustomHookComponent() {
  const { data, done } = useFetchData("/hv-taplist.json");
  return <div>{done && <img src={data![0].logo} alt="Beverage logo" />}</div>;
}
export default CustomHookComponent;
