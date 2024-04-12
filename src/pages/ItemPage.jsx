import { Await, json, defer, useLoaderData } from "react-router-dom";
import Item from "../components/Store/Item";
import { Suspense } from "react";

function ItemPage() {
  const { item } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={item}>{(loadedItem) => <Item item={loadedItem} />}</Await>
    </Suspense>
  );
}

export default ItemPage;

async function loadItem(id) {
  const response = await fetch("https://fakestoreapi.com/products/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected item." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ params }) {
  const id = params.itemId;

  return defer({
    item: await loadItem(id),
  });
}
