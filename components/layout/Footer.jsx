import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo + Description */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="logo-icon">
                <span>P</span>
              </div>
              <div className="logo-text">
                <span>Phenix</span>
                <p>meta</p>
              </div>
            </Link>
            <p className="footer-description">
              Больше чем компания. Мы создаём партнёров, которые меняют правила игры.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <div className="footer-column">
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
            </div>

            <div className="footer-column">
              <h4>Products</h4>
              <Link href="/coin">Phenix Coin</Link>
              <Link href="/courses">Courses</Link>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:hello@phenix.meta">hello@phenix.meta</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Phenix Meta. All Rights Reserved.</p>
          
          <div className="footer-social">
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Telegram</a>
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}