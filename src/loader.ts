import { fetchData } from "./fetch";

export async function loader() {
  try {
    const json = await fetchData();
    return json;
  } catch (err) {
    console.error(err);
    return null;
  }
}
