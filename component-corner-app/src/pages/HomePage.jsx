import Hero from "../components/Hero";

function HomePage() {
  return (
    <main>
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find quality electronics at affordable prices."
        buttonText="Shop Now"
      />

      <section>
        <h2>Why Shop With Us?</h2>
        <p>
          ComponentCorner makes it easy to find quality electronics at
          affordable prices. Shop our selection and find the right products
          for you.
        </p>
      </section>
    </main>
  );
}

export default HomePage;