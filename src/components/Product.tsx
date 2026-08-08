import { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Gem, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X,
  Search
} from 'lucide-react';
import ShowcaseModal from './ShowcaseModal';

// Image imports
import img1 from '../assets/Person_showcasing_diamond_rings_202608072208.jpeg';
import img2 from '../assets/Person_holding_pearl_pendant_202608072208.jpeg';
import img3 from '../assets/Person_presenting_gold_emerald_n…_202608072208.jpeg';
import img4 from '../assets/Person_showing_diamond_stud_earr…_202608072208.jpeg';
import img5 from '../assets/Person_wearing_rose_gold_ring_202608072208.jpeg';
import img6 from '../assets/Person_wearing_ruby_statement_ring_202608072206.jpeg';
import img7 from '../assets/Hands_clasped_showcasing_silver_…_202608072209.jpeg';
import img8 from '../assets/Gold_chain_bracelet_on_wrist_202608072209.jpeg';
import img9 from '../assets/New1.jpeg';
import img10 from '../assets/New2.jpeg';
import img11 from '../assets/New3.jpeg';
import img12 from '../assets/New4.jpeg';
import img13 from '../assets/New5.jpeg';
import img14 from '../assets/New6.jpeg';
import img15 from '../assets/New7.jpeg';
import img16 from '../assets/New8.jpeg';
import img17 from '../assets/New9.jpeg';
import img18 from '../assets/New10.jpeg';
import img19 from '../assets/New11.jpeg';
import img20 from '../assets/New12.jpeg';
import img21 from '../assets/New13.jpeg';
import img22 from '../assets/New14.jpeg';
import img23 from '../assets/New15.jpeg';
import img24 from '../assets/New16.jpeg';

