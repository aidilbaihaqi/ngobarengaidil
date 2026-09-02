import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

export default function Main({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}
