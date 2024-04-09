import { Outlet } from "react-router-dom";

function StorePage() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default StorePage;
