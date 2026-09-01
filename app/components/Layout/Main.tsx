import PageLoader from "../Animation/PageLoader";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

// import Image from "next/image";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <PageLoader>{children}</PageLoader>

      <Footer />
    </>
  );
}
