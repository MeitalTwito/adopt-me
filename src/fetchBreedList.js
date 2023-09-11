const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!animal) return [];

  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }
  // React Query expects a promise so we don't have to await the json.
  return apiRes.json();
};

export default fetchBreedList;
