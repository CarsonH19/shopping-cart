import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";

function RootLayout() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <MainNavigation />
      <main>
        {showCart && <Cart />}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout;