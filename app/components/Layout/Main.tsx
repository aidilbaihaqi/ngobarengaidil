import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import ScrollProgress from "../ui/ScrollProgress";
import GrainOverlay from "../ui/GrainOverlay";

export default function Main({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollProgress />
      <GrainOverlay />
      <Header />

      {children}

      <Footer />
    </>
  )
}
