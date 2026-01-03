import { useEffect, useRef, useState } from 'react'
import works from '../data/works.json'
import '../styles/portfolio.css'

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [activeProjectIdx, setActiveProjectIdx] = useState(0)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [paused, setPaused] = useState(false)
  const stripRef = useRef(null)

  const openViewer = (pIdx, imgIdx = 0) => {
    setActiveProjectIdx(pIdx)
    setActiveImageIdx(imgIdx)
    setImageLoaded(false)
    setPaused(true)
    setOpen(true)
  }

  const closeViewer = () => { setOpen(false); setPaused(false) }

  const nextImage = () => {
    const imgs = works[activeProjectIdx].images || []
    const nextIdx = (activeImageIdx + 1) % (imgs.length || 1)
    setImageLoaded(false)
    setActiveImageIdx(nextIdx)
  }

  const prevImage = () => {
    const imgs = works[activeProjectIdx].images || []
    const prevIdx = (activeImageIdx - 1 + (imgs.length || 1)) % (imgs.length || 1)
    setImageLoaded(false)
    setActiveImageIdx(prevIdx)
  }

  // Preload neighboring images for smoother navigation
  useEffect(() => {
    if (!open) return
    const imgs = works[activeProjectIdx].images || []
    if (imgs.length > 1) {
      const nextIdx = (activeImageIdx + 1) % imgs.length
      const prevIdx = (activeImageIdx - 1 + imgs.length) % imgs.length
      ;[imgs[nextIdx]?.large, imgs[prevIdx]?.large].forEach((src) => {
        if (!src) return
        const img = new Image()
        img.src = src
      })
    }
  }, [open, activeProjectIdx, activeImageIdx])

  // Keyboard navigation: Esc to close, arrows to navigate
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeViewer()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, activeProjectIdx, activeImageIdx])

  // Continuous auto-scroll for portfolio strip
  useEffect(() => {
    let rafId
    let lastTs = 0
    const speed = 60 // pixels per second
    const step = (ts) => {
      const el = stripRef.current
      if (lastTs === 0) lastTs = ts
      const dt = ts - lastTs
      lastTs = ts
      if (el && !paused) {
        el.scrollLeft += (speed * dt) / 1000
        const contentWidth = el.scrollWidth / 2 // duplicated content width
        if (el.scrollLeft >= contentWidth) {
          el.scrollLeft -= contentWidth
        }
      }
      rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [paused])

  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Works</h2>
        </div>
        <div
          className="portfolio-strip"
          role="list"
          ref={stripRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...works, ...works].map((project, i) => {
            const imgs = project.images && project.images.length ? project.images : []
            const first = imgs[0]
            return (
              <div className="portfolio-card" role="listitem" key={`${project.title}-${i}`}>
                <a
                  href={first ? first.large : '#'}
                  title={project.title}
                  onClick={(e) => { e.preventDefault(); openViewer(i % works.length, 0) }}
                  className="portfolio-link"
                  tabIndex={0}
                >
                  <div className="portfolio-thumb">
                    {first && <img src={first.small} alt={project.title} />}
                    <div className="portfolio-overlay">
                      <h4>{project.title}</h4>
                      {imgs.length > 1 && <small>{imgs.length} images</small>}
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="lightbox-backdrop"
          onClick={closeViewer}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-container">
              {!imageLoaded && <div className="lightbox-spinner" aria-label="Loading image" />}
              <img
                src={(works[activeProjectIdx].images || [])[activeImageIdx]?.large || (works[activeProjectIdx].images || [])[activeImageIdx]?.small}
                alt={works[activeProjectIdx].title}
                onLoad={() => setImageLoaded(true)}
                className={`lightbox-img ${imageLoaded ? 'is-loaded' : ''}`}
              />
            </div>
            {(works[activeProjectIdx].images || []).length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="lightbox-nav lightbox-prev"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="lightbox-nav lightbox-next"
                >
                  ›
                </button>
              </>
            )}
            <button
              type="button"
              onClick={closeViewer}
              className="lightbox-close"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
