import services from '../data/services.json'

export default function Services() {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {services.slice(0,3).map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="service-media"><img src={s.img} alt={s.title} /></div>
              <div className="service-desc">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {services.slice(3).map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="service-media"><img src={s.img} alt={s.title} /></div>
              <div className="service-desc">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
