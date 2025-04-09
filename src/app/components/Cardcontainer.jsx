import Card from "./Card";

const Cardcontainer = async () => {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  });
  const animals = await data.json();
  return <Card data={animals}></Card>;
};

export default Cardcontainer;
