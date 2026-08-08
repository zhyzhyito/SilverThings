import { Sparkles, Diamond, ArrowRight } from 'lucide-react';

interface AboutUsProps {
  videoUrl?: string;
  onExploreClick?: () => void;
}

export default function AboutUs({ videoUrl, onExploreClick }: AboutUsProps) {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Full Coverage Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.95) contrast(1.02)',
        }}
      >
        <source
          src={videoUrl || "/videos/Woman_presenting_luxury_diamond_…_202608072117.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Gentle Vignette Gradient: Top Shadow for Header Visibility + Left Shadow for Text Readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, transparent 25%),
            linear-gradient(90deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.3) 42%, transparent 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Floating Left Content Container */}
      <div
        className="px-6 py-6"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '650px',
          width: '100%',
          marginLeft: 'clamp(1.5rem, 6vw, 5rem)',
          marginTop: '3rem',
        }}
      >
        {/* Transparent Diamond Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1rem',
          }}
        >
          <Diamond size={16} color="#ffffff" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }} />
          <span
            className="is-size-7 has-text-weight-bold is-uppercase"
            style={{
              color: '#f8fafc',
              letterSpacing: '4px',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Our Heritage & Craft
          </span>
        </div>

        {/* Hero Title */}
        <h2
          className="title is-1 has-text-white mb-4"
          style={{
            fontWeight: '800',
            letterSpacing: '2px',
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.95)',
            background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Timeless Elegance
        </h2>

        {/* Content Section */}
        <div style={{ background: 'transparent', padding: '0', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <Sparkles size={20} color="#ffffff" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }} />
            <h3
              className="title is-3 has-text-white mb-0"
              style={{
                fontWeight: '700',
                textShadow: '0 2px 15px rgba(0,0,0,0.95)',
              }}
            >
              Pure Craftsmanship
            </h3>
          </div>

          <p
            className="subtitle is-6 has-text-white mb-6"
            style={{
              lineHeight: '1.8',
              fontSize: '1.05rem',
              fontWeight: '400',
              maxWidth: '520px',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.95)',
              opacity: 0.95,
            }}
          >
            At SilverThings, every piece is sculpted from certified 925 sterling silver and hand-selected gemstones, blending heritage artisan techniques with modern precision technology.
          </p>

          {/* White Pill Button */}
          <button 
            onClick={onExploreClick}
            className="button luxury-btn py-3 px-6"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#0b0f19',
              fontWeight: '700',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 25px rgba(0, 0, 0, 0.5)',
            }}
          >
            Explore Collection <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}