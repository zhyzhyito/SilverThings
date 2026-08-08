import { Sparkles, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        color: '#0f172a',
        padding: 'clamp(3rem, 6vw, 5rem) 1.25rem',
        boxSizing: 'border-box',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
      }}
    >
      <style>{`
        /* Keyframe Animations */
        @keyframes popFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes popFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes popFromTop {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animation Utility Classes */
        .animate-pop-top {
          animation: popFromTop 0.6s cubic-bezier(0.16, 1, 0.9, 1) forwards;
        }

        .animate-left-to-right {
          animation: popFromLeft 0.7s cubic-bezier(0.16, 1, 0.9, 1) forwards;
        }

        .animate-right-to-left {
          animation: popFromRight 0.7s cubic-bezier(0.16, 1, 0.9, 1) forwards;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          overflow: hidden;
        }

        .glass-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: rgba(255, 255, 255, 0.85);
          color: #0f172a;
          font-size: 0.9rem;
          outline: none;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .glass-input:focus {
          border-color: #0f172a;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.08);
        }

        /* Send Button Hover Effect */
        .btn-send {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 25px;
          background-color: #0f172a;
          color: #ffffff;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          margin-top: 0.25rem;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-send:hover {
          background-color: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.25);
        }

        .btn-send:active {
          transform: scale(0.96);
        }

        @media (max-width: 850px) {
          .contact-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header - Pop-in From Top */}
        <div className="animate-pop-top" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <Sparkles size={16} color="#0f172a" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: '700', color: '#b45309' }}>
              Client Services
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-1px', marginBottom: '0.75rem', color: '#0f172a' }}>
            GET IN TOUCH
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#475569', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Have a custom jewelry inquiry, order status question, or partnership idea? Our concierge team is ready to assist you.
          </p>
        </div>

        {/* Layout Grid Card */}
        <div className="contact-card">
          {/* Left: Info Desk (Pop Left to Right) */}
          <div className="animate-left-to-right" style={{ padding: 'clamp(2rem, 4vw, 3rem)', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>Concierge Desk</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                We respond to all inquiries within 24 business hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Mail size={20} color="#cbd5e1" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>concierge@silverthings.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Phone size={20} color="#cbd5e1" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Call / WhatsApp</div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>+63 (02) 8888-7777</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <MapPin size={20} color="#cbd5e1" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Flagship Studio</div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Quezon City / Fairview Boundary, PH</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2.5rem' }}>
              © 2026 SILVERTHINGS. All Rights Reserved.
            </div>
          </div>

          {/* Right: Form (Pop Right to Left) */}
          <div className="animate-right-to-left" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  Your Full Name
                </label>
                <input type="text" placeholder="e.g. Zhyrus" className="glass-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input type="email" placeholder="zhyrus@example.com" className="glass-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  Message / Inquiry
                </label>
                <textarea rows={4} placeholder="How can we assist you today?" className="glass-input" style={{ resize: 'none' }} />
              </div>

              <button
                type="submit"
                className="btn-send"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}