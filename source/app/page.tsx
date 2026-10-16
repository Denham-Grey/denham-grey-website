import ScrollToTopOnLoad from "./ScrollToTopOnLoad";

const Arrow = () => <span aria-hidden="true">↗</span>;

const SystemIcon = ({ type }: { type: string }) => {
  let artwork;

  switch (type) {
    case "crms":
      artwork = (
        <>
          <rect x="2.5" y="3" width="19" height="18" rx="1.5" />
          <circle cx="8" cy="9" r="2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4.8 17c.4-2.6 1.8-4 3.2-4s2.8 1.4 3.2 4M12.8 17c.4-2.6 1.8-4 3.2-4s2.8 1.4 3.2 4M8 3v2m8-2v2" />
        </>
      );
      break;
    case "credit":
      artwork = (
        <>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <path d="M7 16v-3m5 3V9m5 7V7M6.5 8h3M6 2v2m6-2v2m6-2v2M6 20v2m6-2v2m6-2v2" />
          <circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" />
        </>
      );
      break;
    case "green":
      artwork = (
        <>
          <path d="m12 2 8.5 5v10L12 22l-8.5-5V7L12 2Z" />
          <path d="M17.5 7.5c-5.4.4-8.9 2.5-9.2 6.1-.2 2.2 1.6 3.9 3.7 3.4 3.5-.8 4.5-4.9 5.5-9.5Z" />
          <path d="M7 19c1.7-3.5 4.1-5.8 7.7-7.4M3.5 10H1.8m18.7 3h1.7" />
        </>
      );
      break;
    case "portfolio":
      artwork = (
        <>
          <rect x="2.5" y="3.5" width="19" height="14" rx="1.5" />
          <path d="M7 21h10M12 17.5V21M6 14V9m4 5v-2m4 2V7m4 7v-4" />
          <path d="m6 8 4 2 4-4 4 2" />
          <circle cx="18" cy="8" r="1" fill="currentColor" stroke="none" />
        </>
      );
      break;
    case "aml":
      artwork = (
        <>
          <path d="M12 2.5 20 6v5.8c0 4.7-3.2 8.4-8 9.7-4.8-1.3-8-5-8-9.7V6l8-3.5Z" />
          <circle cx="12" cy="11" r="4" />
          <path d="M12 5.5V7m0 8v1.5M6.5 11H8m8 0h1.5M9.2 8.2l1.1 1.1m3.4 3.4 1.1 1.1" />
          <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
        </>
      );
      break;
    case "impact":
      artwork = (
        <>
          <path d="M4 2.5h13l3 3v16H4v-19Z" />
          <path d="M17 2.5v4h3M7 17v-4m4 4V9m4 8v-6M7 6.5h6" />
          <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
          <circle cx="11" cy="9" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
        </>
      );
      break;
    default:
      artwork = (
        <>
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <path d="m6.5 8 5.5-2.5L17.5 8 12 10.5 6.5 8Z" />
          <path d="M8.5 9v4.2c2 1.5 5 1.5 7 0V9M7 17.5h10M19 8v5" />
          <circle cx="19" cy="15" r="1" fill="currentColor" stroke="none" />
        </>
      );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {artwork}
    </svg>
  );
};

const operatingSystems = [
  {
    id: "crms",
    name: "D&G CRMS",
    description:
      "Manages partner engagement, onboarding records and relationship stewardship.",
  },
  {
    id: "credit",
    name: "FI Internal Credit Rating Platform",
    description:
      "Scores institutional strength, creditworthiness and risk appetite.",
  },
  {
    id: "green",
    name: "Green Rating Platform",
    description:
      "Tests green eligibility and the environmental integrity of financed activities.",
  },
  {
    id: "portfolio",
    name: "Portfolio Monitoring Platform",
    description:
      "Tracks utilisation, portfolio quality, covenants and early-warning signals.",
  },
  {
    id: "aml",
    name: "AML Screening & Monitoring Platform",
    description:
      "Screens counterparties and monitors financial crime risk throughout the facility.",
  },
  {
    id: "impact",
    name: "Impact Monitoring & Reporting Platform",
    description:
      "Captures climate, inclusion and enterprise outcomes for auditable reporting.",
  },
  {
    id: "academy",
    name: "Green Academy Learning Platform",
    description:
      "Builds and certifies PFI capability through structured digital learning.",
  },
];

const onboardingSteps = [
  {
    number: "01",
    label: "Engage",
    title: "Initial engagement",
    description:
      "We establish strategic fit, understand funding needs and define the institution’s readiness pathway.",
    platforms: ["crms"],
  },
  {
    number: "02",
    label: "Assess",
    title: "Institutional due diligence",
    description:
      "We assess governance, regulatory standing, financial strength, credit systems and portfolio performance.",
    platforms: ["credit", "aml"],
  },
  {
    number: "03",
    label: "Design",
    title: "Portfolio and impact design",
    description:
      "Together, we define eligible green and women-focused segments, pipeline expectations and impact indicators.",
    platforms: ["green", "impact"],
  },
  {
    number: "04",
    label: "Structure",
    title: "Facility structuring",
    description:
      "We agree facility size, tenor, pricing, security, covenants and the practical terms for responsible on-lending.",
    platforms: ["credit", "portfolio"],
  },
  {
    number: "05",
    label: "Approve",
    title: "Approval and onboarding",
    description:
      "Investment approval, legal documentation, operating procedures and reporting arrangements are completed.",
    platforms: ["aml", "academy"],
  },
  {
    number: "06",
    label: "Steward",
    title: "Deployment and stewardship",
    description:
      "Capital is deployed with ongoing portfolio monitoring, impact reporting and targeted capacity building.",
    platforms: ["portfolio", "aml", "green", "impact", "academy", "crms"],
  },
];

