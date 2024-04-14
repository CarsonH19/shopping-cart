import FeaturedItems from "../components/Home/FeaturedItems";
import Greeting from "../components/Home/Greeting";

import { Suspense } from "react";
import { Await, useLoaderData, json, defer } from "react-router-dom";

function HomePage() {
  const { itemList } = useLoaderData();

  return (
    <>
      <Greeting />
      <Suspense fallback={<p style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</p>}>
        <Await resolve={itemList}>
          {(loadedList) => <FeaturedItems loadedList={loadedList} />}
        </Await>
      </Suspense>
    </>
  );
}

export default HomePage;

async function loadItemList() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw json(
      { message: "Could not load items." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({
    itemList: loadItemList(),
  });
}
