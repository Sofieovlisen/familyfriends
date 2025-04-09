"use client";

const Card = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.animals.map((animal) => (
        <li key={animal.id}>
          <div>
            <div>
              <h2>{animal.name}</h2>
              <span>{animal.age}</span>
            </div>
            <p>{animal.breeds?.primary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
