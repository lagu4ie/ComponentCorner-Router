import "./Hero.css";

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href="#products" className="hero-button">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

export default Hero;