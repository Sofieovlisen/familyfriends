const page = async ({ params }) => {
  const { id } = await params;
  //GET https://api.petfinder.com/v2/animals/{id}
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);

  return <p>Singleview...: {data.animal.name}</p>;
};

export default page;
