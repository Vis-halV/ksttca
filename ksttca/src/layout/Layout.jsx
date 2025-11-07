import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout min-h-screen flex flex-col bg-[#0A1A2F] text-[#F8FAFC]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;