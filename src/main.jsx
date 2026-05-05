import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const features = [
  {
    kicker: 'Build or break',
    title: 'Grow the routines you want. Leave old patterns behind.',
    text: 'Track habits you want to build and habits you want to break with the same simple, steady flow.',
    visual: 'good',
  },
  {
    kicker: 'Gentle reminders',
    title: 'A nudge at the right time, never a noisy system.',
    text: 'Set multiple reminder times, choose your rhythm, and keep the app supportive instead of stressful.',
    visual: 'reminders',
  },
  {
    kicker: 'Progress that feels human',
    title: 'See streaks, trends, history, and small wins add up.',
    text: 'Completion counts, current streaks, longest streaks, and visual trends help you notice momentum.',
    visual: 'progress',
  },
  {
    kicker: 'Personal by design',
    title: 'Make every habit feel like yours.',
    text: 'Customize names, icons, emoji, colors, goals, units, repeat modes, and notes for each habit.',
    visual: 'style',
  },
];

const gridFeatures = [
  ['Daily, weekly, monthly', 'Flexible schedules that fit real life.'],
  ['Arabic and English', 'Bilingual support from the start.'],
  ['Backup and sync', 'Sign in with Google or Apple and keep your habits with you.'],
  ['Vacation mode', 'Pause intentionally when life changes.'],
  ['Widgets', 'Keep your next small action close.'],
  ['Export CSV', 'Take your history with you when you need it.'],
];

const faqs = [
  ['Is Habits only for building good habits?', 'No. You can build habits and break habits, with calm tracking for both.'],
  ['Does it support Arabic?', 'Yes. Habits is designed for English and Arabic users.'],
  ['Can I set reminders?', 'Yes. You can turn reminders on and add multiple reminder times.'],
  ['Does it sync?', 'The app includes Google sign-in, Apple sign-in, backup, and sync flows.'],
];

