import { useState, useEffect } from 'react';
import { Sparkles, X, ShoppingBag, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';

interface ProductItem {
  id: number;
  badge: string;
  title: string;
  price: string;
  weight: string;
  purity: string;
  image: string;
}

interface ShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductItem;
}

export default function ShowcaseModal({ isOpen, onClose, product }: ShowcaseModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(product);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Para ma-update ang state kapag pinalitan ng user ang slide / pinindot ang Showcase
  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  if (!isOpen) return null;

  const handleAddToList = (title: string) => {
    // Smooth custom toast sa halip na browser alert()
    setToastMessage(`Added ${title} to order list!`);

    // Auto dismiss pagkalipas ng 3 segundo
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const affordableProducts = [
    {
      id: 101,
      badge: 'AFFORDABLE ELEGANCE',
      title: 'SILVER STACKING BANDS',
      price: '₱1,950',
      weight: '3.2g',
      purity: '925 Sterling Silver',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 102,
      badge: 'BEST BUDGET SELECTION',
      title: 'SOLITAIRE DIAMOND STUDS',
      price: '₱2,150',
      weight: '2.5g',
      purity: '925 Sterling Silver',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 103,
      badge: 'POPULAR CHOICE',
      title: 'PEARL ELEGANCE PENDANT',
      price: '₱2,899',
      weight: '3.8g',
      purity: '925 Sterling Silver',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const activeDisplay = selectedProduct || product;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          overflowY: 'auto',
        }}
        onClick={onClose}
      >
        <style>{`
          @keyframes rightCardSlideDesktop {
            0% {
              opacity: 0;
              transform: scale(0.9) translateX(-40%);
            }
            35% {
              opacity: 1;
              transform: scale(1) translateX(-40%);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateX(0);
            }
          }

          @keyframes leftPanelSlideDesktop {
            0% {
              opacity: 0;
              transform: translateX(-40px);
            }
            50% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes topCardSlideMobile {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(40%);
            }
            35% {
              opacity: 1;
              transform: scale(1) translateY(40%);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes bottomPanelSlideMobile {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            50% {
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes toastSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .showcase-right-card {
            animation: rightCardSlideDesktop 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .showcase-left-panel {
            animation: leftPanelSlideDesktop 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .custom-toast-notification {
            animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .cheaper-item-card {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e2e8f0;
          }

          .cheaper-item-card:hover {
            border-color: #0f172a;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
          }

          .product-display-transition {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .btn-order-action {
            transition: all 0.2s ease;
          }
          .btn-order-action:hover {
            background-color: #1e293b !important;
            transform: translateY(-1px);
          }
          .btn-order-action:active {
            transform: scale(0.98);
          }

          @media (max-width: 768px) {
            .showcase-wrapper {
              flex-direction: column !important;
              max-height: 90vh !important;
              overflow-y: auto !important;
              padding-right: 2px;
            }

            .showcase-right-card {
              animation: topCardSlideMobile 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
              width: 100% !important;
            }

            .showcase-left-panel {
              animation: bottomPanelSlideMobile 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
              width: 100% !important;
            }

            .modal-grid-content {
              grid-template-columns: 1fr !important;
            }

            .modal-img-container {
              height: 180px !important;
            }

            .mobile-center-text {
              text-align: center !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
        `}</style>

        <div
          className="showcase-wrapper"
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '920px',
            width: '100%',
            alignItems: 'stretch',
          }}
        >
          {/* MAIN SHOWCASE DETAILS CARD */}
          <div
            className="showcase-right-card"
            style={{
              flex: '1.3',
              background: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="#0f172a" />
                <span style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '1px' }}>SHOWCASE DETAILS</span>
              </div>
              <button
                onClick={onClose}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Body Content */}
            <div style={{ padding: '1.25rem' }}>
              <div
                className="modal-grid-content"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <div className="modal-img-container" style={{ borderRadius: '16px', overflow: 'hidden', height: '210px' }}>
                  <img
                    key={activeDisplay.id}
                    src={activeDisplay.image}
                    alt={activeDisplay.title}
                    className="product-display-transition"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="mobile-center-text">
                  <span className="section-badge" style={{ fontSize: '0.65rem' }}>{activeDisplay.badge}</span>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: '900', color: '#0f172a', margin: '4px 0 6px 0', lineHeight: 1.1 }}>{activeDisplay.title}</h2>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{activeDisplay.price}</div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: '#475569', marginBottom: '1rem' }}>
                    <div><strong>Material:</strong> {activeDisplay.purity}</div>
                    <div><strong>Weight:</strong> {activeDisplay.weight}</div>
                    <div><strong>Certification:</strong> Hallmark 925 Verified</div>
                  </div>

                  <button
                    className="btn-order-action"
                    onClick={() => handleAddToList(activeDisplay.title)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '12px',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '0.8rem',
                    }}
                  >
                    <ShoppingBag size={15} /> Add to Order List
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MORE AFFORDABLE OPTIONS PANEL */}
          <div
            className="showcase-left-panel"
            style={{
              flex: '1',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '1.25rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              <Tag size={18} color="#0f172a" />
              <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '0.5px' }}>
                MORE AFFORDABLE OPTIONS
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, justifyContent: 'center' }}>
              {affordableProducts.map((item) => (
                <div
                  key={item.id}
                  className="cheaper-item-card"
                  onClick={() => setSelectedProduct(item as ProductItem)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    background: activeDisplay.id === item.id ? '#f8fafc' : '#ffffff',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '52px', height: '52px', borderRadius: '12px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: '800', color: '#64748b', display: 'block' }}>{item.badge}</span>
                    <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0f172a' }}>{item.title}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#16a34a' }}>{item.price}</div>
                  </div>
                  <ArrowRight size={14} color="#94a3b8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODERN FLOATING TOAST NOTIFICATION (NO MORE BROWSER ALERT) */}
      {toastMessage && (
        <div
          className="custom-toast-notification"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '12px 18px',
            borderRadius: '16px',
            boxShadow: '0 12px 28px -5px rgba(15, 23, 42, 0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 4000,
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <CheckCircle2 size={18} color="#22c55e" />
          <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{toastMessage}</span>
        </div>
      )}
    </>
  );
}