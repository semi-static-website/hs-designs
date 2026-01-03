import team from '../data/team.json'
import '../styles/team.css'

export default function Team() {
  return (
    <div id="team" className="section">
      <div className="container team-section">
        <div className="section-title text-center">
          <h2>Our Team</h2>
          <p>Meet the people behind our designs and delivery.</p>
        </div>
        <div className="team-row">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="thumbnail text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="img-circle"
                  style={{ width: 160, height: 160, objectFit: 'cover', display: 'block', margin: '20px auto', border: '3px solid #eee' }}
                />
                <div className="caption text-center">
                  <h3>{member.name}</h3>
                  <p><strong>{member.role}</strong></p>
                  <p>{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
