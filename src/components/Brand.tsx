import { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Gem, Award, ArrowUpRight, Star, HeartHandshake } from 'lucide-react';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Metric {
  value: string;
  label: string;
}

export default function Brand() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars: Pillar[] = [
    {
      icon: <Gem size={22} color="#0f172a" />,
      title: 'Certified 925 Silver',
      desc: 'Guaranteed premium 925 sterling silver base, coated with high-grade rhodium for a lasting, tarnish-resistant shine.',
    },
    {
      icon: <ShieldCheck size={22} color="#0f172a" />,
      title: 'Ethical Craftsmanship',
      desc: 'Hand-selected lab-grown diamonds and conflict-free gemstones forged through sustainable artisan techniques.',
    },
    {
      icon: <Award size={22} color="#0f172a" />,
      title: 'Precision Engineering',
      desc: 'Every piece undergoes multi-angle light testing to ensure maximum sparkle, weight balance, and seamless comfort.',
    },
  ];

  const metrics: Metric[] = [
    { value: '100%', label: 'Certified 925 Sterling' },
    { value: '10K+', label: 'Heirlooms Crafted' },
    { value: '15+', label: 'Master Artisans' },
    { value: '4.9★', label: 'Client Satisfaction' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        padding: 'clamp(3rem, 6vw, 5rem) 1.25rem',
        boxSizing: 'border-box',
        fontFamily: "'Inter', sans-serif",
        color: '#0f172a',
        overflow: 'hidden',
      }}
    >
      <style>{`
        /* Glassmorphism Luxury Styling */
        .glass-card {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.05);
          border-radius: 24px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 40px rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.88);
        }

        /* Responsive Layout Grid */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Entrance Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .animate-fade-in.is-visible {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Header Section */}
        <div className={`animate-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3.5rem', animationDelay: '0.2s' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <Sparkles size={16} color="#b45309" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: '700', color: '#b45309' }}>
              The SilverThings Heritage
            </span>
          </div>

          {/* Solid Clean Luxury Title */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: '900',
              letterSpacing: '-1px',
              marginBottom: '1rem',
              color: '#0f172a',
            }}
          >
            CRAFTED TO INHERIT
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#475569', maxWidth: '620px', margin: '0 auto', lineHeight: '1.7' }}>
            Born from a vision to bridge classical jewelry art with high-tech modern aesthetics, SilverThings creates enduring statements of elegance.
          </p>
        </div>

        {/* Core Pillars Section */}
        <div
          className={`animate-fade-in ${isVisible ? 'is-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
            animationDelay: '0.4s',
          }}
        >
          {pillars.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.25rem 1.75rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.6rem', color: '#0f172a' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.65' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Bar Section */}
        <div
          className={`glass-card animate-fade-in ${isVisible ? 'is-visible' : ''}`}
          style={{ padding: '2rem', marginBottom: '3rem', animationDelay: '0.5s' }}
        >
          <div className="metrics-grid">
            {metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '0.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.25rem', color: '#0f172a' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Brand Story & Philosophy Showcase */}
        <div className={`glass-card story-grid animate-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', animationDelay: '0.6s' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
              <HeartHandshake size={15} color="#64748b" />
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', color: '#64748b' }}>
                Our Philosophy
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: '#0f172a', lineHeight: '1.25' }}>
              Luxury Shouldn't Be Flamboyant—It Should Be Absolute.
            </h2>

            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We believe true elegance lies in details that don’t scream for attention but command it effortlessly. Every curve, polish, and facet is calibrated for daily durability and eternal brilliance.
            </p>

            {/* Founder Quote Sub-block */}
            <div style={{ borderLeft: '3px solid #0f172a', paddingLeft: '1rem', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#334155', margin: 0 }}>
                "We don't just shape silver; we forge modern heirlooms built to carry memories across generations."
              </p>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b', marginTop: '4px', display: 'block' }}>
                — Master Craftsman, SilverThings Studio
              </span>
            </div>

            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '30px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.2)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
            >
              Read Full Brand Journey <ArrowUpRight size={16} />
            </button>
          </div>

          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '100%', minHeight: '300px', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
              alt="Craftsmanship"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '8px 14px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: '#0f172a',
              }}
            >
              <Star size={14} color="#b45309" fill="#b45309" /> Handcrafted Precision
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}