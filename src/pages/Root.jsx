import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      MAIN NAVIGATION
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;