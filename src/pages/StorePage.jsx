import Store from "../components/Store/Store";

import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function StorePage() {
  const navigation = useNavigation();

  const { itemList } = useLoaderData();

  return (
    <>
      {/* { navigation.state === 'loading' && <p>Loading Items...</p>}
    <Store loadedList={itemList }/> */}
      <Suspense
        fallback={
          <p style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</p>
        }
      >
        <Await resolve={itemList}>
          {(loadedList) => <Store loadedList={loadedList} />}
        </Await>
      </Suspense>
    </>
  );
}

export default StorePage;
