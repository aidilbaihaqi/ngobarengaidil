import AnimatedContent from "../Animation/AnimatedContent";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

// import Image from "next/image";

export default function Main({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatedContent
        distance={70}
        direction="vertical"
        reverse={false}
        config={{ tension: 50, friction: 35 }}
        initialOpacity={0.8}
        animateOpacity={true}
      >
      {/* Header */}
      <Header />

      {children}

      {/* Footer */}
      <Footer />
    </AnimatedContent>
  )
}