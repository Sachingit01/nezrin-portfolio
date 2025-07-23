"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FollowJourney from "@/components/FollowJourney";
import ForumCarousel from "@/components/ForumCarousel";

export default function Home() {
  return (
    <>
      <main>
        <section id="home" title="Home">
          <Hero />
        </section>
        <section id="about" title="About">
          <About />
        </section>
        <section id="events" title="Events">
          <ForumCarousel />
        </section>
        <section id="follow" title="Follow">
          <FollowJourney />
        </section>
      </main>
    </>
  );
}
