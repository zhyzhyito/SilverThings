import { useState, useEffect } from 'react';
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react';

// Siguraduhing tama ang file name at path ng video sa assets folder
import bgVideo from '../assets/VideoPerson1.mp4';

interface Article {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  snippet: string;
}

export default function Blogs() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles: Article[] = [
    {
      title: 'How to Care for 925 Sterling Silver to Keep It Shining Forever',
      category: 'Jewelry Care',
      date: 'Aug 05, 2026',
      author: 'SilverThings Studio',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      snippet: 'Learn simple daily habits and artisan secrets to protect your silver jewelry from natural tarnishing and oxidation.',
    },
    {
      title: 'Lab Diamonds vs. Natural Gemstones: The Modern Choice',
      category: 'Education',
      date: 'Jul 28, 2026',
      author: 'Gemology Dept',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      snippet: 'Discover why precision lab-grown stones deliver superior clarity, environmental sustainability, and ethical value.',
    },
    {
      title: 'Styling Minimalist Silver Rings for Daily Wear',
      category: 'Style Guide',
      date: 'Jul 15, 2026',
      author: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
      snippet: 'Uncover the principles of ring stacking, metal mixing, and choosing pieces that match your personal aesthetic.',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        color: '#0f172a',
        padding: 'clamp(3rem, 6vw, 5rem) 1.25rem',
        boxSizing: 'border-box',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes slideDownBg {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUpContent {
          0% {
            transform: translateY(60px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .bg-video-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .bg-video-container.animate-down {
          animation: slideDownBg 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .bg-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Manipis at ultra-light overlay para litaw ang video */
        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(241, 245, 249, 0.35) 50%, rgba(255, 255, 255, 0.5) 100%);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          z-index: 1;
        }

        .blogs-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
        }

        .animated-header {
          opacity: 0;
        }

        .animated-header.animate-up {
          animation: slideUpContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          justify-content: center;
          align-items: stretch;
        }

        @media (max-width: 960px) {
          .blogs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .blogs-grid {
            grid-template-columns: 1fr;
          }
        }

        .glass-blog-card {
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .glass-blog-card.animate-up {
          animation: slideUpContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .glass-blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 40px rgba(15, 23, 42, 0.15);
          background: rgba(255, 255, 255, 0.92);
        }
      `}</style>

      {/* Video Background */}
      <div className={`bg-video-container ${isVisible ? 'animate-down' : ''}`}>
        <video autoPlay loop muted playsInline className="bg-video-element">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="blogs-content-wrapper">
        <div className={`animated-header ${isVisible ? 'animate-up' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <Sparkles size={16} color="#0f172a" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: '700', color: '#b45309' }}>
              Journal & Insights
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-1px', marginBottom: '1rem', color: '#0f172a', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
            THE SILVER EDIT
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#1e293b', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7', fontWeight: '600' }}>
            Guides, gemology secrets, and style inspirations curated by our master craftsmen.
          </p>
        </div>

        <div className="blogs-grid">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className={`glass-blog-card ${isVisible ? 'animate-up' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                animationDelay: `${0.5 + idx * 0.15}s`,
              }}
            >
              <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '5px 12px',
                    borderRadius: '16px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                  }}
                >
                  {item.category}
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '12px', color: '#64748b', fontSize: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={13} /> {item.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={13} /> {item.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '0.5rem', color: '#0f172a' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {item.snippet}
                  </p>
                </div>

                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'none',
                    border: 'none',
                    color: '#0f172a',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Read Article <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}