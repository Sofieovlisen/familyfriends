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
            <div className="p-4 grid grid-cols-2">
              <h2>{animal.name}</h2>
              <span className="place-self-end ">{animal.age}</span>
              <p className="col-span-2">{animal.breeds?.primary}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
