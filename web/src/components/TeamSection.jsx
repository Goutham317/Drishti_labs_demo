/**
 * TeamSection — Team member cards.
 */
export default function TeamSection() {
  const members = [
    {
      initials: 'NP',
      name: 'Niranjan P',
      desc: 'Co-founder · CEO\nB.Tech Civil, NIT Calicut. Computer vision research at IIT Madras.',
    },
    {
      initials: 'SN',
      name: 'Sankar V Nair',
      desc: 'Co-founder · COO\nPhD in NDT, IIT Madras. Condition assessment delivery experience.',
    },
    {
      initials: 'AR',
      name: 'Arun R Nath',
      desc: 'Co-founder · CTO\nM.Tech Geoinformatics, NITK Surathkal. Drone-based inspection.',
    },
    {
      initials: 'RP',
      name: 'Dr. Radhakrishna Pillai',
      desc: 'Chief Advisor · Stakeholder\nProfessor, IIT Madras. Concrete durability and corrosion.',
    },
    {
      initials: 'AP',
      name: 'Dr. Aritra Pal',
      desc: 'Technical Advisor\nAssistant Professor, IIT Madras. Computer vision and photogrammetry.',
    },
    {
      initials: 'IIT',
      name: 'Nirmaan · IIT Madras',
      desc: 'Incubation\nPre-incubator at IIT Madras supporting the venture.',
    },
  ]

  return (
    <section id="team">
      <div className="container reveal">
        <div className="section-kicker mono">05 / BUILT AT IIT MADRAS</div>
        <h2 className="section-title">
          Civil engineering meets{' '}
          <span className="orange">computer vision.</span>
        </h2>
        <div className="team-grid">
          {members.map((m, i) => (
            <div className="person" key={i}>
              <div className="avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <p>
                {m.desc.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < m.desc.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
