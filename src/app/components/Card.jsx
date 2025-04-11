"use client";

import Link from "next/link";
import Remoteimage from "./Remoteimage";

const Card = ({ data }) => {
  console.log(data);
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {data.animals.map((animal) => (
        <Link href={`singleview/${animal.id}`} key={animal.id}>
          <li className="bg-white rounded-2xl shadow-md">
            <div>
              <div className="p-4 grid grid-cols-2">
                <h2>{animal.name}</h2>
                <span className="place-self-end ">{animal.age}</span>
                <p className="col-span-2">{animal.breeds?.primary}</p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Card;
