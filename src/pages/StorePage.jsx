import Store from "../components/Store/Store";

import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function StorePage() {
  const { itemList } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={itemList}>
          {(loadedList) => <Store loadedList={loadedList} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StorePage;
