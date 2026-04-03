import Header from "@/components/restaurant/Header";
import Hero from "@/components/restaurant/Hero";
import TrustBadges from "@/components/restaurant/TrustBadges";
import SignatureDish from "@/components/restaurant/SignatureDish";
import MenuSection from "@/components/restaurant/MenuSection";
import DeliveryOffers from "@/components/restaurant/DeliveryOffers";
import SpecialSection from "@/components/restaurant/SpecialSection";
import OwnerStory from "@/components/restaurant/OwnerStory";
import AboutSection from "@/components/restaurant/AboutSection";
import Gallery from "@/components/restaurant/Gallery";
import EmotionalMarketing from "@/components/restaurant/EmotionalMarketing";
import Reviews from "@/components/restaurant/Reviews";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";
import FloatingButtons from "@/components/restaurant/FloatingButtons";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <>
    <Header />
    <Hero />
    <ScrollReveal>
      <SignatureDish />
    </ScrollReveal>
    <ScrollReveal>
      <TrustBadges />
    </ScrollReveal>
    <ScrollReveal>
      <MenuSection />
    </ScrollReveal>
    <ScrollReveal direction="left">
      <DeliveryOffers />
    </ScrollReveal>
    <ScrollReveal>
      <SpecialSection />
    </ScrollReveal>
    <ScrollReveal direction="right">
      <OwnerStory />
    </ScrollReveal>
    <ScrollReveal>
      <AboutSection />
    </ScrollReveal>
    <ScrollReveal direction="left">
      <Gallery />
    </ScrollReveal>
    <ScrollReveal>
      <EmotionalMarketing />
    </ScrollReveal>
    <ScrollReveal>
      <Reviews />
    </ScrollReveal>
    <ScrollReveal direction="up">
      <Contact />
    </ScrollReveal>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
