import Image from "next/image";
import Link from "next/link";
import Cardcontainer from "./components/Cardcontainer";

export default async function Home() {
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <ul>
        {/* {data.animals.map((animal) => {
          return (
            <Link href={`/singleview/${animal.id}`} key={animal.id}>
              <li>{animal.name}</li>
            </Link>
          );
        })} */}
      </ul>
      <Cardcontainer></Cardcontainer>
    </div>
  );
}
