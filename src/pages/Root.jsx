import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";


function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout;