import type { EventLandingSeedData } from '@/lib/defaultEventLanding'

const programTagMap = {
  scene: {
    className: 'tag-scene',
    label: 'Scene',
  },
  music: {
    className: 'tag-kultur',
    label: 'Musik',
  },
  food: {
    className: 'tag-mad',
    label: 'Mad',
  },
  kulturpladsen: {
    className: 'tag-kulturpladsen',
    label: 'Kulturpladsen',
  },
  havnen: {
    className: 'tag-havnen',
    label: 'Havnen',
  },
} as const

const activityCategoryMap = {
  workshop: {
    cardClassName: 'cat-workshop',
    label: 'Workshop',
  },
  children: {
    cardClassName: 'cat-boern',
    label: 'Børn',
  },
  nature: {
    cardClassName: 'cat-natur',
    label: 'Natur',
  },
  music: {
    cardClassName: 'cat-musik',
    label: 'Musik',
  },
} as const

type Props = {
  data: EventLandingSeedData
}

export const EventLandingPage = ({ data }: Props) => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-art" aria-hidden="true" />
          <div className="cliff-cut" />
          <div className="grain" />
        </div>

        <div className="fossil-deco" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 20 C60 20, 20 60, 20 100 C20 140, 60 180, 100 180 C140 180, 180 140, 180 100 C180 60, 140 20, 100 20 Z"
              stroke="#2A2520"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M100 20 C85 60, 80 80, 100 100 C120 120, 115 140, 100 180"
              stroke="#2A2520"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M20 100 C60 85, 80 80, 100 100 C120 120, 140 115, 180 100"
              stroke="#2A2520"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="100" cy="100" r="15" stroke="#2A2520" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="#2A2520" strokeWidth="0.8" fill="none" />
            <circle cx="100" cy="100" r="65" stroke="#2A2520" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-title-block">
            <h1>
              <span>{data.hero.titleLineOne}</span>
              <span className="line-kultur">{data.hero.titleLineTwo}</span>
            </h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
          </div>
          <div className="hero-meta">
            <div className="date">{data.hero.date}</div>
            <div className="location">{data.hero.location}</div>
            <div className="time-badge">{data.hero.timeBadge}</div>
          </div>
        </div>

        <div className="scroll-hint">Scroll</div>
      </section>

      <div className="intro-band">
        <div className="intro-text">
          {data.intro.lead} <strong>{data.intro.highlight}</strong> {data.intro.body}
        </div>
        <div className="stats">
          {data.intro.stats.map((stat) => (
            <div key={`${stat.label}-${stat.value}`} className="stat">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="program">
        <div className="section-label">{data.program.sectionLabel}</div>
        <div className="section-title">{data.program.sectionTitle}</div>

        <div className="timeline">
          {data.program.items.map((item, index) => {
            const tagMeta = programTagMap[item.tag]

            return (
              <div
                key={`${item.time}-${item.title}`}
                className="timeline-item"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className={`timeline-tag ${tagMeta.className}`}>{tagMeta.label}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="activities">
        <div className="section-label">{data.activities.sectionLabel}</div>
        <div className="section-title">{data.activities.sectionTitle}</div>

        <div className="act-grid">
          {data.activities.items.map((item, index) => {
            const categoryMeta = activityCategoryMap[item.category]

            return (
              <div
                key={`${item.category}-${item.title}`}
                className={`act-card ${categoryMeta.cardClassName}`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="cat-label">{categoryMeta.label}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mad-section">
        <div className="section-label">{data.food.sectionLabel}</div>
        <div className="section-title">{data.food.sectionTitle}</div>

        <div className="food-grid">
          {data.food.items.map((item, index) => (
            <div
              key={item.name}
              className="food-item"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="marked">
        <div className="section-label">{data.market.sectionLabel}</div>
        <div className="section-title">{data.market.sectionTitle}</div>

        <ul className="exhibitor-list">
          {data.market.exhibitors.map((exhibitor) => (
            <li key={exhibitor.name}>{exhibitor.name}</li>
          ))}
        </ul>
      </section>

      <section className="praktisk">
        <div className="section-label">{data.practical.sectionLabel}</div>
        <div className="section-title">{data.practical.sectionTitle}</div>

        <div className="info-cards">
          {data.practical.items.map((item) => (
            <div key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-title">{data.footer.title}</div>
        <p>{data.footer.details}</p>
        <p className="footer-note">{data.footer.note}</p>
      </footer>
    </>
  )
}