const peopleGroups = [
  {
    number: "01",
    label: "Governance and oversight",
    title: "Board of Directors",
    description:
      "Independent oversight spanning institutional governance, investment, risk and measurable impact.",
    profiles: [
      {
        name: "Shehu Jafiya",
        title: "Chairman and Independent Director",
        initials: "SJ",
        image: "/people/shehu.svg",
      },
      {
        name: "David Chinda",
        title: "Managing Director",
        initials: "DC",
        image: "/people/david.svg",
      },
      {
        name: "Kazeem Abdulrasheed Olanrewaju",
        title: "Independent Non-Executive Director",
        initials: "KO",
        image: "/people/kazeem.svg",
      },
      {
        name: "Sadiya El-Rufai",
        title: "Independent Non-Executive Director",
        initials: "SE",
        image: "/people/sadiat.svg",
      },
      {
        name: "Dauda Madubu Milgwe",
        title: "Non-Executive Director",
        initials: "DM",
        image: "/people/dauda.svg",
      },
      {
        name: "Dr Babangida Yohanna Kure",
        title: "Non-Executive Director",
        initials: "BK",
        image: "/people/kure.svg",
      },
      {
        name: "Victor Onoja Victor",
        title: "Non-Executive Director",
        initials: "VV",
        image: "/people/victor.svg",
      },
    ],
  },
  {
    number: "02",
    label: "Execution and stewardship",
    title: "Management Team",
    description:
      "Leadership across development finance, investments, portfolio management, impact and partnerships.",
    profiles: [
      {
        name: "David Chinda",
        title: "Managing Director",
        initials: "DC",
        image: "/people/david.svg",
      },
      {
        name: "Bamidele Ibine FCA",
        title: "Chief Risk Officer",
        initials: "BI",
        image: "/people/bami.svg",
      },
      {
        name: "Awa Michael",
        title: "Head, Internal Audit, Control and Compliance",
        initials: "AM",
        image: "/people/awa.svg",
      },
      {
        name: "Daniel Ijudai Denis",
        title: "Head, Human Resources and Administration",
        initials: "DD",
        image: "/people/daniel.svg",
      },
      {
        name: "Sunday Ojo",
        title: "Climate Change and Sustainability Specialist",
        initials: "SO",
      },
      {
        name: "Olayinka Olaiya",
        title: "Technical Assistant",
        initials: "OO",
        image: "/people/Olayinka_Olaiya.png",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <ScrollToTopOnLoad />
      <header className="site-header" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Denham and Grey home">
          Denham &amp; Grey
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          <a href="#model">Our Model</a>
          <a href="#process">Our Process</a>
          <a href="#people">Our People</a>
          <a href="#focus">Focus</a>
          <a href="#impact">Impact</a>
          <a
            href="https://terminal.denhamgrey.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terminal
          </a>
        </nav>
        <a className="investor-link" href="#partners">
          Investor relations <Arrow />
        </a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#model">Our Model</a>
            <a href="#process">Our Process</a>
            <a href="#people">Our People</a>
            <a href="#focus">Focus</a>
            <a href="#impact">Impact</a>
            <a href="#partners">Partner with us</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Impact capital for an inclusive, climate-resilient Africa
          </p>
          <h1>
            Patient capital.
            <br />
            Enduring impact.
          </h1>
          <p className="hero-summary">
            We equip financial institutions with long-term capital to finance
            green projects and women-owned businesses at scale.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#partners">
              Partner with us <Arrow />
            </a>
            <a className="button button-secondary" href="#model">
              Explore our model <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/hero-landscape.png"
            alt="Layered African landscape with luminous pathways representing patient capital flowing into the real economy"
          />
          <div className="hero-visual-tag">
            <span>Private Capital,</span>
            <strong>Public Benefit.</strong>
          </div>
        </div>
      </section>

      <section className="approach-section" id="model">
        <div className="model-heading-band">
          <div className="section-shell model-heading-inner">
            <p className="mandate-title">Our Model</p>
            <h2>Capital that moves through trusted local institutions.</h2>
          </div>
        </div>

        <div className="approach-panel">
          <div className="section-shell approach-inner">
            <div
              className="model-flow"
              role="img"
              aria-label="Capital flows from Denham and Grey to commercial banks, microfinance banks, non-interest banks and finance companies, which on-lend to beneficiaries: green projects and women-owned businesses."
            >
              <div className="flow-origin">
                <p className="flow-role">Patient capital provider</p>
                <h3>Denham &amp; Grey</h3>
                <p>
                  Long-term capital, disciplined structuring and impact
                  alignment
                </p>
              </div>

              <div className="flow-spine flow-line" aria-hidden="true">
                <span className="flow-pulse" />
              </div>

              <div className="flow-tier flow-tier-partners">
                <p className="flow-tier-label">
                  Partner financial institutions
                </p>
                <div className="institution-grid">
                  <article>
                    <span className="institution-mark">CB</span>
                    <h4>Commercial banks</h4>
                  </article>
                  <article>
                    <span className="institution-mark">MFB</span>
                    <h4>Microfinance banks</h4>
                  </article>
                  <article>
                    <span className="institution-mark">NIB</span>
                    <h4>Non-interest banks</h4>
                  </article>
                  <article>
                    <span className="institution-mark">FC</span>
                    <h4>Finance companies</h4>
                  </article>
                  <i
                    className="flow-branch-pulse inbound-pulse inbound-pulse-1"
                    aria-hidden="true"
                  />
                  <i
                    className="flow-branch-pulse inbound-pulse inbound-pulse-2"
                    aria-hidden="true"
                  />
                  <i
                    className="flow-branch-pulse inbound-pulse inbound-pulse-3"
                    aria-hidden="true"
                  />
                  <i
                    className="flow-branch-pulse inbound-pulse inbound-pulse-4"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flow-distribution" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <i className="flow-branch-pulse combined-flow-pulse" />
                <b className="flow-arrowhead">↓</b>
              </div>

              <div className="flow-tier flow-tier-beneficiaries">
                <p className="flow-tier-label beneficiary-tier-label">
                  Beneficiaries
                </p>
                <div className="beneficiary-grid">
                  <div className="beneficiary-path">
                    <div className="beneficiary-branch" aria-hidden="true">
                      <i className="flow-branch-pulse beneficiary-branch-pulse" />
                      <b className="beneficiary-arrowhead">↓</b>
                    </div>
                    <article className="beneficiary beneficiary-green">
                      <span>01</span>
                      <div>
                        <p>Climate transition</p>
                        <h4>Green projects</h4>
                        <small>
                          Renewable energy, energy efficiency, climate-smart
                          agriculture, water and circular economy
                        </small>
                      </div>
                    </article>
                  </div>
                  <div className="beneficiary-path">
                    <div className="beneficiary-branch" aria-hidden="true">
                      <i className="flow-branch-pulse beneficiary-branch-pulse" />
                      <b className="beneficiary-arrowhead">↓</b>
                    </div>
                    <article className="beneficiary beneficiary-women">
                      <span>02</span>
                      <div>
                        <p>Inclusive enterprise</p>
                        <h4>Women-owned businesses</h4>
                        <small>
                          Working capital, productive assets and enterprise
                          growth
                        </small>
                      </div>
                    </article>
                  </div>
                  <i
                    className="flow-branch-pulse final-group-pulse"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flow-caption">
                <span aria-hidden="true">↓</span>
                <p>
                  Partner institutions originate, assess and on-lend—turning
                  patient capital into measurable climate and inclusion
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-shell process-inner">
          <div className="process-heading">
            <div>
              <p className="section-kicker">Our process</p>
              <h2>From first conversation to disciplined deployment.</h2>
            </div>
            <p>
              A controlled investment pathway supported by seven integrated
              platforms for underwriting, onboarding and portfolio stewardship.
            </p>
          </div>

          <ol
            className="process-timeline"
            aria-label="Partner financial institution onboarding process"
          >
            {onboardingSteps.map((step) => (
              <li key={step.number}>
                <div className="process-node" aria-hidden="true">
                  <span>{step.number}</span>
                </div>
                <article>
                  <div className="process-copy">
                    <p className="process-label">{step.label}</p>
                    <h3>{step.title}</h3>
                    <p className="process-description">{step.description}</p>
                  </div>
                  <div
                    className="process-tools"
                    aria-label={`Platforms used during ${step.title}`}
                  >
                    <span>Platforms in operation</span>
                    <div className="process-tool-list">
                      {step.platforms.map((platformId) => {
                        const system = operatingSystems.find(
                          (item) => item.id === platformId,
                        );

                        return system ? (
                          <div className="process-tool" key={system.id}>
                            <div className="process-tool-icon">
                              <SystemIcon type={system.id} />
                            </div>
                            <div>
                              <h4>{system.name}</h4>
                              <p>{system.description}</p>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="people-section" id="people">
        <div className="section-shell people-inner">
          <div className="people-heading">
            <p className="section-kicker section-kicker-light">Our people</p>
            <h2>Development Finance meets Banking Expertise.</h2>
            <p>
              A governance and management structure built for patient capital,
              responsible risk-taking and enduring institutional partnerships.
            </p>
          </div>

          <div className="people-groups">
            {peopleGroups.map((group) => (
              <section className="people-group" key={group.title}>
                <header>
                  <span>{group.number}</span>
                  <div>
                    <p>{group.label}</p>
                    <h3>{group.title}</h3>
                    <small>{group.description}</small>
                  </div>
                </header>
                <div className="people-roster">
                  {group.profiles.map((profile) => (
                    <article key={`${group.title}-${profile.name}`}>
                      {profile.image ? (
                        <img
                          className="profile-photo"
                          src={profile.image}
                          alt={`${profile.name}, ${profile.title}`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="profile-mark" aria-hidden="true">
                          {profile.initials}
                        </div>
                      )}
                      <div>
                        <h4>{profile.name}</h4>
                        <p>{profile.title}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="focus section-shell" id="focus">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Investment focus</p>
            <h2>Two priorities. One inclusive future.</h2>
          </div>
          <p>
            Our mandate directs capital toward climate solutions and women-owned
            enterprises—two powerful engines of resilience, productivity and
            shared prosperity.
          </p>
        </div>

        <div className="focus-grid">
          <article className="focus-card focus-green">
            <div className="focus-number">01</div>
            <div className="focus-card-content">
              <p className="card-kicker">Climate transition</p>
              <h3>Green projects</h3>
              <p>
                Financing for practical solutions that expand clean energy,
                improve resource efficiency and strengthen climate resilience.
              </p>
              <div className="tag-list" aria-label="Green investment themes">
                <span>Renewable energy</span>
                <span>Energy efficiency</span>
                <span>Climate-smart agriculture</span>
                <span>Water &amp; circular economy</span>
              </div>
            </div>
          </article>

          <article className="focus-card focus-women">
            <div className="focus-number">02</div>
            <div className="focus-card-content">
              <p className="card-kicker">Inclusive enterprise</p>
              <h3>Women-owned businesses</h3>
              <p>
                Capital that helps financial institutions serve women
                entrepreneurs with products designed for growth, resilience and
                long-term value creation.
              </p>
              <div className="tag-list" aria-label="Women enterprise themes">
                <span>Working capital</span>
                <span>Productive assets</span>
                <span>Enterprise growth</span>
                <span>Market access</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="section-shell impact-inner">
          <div className="impact-intro">
            <p className="section-kicker">Impact discipline</p>
            <h2>Impact is part of the underwriting.</h2>
            <p>
              We connect capital decisions to measurable outcomes, working with
              partner institutions to define, monitor and report the change
              created by every portfolio.
            </p>
          </div>

          <div className="impact-grid">
            <article>
              <span>Climate</span>
              <h3>Avoided emissions</h3>
              <p>Energy access, clean generation and resource efficiency.</p>
            </article>
            <article>
              <span>Inclusion</span>
              <h3>Women reached</h3>
              <p>
                Financing delivered to women-owned and women-led businesses.
              </p>
            </article>
            <article>
              <span>Prosperity</span>
              <h3>Enterprise growth</h3>
              <p>
                Jobs supported, productive assets financed and incomes
                strengthened.
              </p>
            </article>
            <article>
              <span>Systems</span>
              <h3>Institutional capacity</h3>
              <p>
                Stronger green and gender-lens lending within partner
                institutions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="partners section-shell" id="partners">
        <div className="section-heading-row partner-heading">
          <div>
            <p className="section-kicker">Partner with us</p>
            <h2>Partnerships built around aligned ambition.</h2>
          </div>
          <p>
            We collaborate with institutions that want patient capital to do
            more—financially, environmentally and socially.
          </p>
        </div>

        <div className="partner-grid">
          <article>
            <p className="partner-type">For financial institutions</p>
            <h3>Extend your ability to finance the future.</h3>
            <p>
              Work with us to build longer-tenor green and gender-lens lending
              portfolios tailored to your market and customers.
            </p>
          </article>
          <article>
            <p className="partner-type">For capital partners</p>
            <h3>Reach high-impact markets through local institutions.</h3>
            <p>
              Align your capital with a disciplined financial-intermediation
              model designed for scalable, measurable outcomes.
            </p>
          </article>
        </div>

        <div className="contact-details" id="contact">
          <div className="contact-details-heading">
            <p className="partner-type">Contact</p>
            <h3>Connect with Denham &amp; Grey.</h3>
          </div>
          <article>
            <p className="contact-label">Office</p>
            <a
              href="https://maps.app.goo.gl/bXinnSKpGqMmaVLa8"
              target="_blank"
              rel="noreferrer"
            >
              2nd Floor, Silverbird Galleria, Memorial Drive, Central Business
              District, Abuja, FCT
            </a>
          </article>
          <article>
            <p className="contact-label">Telephone</p>
            <a href="tel:+2348025177616">+234 (802) 517 7616</a>
            <a href="tel:+2347067939313">+234 (706) 793 9313</a>
          </article>
          <article>
            <p className="contact-label">Email</p>
            <a href="mailto:info@denhamandgrey.com">info@denhamandgrey.com</a>
          </article>
        </div>

        <div className="contact-panel">
          <p>Let&apos;s put patient capital to work.</p>
          <a
            className="button contact-button"
            href="mailto:info@denhamandgrey.com?subject=Partnership%20enquiry"
          >
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="wordmark" href="#top">
            Denham &amp; Grey
          </a>
          <p>Patient capital for an inclusive, climate-resilient Africa.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#model">Our Model</a>
          <a href="#process">Our Process</a>
          <a href="#people">Our People</a>
          <a href="#focus">Focus</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="copyright">
          © {new Date().getFullYear()} Denham &amp; Grey
        </p>
      </footer>
    </main>
  );
}