export default function Product() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // States para sa Image Zoom Viewer Modal
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const products = [
    { id: 1, numberTag: '01', badge: 'CRAFTED WITH PRECISION', title: 'POWERED BY PRECISION.', price: '₱3,499', weight: '4.2g', purity: '925 Sterling Silver', description: 'Every facet light-tested for optimal reflection. Designed to feel weightless on your hand yet undeniably bold.', specs: ['Solid 925 Silver Base', 'Rhodium Anti-Tarnish Coating', 'Prong-set Artisan Facets'], image: img1 },
    { id: 2, numberTag: '02', badge: 'LUMINOUS PEARL COLLECTION', title: 'PEARL ELEGANCE PENDANT.', price: '₱2,899', weight: '3.8g', purity: '925 Sterling Silver', description: 'A timeless pearl centerpiece wrapped in fine sterling silver, capturing subtle luminosity in every glare.', specs: ['Genuine Freshwater Pearl', 'Solid 925 Silver Chain', 'Hand-polished Finish'], image: img2 },
    { id: 3, numberTag: '03', badge: 'ROYAL EMERALD EDITION', title: 'EMERALD CUT NECKLACE.', price: '₱4,200', weight: '5.1g', purity: '925 Silver Gold-Plated', description: 'Vibrant emerald stone accented with fine gold details, crafted for sophistication and royal charm.', specs: ['Lab-Grown Emerald', 'Gold Plated Accents', 'Precision Bezel Setting'], image: img3 },
    { id: 4, numberTag: '04', badge: 'SOLITAIRE DIAMOND STUDS', title: 'DIAMOND STUD EARRINGS.', price: '₱2,150', weight: '2.5g', purity: '925 Sterling Silver', description: 'Minimalist solitaire studs engineered with optical precision for maximum light dispersion and sparkle.', specs: ['Dual-prong Secure Lock', 'Hypoallergenic Post', 'Certified Gemstone'], image: img4 },
    { id: 5, numberTag: '05', badge: 'ROSE GOLD LUXURY', title: 'ROSE GOLD STATEMENT RING.', price: '₱3,850', weight: '4.8g', purity: '925 Silver Rose Gold', description: 'Warm rose gold tone overlaid on solid silver, creating a unique modern contrast for everyday wear.', specs: ['Rose Gold Rhodium Coat', 'Smooth Comfort Fit', 'Scratch Resistant'], image: img5 },
    { id: 6, numberTag: '06', badge: 'HERITAGE RUBY SERIES', title: 'RUBY STATEMENT PIECE.', price: '₱5,100', weight: '6.0g', purity: '925 Sterling Silver', description: 'Deep crimson ruby centerpiece framed by fine micro-pavé stones for undeniable prestige.', specs: ['Artisan Hand-set Stones', 'Heavyweight Silver Band', 'Luxury Box Included'], image: img6 },
    { id: 7, numberTag: '07', badge: 'CLASSIC BAND SET', title: 'SILVER STACKING BANDS.', price: '₱1,950', weight: '3.2g', purity: '925 Sterling Silver', description: 'Minimalist bands tailored for smooth layering or subtle solo elegance on any occasion.', specs: ['High-polish Mirror Finish', 'Precision Contoured', 'Pure 925 Hallmark'], image: img7 },
    { id: 8, numberTag: '08', badge: 'CHAIN BRACELET SERIES', title: 'GOLD CHAIN LINK BRACELET.', price: '₱3,299', weight: '5.5g', purity: '925 Silver Gold-Tone', description: 'Seamless interlocked chain architecture designed for fluid wrist movement and durable comfort.', specs: ['Solid Safety Clasp', 'Reinforced Chain Links', 'Tarnish Proof Shield'], image: img8 },
    { id: 9, numberTag: '09', badge: 'SILVER LAYERED SERIES', title: 'LAYERED SILVER CHAIN NECKLACE.', price: '₱3,499', weight: '5.2g', purity: '925 Sterling Silver', description: 'A modern, multi-strand layered necklace featuring delicate chains, a crescent moon accent, a pearl drop, and a sleek vertical bar pendant.', specs: ['Multi-tier Chain Design', 'White Gold Plated', 'Anti-Tarnish Coating'], image: img9 },
    { id: 10, numberTag: '10', badge: 'GEOMETRIC SILVER COLLECTION', title: 'GEOMETRIC THREADERS EARRINGS.', price: '₱2,250', weight: '2.8g', purity: '925 Sterling Silver', description: 'Minimalist drop threader earrings with cascading geometric shapes (triangles and hexagons) for an elegant, contemporary look.', specs: ['925 Sterling Silver', 'Sleek Threader Style', 'Hypoallergenic Post'], image: img10 },
    { id: 11, numberTag: '11', badge: 'MINIMALIST SILVER SERIES', title: 'BRUSHED SILVER BAND RING.', price: '₱1,850', weight: '3.6g', purity: 'Brushed 925 Silver', description: 'A clean, flat-top silver band with a subtle satin-brushed finish, designed for everyday unisex wear.', specs: ['Comfort Fit Interior', 'Satin-Brushed Surface', 'Solid Silver Core'], image: img11 },
    { id: 12, numberTag: '12', badge: 'ARTISAN SILVER COLLECTION', title: 'HAMMERED STATEMENT CUFF.', price: '₱4,600', weight: '12.4g', purity: 'Oxidized 925 Silver', description: 'A bold, artisan-crafted wide cuff bracelet with a heavy textured and hammered organic finish.', specs: ['Hand-Hammered Texture', 'Antique Oxidized Finish', 'Adjustable Form'], image: img12 },
    { id: 13, numberTag: '13', badge: 'VINTAGE KEEPSAKE SERIES', title: 'ENGRAVED SILVER LOCKET.', price: '₱3,100', weight: '4.8g', purity: 'Antique 925 Silver', description: 'A classic round keepsake locket with intricate floral engravings and an ornate monogram medallion center.', specs: ['Photo Keepsake Frame', 'Detailed Scrollwork', 'Solid Silver Bail'], image: img13 },
    { id: 14, numberTag: '14', badge: 'GEOMETRIC SILVER SERIES', title: 'TRIANGLE PENDANT NECKLACE.', price: '₱2,100', weight: '3.1g', purity: '925 Sterling Silver', description: 'A delicate silver chain featuring a minimalist open-triangle pendant, perfect for everyday subtle styling.', specs: ['Open Geometric Cut', 'Fine Trace Chain', 'Spring Ring Clasp'], image: img14 },
    { id: 15, numberTag: '15', badge: 'LUXURY FILIGREE COLLECTION', title: 'FILIGREE LACE BRACELET.', price: '₱3,800', weight: '6.2g', purity: '925 Silver / Zirconia', description: 'An intricate lace-pattern filigree link bracelet accented with sparkling pave crystals and an adjustable chain.', specs: ['Lace Pattern Work', 'Micro Pave Zirconia', 'Secure Lobster Lock'], image: img15 },
    { id: 16, numberTag: '16', badge: 'GEMSTONE STACKING SERIES', title: 'MOONSTONE RING STACK SET.', price: '₱3,250', weight: '5.8g', purity: '925 Silver / Moonstone', description: 'A versatile 5-piece ring stacking set featuring a bezel-set cabochon moonstone, twisted rope bands, and textured wave rings.', specs: ['Natural Moonstone Gem', '5-Piece Modular Stack', 'Textured Accent Bands'], image: img16 },
    { id: 17, numberTag: '17', badge: 'HERITAGE SILVER COLLECTION', title: 'FILIGREE DROP EARRINGS.', price: '₱2,650', weight: '3.9g', purity: 'Antiqued 925 Silver', description: 'Elegant dangle drop earrings with intricate filigree scrollwork and a teardrop silhouette.', specs: ['Antiqued Accent Detail', 'French Hook Wires', 'Lightweight Structure'], image: img17 },
    { id: 18, numberTag: '18', badge: 'HIGH-FASHION SILVER', title: 'SCULPTURAL COLLAR CHOKER.', price: '₱5,200', weight: '14.5g', purity: 'Mirror-Polished Silver', description: 'A bold, architectural choker collar with a smooth, reflective surface and an asymmetrical bypass closure.', specs: ['High-Gloss Polish', 'Ergonomic Collar Contour', 'Statement Design'], image: img18 },
    { id: 19, numberTag: '19', badge: 'GOLD LAYERED COLLECTION', title: 'COIN & INITIAL PENDANT SET.', price: '₱4,800', weight: '7.5g', purity: '18K Yellow Gold Plated', description: 'A chic 4-tier layered necklace set featuring a bead choker, initial letter charm, vintage coin medallion, and a mini bar pendant.', specs: ['4-in-1 Layered Chains', '18K Gold Plated', 'Custom Initial Charm'], image: img19 },
    { id: 20, numberTag: '20', badge: 'ROYAL FILIGREE GOLD', title: 'FILIGREE TEARDROP EARRINGS.', price: '₱3,450', weight: '4.2g', purity: '18K Yellow Gold Plated', description: 'Ornate chandelier-style teardrop earrings featuring delicate filigree patterns and micro-pavé accents.', specs: ['Intricate Filigree Pattern', 'Micro-Pavé Accents', '18K Gold Finish'], image: img20 },
    { id: 21, numberTag: '21', badge: 'MINIMALIST GOLD SERIES', title: 'HAMMERED DISC PENDANT.', price: '₱2,900', weight: '3.8g', purity: '18K Yellow Gold Plated', description: 'A classic, everyday fine chain necklace featuring a light-catching, coin-style hammered disc pendant.', specs: ['Light-Reflecting Texture', '18K Gold Vermeil', 'Adjustable Chain'], image: img21 },
    { id: 22, numberTag: '22', badge: 'HEIRLOOM GOLD COLLECTION', title: 'VINTAGE OVAL FLORAL LOCKET.', price: '₱3,950', weight: '5.6g', purity: '18K Yellow Gold Plated', description: 'An heirloom-style oval pendant locket decorated with traditional floral scrollwork engraving.', specs: ['Traditional Scrollwork', 'Photo Locket Compartment', 'Durable Gold Plating'], image: img22 },
    { id: 23, numberTag: '23', badge: 'LUXURY STACKING GOLD', title: 'SIGNET & PAVE RING STACK.', price: '₱4,300', weight: '6.8g', purity: '18K Gold / Cubic Zirconia', description: 'A curated multi-finger gold ring stack, including an engraved sunburst signet, initial ring, pave eternity bands, and beaded textures.', specs: ['Curated Multi-Ring Set', 'Cubic Zirconia Pavé', '18K Gold Finish'], image: img23 },
    { id: 24, numberTag: '24', badge: 'STATEMENT LINK SERIES', title: 'CHUNKY GOLD CUBELINK CHAIN.', price: '₱5,900', weight: '16.2g', purity: 'Polished 18K Gold Plated', description: 'A high-impact oversized curb-link chain necklace offering a bold, high-fashion statement.', specs: ['Oversized Curb Links', 'High-Gloss 18K Polish', 'Heavy-Duty Clasp'], image: img24 },
  ];

  // Filtering products based on Search Query
  const filteredProducts = products.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.purity.toLowerCase().includes(q)
    );
  });

  const handleSlideChange = (newIndex: number) => {
    if (newIndex === activeSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide(newIndex);
      setIsAnimating(false);
    }, 250);
  };

  // Kina-calculate para max 5 items lang ang makikita sa pagination bar
  const getVisibleProducts = () => {
    const list = filteredProducts.length > 0 ? filteredProducts : products;
    const total = list.length;
    const maxVisible = 5;
    
    let safeActiveSlide = activeSlide;
    if (safeActiveSlide >= total) safeActiveSlide = 0;

    let start = Math.max(0, safeActiveSlide - Math.floor(maxVisible / 2));
    let end = start + maxVisible;

    if (end > total) {
      end = total;
      start = Math.max(0, end - maxVisible);
    }

    return list.slice(start, end);
  };

  // Zoom handlers
  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.4, 3.5));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.4, 0.8));
  const handleResetZoom = () => setZoomScale(1);

  const openZoomViewer = () => {
    setZoomScale(1);
    setIsZoomOpen(true);
  };

  const currentList = filteredProducts.length > 0 ? filteredProducts : products;
  const safeIndex = activeSlide < currentList.length ? activeSlide : 0;
  const current = currentList[safeIndex];

  return (
    <section style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)', padding: '1.5rem', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <style>{`
        .product-wrapper { max-width: 1100px; width: 100%; height: 100%; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; }
        .product-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
        .image-section-card { display: flex; flex-direction: column; gap: 0.75rem; width: 100%; align-items: center; }
        
        /* Keyframe Animations */
        @keyframes popFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes popFromRight {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Left Side Text Animation Class */
        .animate-left-to-right {
          animation: popFromLeft 0.5s cubic-bezier(0.16, 1, 0.9, 1) forwards;
        }

        /* Right Side Image/Card Animation Class */
        .animate-right-to-left {
          animation: popFromRight 0.5s cubic-bezier(0.16, 1, 0.9, 1) forwards;
        }

        .animating-out {
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        /* Search Box Styles */
        .search-box-container {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          padding: 6px 14px;
          border-radius: 20px;
          width: 100%;
          max-width: 280px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          transition: all 0.2s ease;
        }
        .search-box-container:focus-within {
          border-color: #0f172a;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
          background: #ffffff;
        }
        .search-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.75rem;
          font-family: inherit;
          color: #0f172a;
          width: 100%;
          font-weight: 600;
        }
        .search-input::placeholder {
          color: #94a3b8;
          font-weight: 500;
        }

        /* Nav Arrow Buttons Hover & Active Animations */
        .nav-arrow-btn {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          color: #0f172a;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .nav-arrow-btn:hover {
          background-color: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.25);
        }

        .nav-arrow-btn:active {
          transform: scale(0.92);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
        }

        /* Primary Explore Showcase Button Hover Animation */
        .btn-showcase-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 24px;
          background-color: #0f172a;
          color: #ffffff;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-showcase-primary:hover {
          background-color: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);
        }

        .btn-showcase-primary:active {
          transform: scale(0.96);
        }

        /* Fixed & clean image ratio container */
        .product-image-container { 
          position: relative; 
          width: 100%; 
          height: clamp(280px, 36vh, 380px); 
          border-radius: 20px; 
          overflow: hidden; 
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.08); 
          cursor: zoom-in; 
          background-color: #cbd5e1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-image-container:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 35px rgba(15, 23, 42, 0.12);
        }

        /* 5 Pill Items Pagination Container */
        .slide-pills-container { 
          display: inline-flex; 
          gap: 6px; 
          background: rgba(255, 255, 255, 0.75); 
          padding: 6px 12px; 
          border-radius: 24px; 
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(255, 255, 255, 0.9); 
          margin-bottom: 2px;
        }

        .zoom-overlay-hint { position: absolute; top: 12px; right: 12px; background: rgba(15, 23, 42, 0.65); color: #fff; padding: 6px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; display: flex; alignItems: center; gap: 4px; backdrop-filter: blur(6px); opacity: 0; transition: opacity 0.25s ease; }
        .product-image-container:hover .zoom-overlay-hint { opacity: 1; }

        @media (max-width: 850px) {
          .product-main-grid { grid-template-columns: 1fr; gap: 1rem; }
          .image-section-card { order: 1; }
          .product-content-area { order: 2; }
          .product-image-container { height: clamp(200px, 28vh, 260px); }
        }
      `}</style>

      <div className="product-wrapper">
        <div className="product-main-grid">
          {/* Left Side: Text Content Column (Pop Left to Right) */}
          <div key={`text-${safeIndex}`} className={`product-content-area ${isAnimating ? 'animating-out' : 'animate-left-to-right'}`}>
            <span className="section-badge" style={{ display: 'block', marginBottom: '0.4rem' }}>{current.badge}</span>
            <h1 className="section-title" style={{ marginBottom: '0.6rem' }}>{current.title}</h1>
            <p className="section-desc" style={{ marginBottom: '1rem', maxWidth: '480px' }}>{current.description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
              {current.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: '600', color: '#334155' }}>
                  <ShieldCheck size={14} color="#0f172a" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                className="btn-showcase-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Explore Showcase <ArrowRight size={14} />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="nav-arrow-btn"
                  onClick={() => handleSlideChange(safeIndex === 0 ? currentList.length - 1 : safeIndex - 1)} 
                  aria-label="Previous Product"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  className="nav-arrow-btn"
                  onClick={() => handleSlideChange(safeIndex === currentList.length - 1 ? 0 : safeIndex + 1)} 
                  aria-label="Next Product"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Image Column (Pop Right to Left) */}
          <div className="image-section-card">
            
            {/* SEARCH BAR ABOVE NUMBER PAGINATION */}
            <div className="search-box-container">
              <Search size={14} color="#64748b" />
              <input
                type="text"
                className="search-input"
                placeholder="Search silver, gold, diamond..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveSlide(0);
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#94a3b8' }}
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* 5-Item Max Pagination Bar */}
            <div className="slide-pills-container">
              {getVisibleProducts().map((item) => {
                const itemIndex = currentList.findIndex((p) => p.id === item.id);
                const isActive = safeIndex === itemIndex;
                return (
                  <button 
                    key={item.id} 
                    onClick={() => handleSlideChange(itemIndex)} 
                    style={{ 
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%', 
                      fontWeight: isActive ? '800' : '600', 
                      fontSize: '0.75rem', 
                      background: isActive ? '#0f172a' : 'transparent', 
                      color: isActive ? '#ffffff' : '#64748b', 
                      border: 'none', 
                      cursor: 'pointer', 
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.numberTag}
                  </button>
                );
              })}
            </div>

            {/* Clickable Image Container with Pop-in Animation */}
            <div 
              key={`img-${safeIndex}`}
              className={`product-image-container ${isAnimating ? 'animating-out' : 'animate-right-to-left'}`} 
              onClick={openZoomViewer}
            >
              <img 
                src={current.image} 
                alt={current.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  display: 'block' 
                }} 
              />
              
              <div className="zoom-overlay-hint">
                <ZoomIn size={14} /> Click to Zoom
              </div>

              <div style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '6px 12px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(10px)', color: '#0f172a', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Gem size={12} /> {current.purity}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hiwalay na Showcase Modal Component */}
      <ShowcaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={current}
      />

      {/* FULLSCREEN IMAGE ZOOM VIEWER MODAL */}
      {isZoomOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 4000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Floating Controls Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 16px',
              borderRadius: '30px',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            }}
          >
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <ZoomIn size={20} />
            </button>
            <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '700', minWidth: '45px', textAlign: 'center' }}>
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '6px' }}
            >
              <RotateCcw size={18} />
            </button>
            <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.3)', margin: '0 4px' }} />
            <button
              onClick={() => setIsZoomOpen(false)}
              title="Close"
              style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Zoomable Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflow: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
            }}
          >
            <img
              src={current.image}
              alt={current.title}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px',
                transform: `scale(${zoomScale})`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: zoomScale > 1 ? 'grab' : 'default',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}