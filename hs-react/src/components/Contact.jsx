export default function Contact() {
  // Exact place (for directions)
  const mapsShortUrl = 'https://maps.app.goo.gl/jcQa1m8oV2qN2b6A9'
  // Show business name in embedded map and search link
  const businessName = 'HS DESIGN ENGINEER & CONSULTANT'
  const qName = encodeURIComponent(businessName)
  const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${qName}`
  const mapsEmbedSrc = `https://www.google.com/maps?q=${qName}&output=embed`
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsShortUrl)}&travelmode=driving`

  const directionsFromHere = () => {
    const open = (url) => window.open(url, '_blank', 'noopener')
    if (!('geolocation' in navigator)) {
      open(mapsDirectionsUrl)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        const origin = encodeURIComponent(`${latitude},${longitude}`)
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent(mapsShortUrl)}&travelmode=driving`
        open(url)
      },
      () => open(mapsDirectionsUrl),
      { enableHighAccuracy: true, timeout: 8000 }
    )
  }
  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            </div>
            <form className="contact-form" action="https://formspree.io/f/mnjnzwlr" method="POST">
              <input type="hidden" name="_subject" value="New Contact Form Submission from HSDESIGN" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h4>Contact Info</h4>
            <p><span>Address: </span>DHADI Tower, Ganesh Vihar,<br />Ajadpur Khurd, Dehradun</p>
          </div>
          <div className="contact-item">
            <p><span>Phone 1: </span> +91 8057 372 504</p>
            <p><span>Phone 2: </span> +91 7817 802 504</p>
          </div>
          <div className="contact-item">
            <p><span>Email: </span>hsdesignengineer@gmail.com</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="section-title">
              <h2>Find Us</h2>
            </div>
            <div className="embed-responsive embed-responsive-16by9 map-embed" aria-label="Location map">
              <iframe
                className="embed-responsive-item"
                src={mapsEmbedSrc}
                title="HS Design Engineer & Consultant location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="map-actions">
              <a
                href={mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-default"
                aria-label="View on Google Maps"
              >
                View on Google Maps
              </a>
              <button
                type="button"
                className="btn btn-custom"
                onClick={directionsFromHere}
                aria-label="Get driving directions"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li><a href="https://www.instagram.com/yourprofile"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.fa-facebook.com/yourprofile"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.twitter.com/yourprofile"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.google.com/yourprofile"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="https://www.youtube.com/yourprofile"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
