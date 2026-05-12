export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Phenix</h1>
          
          <p className="hero-subtitle">
            Phenix is more than a company. It's the power behind successful IT projects. 
            We don’t look for clients — we build partners who change the rules of the game. 
            If you’re ready to lead, welcome to the place where leaders are made.
          </p>

          <a href="#quote" className="hero-cta">
            Get a Quote →
          </a>
        </div>
      </div>

      {/* Background Image */}
      <img 
        src="/images/hero-bg.jpg" 
        alt="Phenix Team" 
        className="hero-background"
      />
    </section>
  );
}