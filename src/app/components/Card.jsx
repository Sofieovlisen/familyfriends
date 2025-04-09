"use client";

import Remoteimage from "./Remoteimage";

const Card = ({ data }) => {
  console.log(data);
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {data.animals.map((animal) => (
        <li className="bg-white rounded-2xl shadow-md" key={animal.id}>
          <div>
            <div>
              <img
                className="rounded-2xl w-full h-[115px]"
                src={animal.photos?.[0]?.medium}
                alt={animal.name}
              />
            </div>
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
