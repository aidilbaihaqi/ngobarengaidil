import PageLoader from "../Animation/PageLoader";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

// import Image from "next/image";

export default function Main({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header - langsung ter-load */}
      <Header />

      {/* Main Content - dengan loading */}
      <PageLoader>
        {children}
      </PageLoader>

      {/* Footer - langsung ter-load */}
      <Footer />
    </>
  )
}