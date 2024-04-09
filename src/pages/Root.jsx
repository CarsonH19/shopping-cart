import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default RootLayout;