function App() {
  const path = window.location.pathname;

  if (path === '/privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  if (path === '/terms-conditions') {
    return <TermsConditionsPage />;
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <ProblemSolution />
      {features.map((feature, index) => (
        <FeatureSplit key={feature.title} feature={feature} flip={index % 2 === 0} />
      ))}
      <FeatureGrid />
      <SocialProof />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="/" aria-label="Habits home">
        <img src="/habits-logo.png" alt="" />
        <span>Habits</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#how">How it works</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQ</a>
        <a href="/privacy-policy">Privacy policy</a>
        <a href="/terms-conditions">Terms of use</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-band">
      <div className="hero-copy reveal">
        <p className="eyebrow">Small daily actions. Gentle progress.</p>
        <h1>Build better habits, one habit at a time.</h1>
        <p className="hero-subtitle">
          A calm, beautifully simple habit tracker designed to help you stay consistent without overwhelm.
        </p>
        <div className="actions">
          <a className="button primary" href="#download">Get Started</a>
          <a className="button secondary" href="#how">See How It Works</a>
        </div>
      </div>
      <div className="hero-visual reveal delay">
        <div className="sun-mark">
          <img src="/habits-logo.png" alt="" />
        </div>
        <PhoneMockup variant="home" />
        <div className="mini-card streak-card">
          <span>Current streak</span>
          <strong>12 days</strong>
        </div>
        <div className="mini-card calm-card">
          <span>Today</span>
          <strong>3 of 4 done</strong>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="how" className="philosophy dark-band">
      <div className="center-copy reveal">
        <p className="eyebrow">How it works</p>
        <h2>Focus over overload.</h2>
        <p>
          Habits turns self-improvement into small, repeatable daily actions. No pressure. No harsh streak guilt.
          Just a clear place to return to each day and keep going.
        </p>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="problem section-band white-band">
      <div className="two-column reveal">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Most habit apps feel too loud to live with.</h2>
        </div>
        <div className="copy-stack">
          <p>
            They push extreme productivity, crowded dashboards, and guilt-heavy streaks. That can work for a week,
            then quietly become one more thing to avoid.
          </p>
          <p>
            Habits keeps the experience warm, focused, and easy to maintain so consistency feels possible.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureSplit({ feature, flip }) {
  return (
    <section
      id={feature.visual === 'good' ? 'features' : undefined}
      className={`feature section-band ${flip ? 'flip' : ''} ${feature.visual === 'good' || feature.visual === 'progress' ? 'gray-band' : 'white-band'}`}
    >
      <div className="feature-copy reveal">
        <p className="eyebrow">{feature.kicker}</p>
        <h2>{feature.title}</h2>
        <p>{feature.text}</p>
      </div>
      <div className="feature-art reveal delay">
        <PhoneMockup variant={feature.visual} />
      </div>
    </section>
  );
}

function PhoneMockup({ variant }) {
  const content = {
    home: (
      <>
        <MockHeader title="Today" detail="One habit at a time" />
        <HabitRow icon="☀" name="Morning sunlight" progress="Done" active />
        <HabitRow icon="💧" name="Drink water" progress="2 / 3" />
        <HabitRow icon="📖" name="Read 10 pages" progress="Tonight" />
        <HabitRow icon="🌙" name="No late scrolling" progress="Break habit" muted />
      </>
    ),
    good: (
      <>
        <MockHeader title="New habit" detail="Make it personal" />
        <div className="editor-field">Habit name <strong>Walk outside</strong></div>
        <div className="color-dots"><span></span><span></span><span></span><span></span></div>
        <div className="schedule-pill">Daily · 20 minutes</div>
        <div className="note-card">Small enough to repeat. Meaningful enough to matter.</div>
      </>
    ),
    reminders: (
      <>
        <MockHeader title="Reminders" detail="Gentle nudges" />
        <ReminderRow time="08:00" label="Morning check-in" />
        <ReminderRow time="14:30" label="Midday reset" />
        <ReminderRow time="21:00" label="Evening reflection" />
        <div className="toggle-row"><span>Sounds and vibration</span><b></b></div>
      </>
    ),
    progress: (
      <>
        <MockHeader title="Trends" detail="Your quiet momentum" />
        <div className="trend-bars">
          {[44, 62, 38, 80, 68, 88, 74].map((height) => <span key={height} style={{ height: `${height}%` }} />)}
        </div>
        <div className="stats-grid">
          <strong>42 completed</strong>
          <strong>18 longest</strong>
        </div>
      </>
    ),
    style: (
      <>
        <MockHeader title="Appearance" detail="Warm and focused" />
        <div className="theme-card dark">Dark surface</div>
        <div className="theme-card light">Soft light</div>
        <div className="emoji-grid"><span>☀</span><span>🧘</span><span>✍</span><span>🏃</span><span>🌱</span><span>📚</span></div>
      </>
    ),
  };

  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">{content[variant]}</div>
    </div>
  );
}

function MockHeader({ title, detail }) {
  return (
    <div className="mock-header">
      <span>{detail}</span>
      <strong>{title}</strong>
    </div>
  );
}

function HabitRow({ icon, name, progress, active, muted }) {
  return (
    <div className={`habit-row ${active ? 'active' : ''} ${muted ? 'muted' : ''}`}>
      <span className="habit-icon">{icon}</span>
      <span>{name}</span>
      <small>{progress}</small>
    </div>
  );
}

function ReminderRow({ time, label }) {
  return (
    <div className="reminder-row">
      <strong>{time}</strong>
      <span>{label}</span>
    </div>
  );
}

function FeatureGrid() {
  return (
    <section className="grid-section section-band gray-band">
      <div className="section-heading reveal">
        <p className="eyebrow">Designed for everyday consistency</p>
        <h2>Simple where it should be. Capable where it matters.</h2>
      </div>
      <div className="feature-grid">
        {gridFeatures.map(([title, text], index) => (
          <article className="feature-card reveal" key={title} style={{ '--delay': `${index * 70}ms` }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="quote-band">
      <div className="quote-inner reveal">
        <p>Built for people who want to feel steady, in control, and proud of small wins.</p>
        <span>Calm tracking for real life</span>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="faq section-band gray-band">
      <div className="section-heading reveal">
        <p className="eyebrow">FAQ</p>
        <h2>Everything important, kept clear.</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question} className="reveal">
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="download" className="final-cta dark-band">
      <div className="final-copy reveal">
        <img src="/habits-logo.png" alt="" />
        <h2>Start building consistency today.</h2>
        <p>One small action. One calm check-in. One habit at a time.</p>
        <a className="button primary light" href="#top">Get Started</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a className="brand" href="/" aria-label="Habits home">
        <img src="/habits-logo.png" alt="" />
        <span>Habits</span>
      </a>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy policy</a>
        <a href="/terms-conditions">Terms and conditions</a>
      </div>
    </footer>
  );
}

function LegalHeader() {
  return (
    <header className="legal-nav">
      <a className="brand" href="/" aria-label="Back to Habits home">
        <img src="/habits-logo.png" alt="" />
        <span>Habits</span>
      </a>
      <a href="/" className="legal-back">Go back to home</a>
    </header>
  );
}

function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <LegalHeader />
      <article className="legal-document">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy policy</h1>
        <p className="legal-date">Last updated: June 5, 2025</p>
        <p>
          Your habits are personal. This Privacy Policy explains how Habits: one habit at a time handles information
          across the app and this website.
        </p>

        <h2>1. App</h2>
        <h3>1.1 Habit data stays private</h3>
        <p>
          Habits is designed so your habit names, notes, streaks, history, reminders, colors, icons, and personal
          progress stay under your control. Your habit data is stored locally on your device unless you choose to use
          backup or sync features.
        </p>

        <h3>1.2 Account, backup, and sync</h3>
        <p>
          If you sign in with Apple or Google, the sign-in provider may share basic account information needed to
          identify your account and keep your backup or sync flow working. We use this information only to provide the
          feature you requested. We do not sell your data, use it for advertising, or share it for marketing.
        </p>

        <h3>1.3 Reminders, widgets, and device features</h3>
        <p>
          Some features, such as reminders, widgets, sounds, vibration, language preferences, vacation mode, and export
          tools, may rely on your device settings or operating system permissions. These features are used to make the
          app work as expected and are not used for advertising or tracking.
        </p>

        <h3>1.4 Optional third-party services</h3>
        <p>
          Certain features may depend on trusted platform services, such as Apple sign-in, Google sign-in, cloud
          backup, app store purchases, or system-level device permissions. Those services may process data according
          to their own privacy policies.
        </p>
        <p>Depending on the features you use, these services may process:</p>
        <ul>
          <li>Account data needed for sign-in or backup.</li>
          <li>Purchase or subscription status handled by the app store or payment provider.</li>
          <li>Basic device or performance information needed to keep platform features working.</li>
        </ul>

        <h2>2. Website</h2>
        <p>
          We keep the website simple. We do not use it to sell personal data, build advertising profiles, or collect
          unnecessary information. If the website is protected by a hosting or security provider, a temporary technical
          cookie may be used for basic security and availability. This type of cookie is not intended to identify you
          personally.
        </p>

        <h2>3. Changes to this Privacy policy</h2>
        <p>
          We may update this Privacy Policy as Habits grows or as legal and technical requirements change. If we make
          meaningful changes, the updated version will be posted here with a new date.
        </p>

        <h2>4. Contact</h2>
        <p>
          If you have any questions about this privacy policy, feel free to contact us at{' '}
          <a href="mailto:husamzinap@gmail.com">husamzinap@gmail.com</a>. If you email us, we may keep your message
          long enough to reply and provide support. We will not use your email for marketing without your permission.
        </p>

        <a href="/" className="legal-home-link">Go back to home</a>
      </article>
    </main>
  );
}

function TermsConditionsPage() {
  return (
    <main className="legal-page">
      <LegalHeader />
      <article className="legal-document">
        <p className="eyebrow">Terms</p>
        <h1>Terms and conditions</h1>
        <p className="legal-date">Effective date: June 5, 2025</p>
        <p>
          Welcome to Habits: one habit at a time. These Terms and conditions explain the rules for using our app,
          related features, and website ("Services").
        </p>
        <p>By accessing or using any part of our Services, you agree to be bound by these Terms.</p>

        <h2>1. Who we are</h2>
        <p>
          Habits is created and maintained by Husam Zina. Throughout these Terms, "we", "our", and "our team" refer
          to the people responsible for building and supporting Habits.
        </p>

        <h2>2. Use of the app</h2>
        <p>
          Habits helps you build better routines, reduce unwanted patterns, and track progress in a calm, simple way.
          You are responsible for the habits, notes, reminders, and goals you create in the app.
        </p>
        <p>
          While you may choose to use the app for reminders related to health, medication, or other important tasks,
          Habits is not a medical, emergency, or professional advice service. We cannot guarantee notification timing,
          outcomes, or that the app will be suitable for critical uses.
        </p>

        <h2>3. Access and purchases</h2>
        <p>Habits may be distributed through app stores, direct download links, or other approved channels.</p>
        <p>
          Some features may be free, while others may require a purchase, subscription, or account access. Payments,
          refunds, renewals, and billing questions are usually handled by the store or payment provider you used.
        </p>
        <p>
          We do not ask you to bypass store rules, payment provider terms, or platform requirements. If a third-party
          platform gives you access to Habits, your relationship with that platform may be governed by its own terms.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          The Habits name, logo, interface, copy, visual design, code, and related materials belong to us unless
          stated otherwise. You may not copy, modify, redistribute, reverse engineer, or use our materials in a way
          that is not permitted by law or by written permission from us.
        </p>

        <h2>5. Prohibited use</h2>
        <p>You agree not to use our Services in any unlawful or abusive manner, including but not limited to:</p>
        <ul>
          <li>Uploading harmful, offensive, or illegal content;</li>
          <li>Interfering with the normal operation of the app or website;</li>
          <li>Violating the rights of others.</li>
        </ul>

        <h2>6. Third-party services</h2>
        <p>
          Habits may integrate with platform services such as Apple sign-in, Google sign-in, cloud backup, app store
          purchases, notifications, widgets, or device permissions. Your use of those services may also be subject to
          their terms and privacy policies. For more details, see our Privacy policy.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          We provide the Services "as is" and "as available." We work to make Habits reliable and useful, but we do
          not promise that it will always be uninterrupted, error-free, or suitable for every purpose. To the fullest
          extent allowed by law, we are not liable for losses or consequences resulting from your use of the Services.
        </p>

        <h2>8. Changes to these Terms and conditions</h2>
        <p>
          We may update these Terms and conditions from time to time. When we do, the updated version will be posted
          here. Continued use of the Services after changes means you accept the updated Terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have any questions or concerns, feel free to contact us at{' '}
          <a href="mailto:husamzinap@gmail.com">husamzinap@gmail.com</a>.
        </p>

        <a href="/" className="legal-home-link">Go back to home</a>
      </article>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
