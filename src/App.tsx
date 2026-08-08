import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Brand from './components/Brand';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';

import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'brand', label: 'Brand Story' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <AboutUs onExploreClick={() => setActiveTab('products')} />;
      case 'products':
        return <Product />;
      case 'brand':
        return <Brand />;
      case 'blogs':
        return <Blogs />;
      case 'contact':
        return <ContactUs />;
      default:
        return <AboutUs/>;
    }
  };

  const isHome = activeTab === 'home';

  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Cormorant Garamond', serif !important;
        }

        /* --- CONTINUOUS SHIMMER ANIMATION FOR LOGO --- */
        @keyframes silverShine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shiny-logo-text {
          background: linear-gradient(
            110deg,
            #0f172a 35%,
            #94a3b8 45%,
            #ffffff 50%,
            #94a3b8 55%,
            #0f172a 65%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: silverShine 3s linear infinite;
          display: inline-block;
        }

        /* High-End Luxury Serif Font para sa Titles */
        .brand-logo-text, .luxury-title {
          font-family: 'Cinzel', serif !important;
          letter-spacing: 4px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
        }

        h1, h2, h3, h4, .section-title {
          font-family: 'Cinzel', serif !important;
          letter-spacing: 3px !important;
          font-weight: 600 !important;
        }

        p, span, button, a, input, textarea, .section-desc, .section-badge {
          font-family: 'Montserrat', sans-serif !important;
        }

        .section-badge {
          font-size: clamp(0.65rem, 1.5vw, 0.75rem);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 600;
          color: #b45309;
        }

        .section-title {
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          line-height: 1.1;
          color: #0f172a;
          text-transform: uppercase;
        }

        .section-desc {
          font-size: clamp(0.8rem, 1.8vw, 0.95rem);
          font-weight: 300;
          color: #475569;
          line-height: 1.6;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-hamburger-btn {
          display: none;
        }

        /* --- SMOOTH ANIMATIONS & HOVER EFFECTS --- */
        @keyframes drawerSlideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes backdropFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .drawer-content-box {
          animation: drawerSlideIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .drawer-backdrop {
          animation: backdropFadeIn 0.25s ease-out forwards;
        }

        .nav-btn-smooth {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-btn-smooth:hover {
          transform: translateY(-1px);
        }

        .nav-btn-smooth:active {
          transform: scale(0.96);
        }

        .mobile-item-smooth {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-item-smooth:hover {
          padding-left: 18px !important;
          background-color: rgba(15, 23, 42, 0.05) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* Header Navigation */}
      <header
        style={{
          height: '60px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.25rem',
          flexShrink: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            onClick={() => setActiveTab('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <Sparkles size={18} color="#0f172a" />
            <span
              className="brand-logo-text shiny-logo-text"
              style={{
                fontSize: '1.15rem',
              }}
            >
              SILVERTHINGS
            </span>
          </div>

          <nav className="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="nav-btn-smooth"
                  style={{
                    background: isActive ? '#0f172a' : 'transparent',
                    color: isActive ? '#ffffff' : '#334155',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: isActive ? '600' : '400',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-hamburger-btn nav-btn-smooth"
            style={{
              background: 'rgba(15, 23, 42, 0.05)',
              border: 'none',
              borderRadius: '10px',
              padding: '6px',
              cursor: 'pointer',
              color: '#0f172a',
            }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="drawer-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: 'rgba(15, 23, 42, 0.35)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="drawer-content-box"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '80%',
              maxWidth: '300px',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '10px 0 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
              }}
            >
              <div
                onClick={() => {
                  setActiveTab('home');
                  setIsMobileMenuOpen(false);
                }}
                className="brand-logo-text shiny-logo-text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                <Sparkles size={16} color="#0f172a" /> SILVERTHINGS
              </div>
              <button
                className="nav-btn-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: 'rgba(15, 23, 42, 0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="mobile-item-smooth"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      color: isActive ? '#0f172a' : '#334155',
                      fontWeight: isActive ? '600' : '400',
                      fontSize: '0.85rem',
                      letterSpacing: '1px',
                      textAlign: 'left',
                      background: isActive ? '#e2e8f0' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Screen Content Area */}
      <main
        style={{
          flex: 1,
          width: '100%',
          height: 'calc(100dvh - 60px)',
          overflowY: isHome ? 'hidden' : 'auto',
          position: 'relative',
        }}
      >
        {renderContent()}
      </main>
    </div>
  );
}