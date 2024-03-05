import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Hearts, Puff } from "react-loading-icons";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("in componente4");

  useEffect(() => {
    fetch("https://659fe85d5023b02bfe8ac792.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
        setIsLoading(false);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    console.log("in filtered:" + people);
    console.log("in filtered:" + filteredPeople);
    let filtered = people.filter((person) => person.name.includes(filter));
    console.log(filtered);
    setFilteredPeople(filtered);
  };
  return (
    <div>
      <div className="border">
        <input
          className="border p-4"
          type="text"
          placeholder="search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>
      {isLoading && <Puff stroke="#000000" />}
      {!isLoading && (
        <div className="grid grid-cols-2 lg: grid-cols-4 gap-4">
          {filteredPeople.map((person) => {
            return (
              <Card
                name={person.name}
                imageUrl={person.avatar}
                title={person.jobtitle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
