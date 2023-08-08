import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";
import Button from "./Button";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setPerson(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <>
      <main className="jobs-center">
        <Button
          person={person}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo person={person} currentItem={currentItem} />
      </main>
    </>
  );
};
export default App;
