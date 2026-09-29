'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, ChevronDown, Clock3, MapPin, Menu, X } from 'lucide-react'

const heroImage = '/WhatsApp%20Image%202026-09-29%20at%2011.52.17%20AM.jpeg'

const tracks = [
  { number: '01', title: 'Faith & Culture', text: 'Build bridges that help people encounter the gospel in the places and spaces they already call home.' },
  { number: '02', title: 'Community & Care', text: 'Create tools that make it easier for communities to support, connect, and care for one another.' },
  { number: '03', title: 'Stories & Media', text: 'Use technology, art, and storytelling to share stories of hope with new people and new places.' },
]

const schedule = [
  ['05 NOV', 'Welcome + team formation', 'Meet the room, find your people, and choose the problem you want to take on.'],
  ['05–06 NOV', 'Build the prototype', 'A focused build sprint supported by mentors, prayer, and practical workshops.'],
  ['07 NOV', 'Demo day', 'Share what you made, what you learned, and where the idea goes next.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [registered, setRegistered] = useState(false)

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setRegistered(true)
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="#HACK 2026 home">#HACK<span className="cursor">_</span><small>FREETOWN</small></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#tracks" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="nav-cta" href="#register" onClick={() => setMenuOpen(false)}>Register <ArrowRight size={14} /></a>
        </nav>
      </header>

      <section className="hero section-rule" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />#HACK2026 · FREETOWN</p>
          <h1>Make something that <em>matters.</em></h1>
          <p className="hero-sub">Three days. One mission. Build Christ Connect and bring the gospel into the digital spaces young people already call home.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#register">Join the build <ArrowRight size={16} /></a><a className="btn btn-ghost" href="#about">Explore #HACK</a></div>
          <div className="fact-row"><span><CalendarDays size={14} /> 05–07 NOV 2026</span><span><MapPin size={14} /> YandF Centre, Freetown</span><span><Clock3 size={14} /> 09:00–16:00</span></div>
        </div>
        <div className="hero-poster-wrap"><div className="poster-label">CITY / 001</div><img className="hero-poster" src={heroImage} alt="A colourful view over Freetown, Sierra Leone" /><div className="poster-caption">73 Hanga Road Jui<br />Freetown, Sierra Leone</div></div>
      </section>

      <section className="section section-rule" id="about"><div className="section-heading"><p className="eyebrow"><span />01 · THE INVITATION</p><h2>Don&apos;t just talk about change. <em>Prototype it.</em></h2><p className="lead">#HACK is a global movement of young people using their skills and imagination to build Christ Connect — taking the gospel into the apps, games, and feeds where their generation already lives.</p></div><div className="thesis"><p className="mono-label">THE CHALLENGE</p><p>What could you build in 48 hours if you had a room full of brave people, a big question, and a city worth serving?</p></div></section>

      <section className="section section-rule" id="tracks"><div className="section-heading"><p className="eyebrow"><span />02 · PICK A DIRECTION</p><h2>Bring a question. Leave with a <em>prototype.</em></h2><p className="lead">No perfect idea required. Follow your curiosity, find your team, and make something useful.</p></div><div className="track-grid">{tracks.map((track) => <article className="track-card" key={track.number}><p className="track-number">TRACK {track.number}</p><h3>{track.title}</h3><p>{track.text}</p><a href="#register">BUILD <ArrowRight size={15} /></a></article>)}</div></section>

      <section className="section section-rule" id="schedule"><div className="section-heading"><p className="eyebrow"><span />03 · MARK YOUR CALENDAR</p><h2>Three days. One <em>shared mission.</em></h2></div><div className="schedule">{schedule.map(([date, title, text]) => <div className="schedule-row" key={date}><p>{date}</p><div><h3>{title}</h3><span>{text}</span></div></div>)}</div></section>

      <section className="register-section" id="register"><div><p className="eyebrow"><span />04 · SAVE YOUR SEAT</p><h2>Ready to make<br /><em>something matter?</em></h2><p>Registration is free. Bring your laptop, your questions, and your willingness to build with others.</p></div><form className="register-form" onSubmit={handleRegister}>{registered ? <div className="success"><p className="mono-label">YOU&apos;RE ON THE LIST</p><h3>See you in Freetown.</h3><p>We&apos;ll send the next steps to your inbox shortly.</p></div> : <><label>Name<input required name="name" placeholder="Your full name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>What do you bring?<select name="role" defaultValue=""><option value="" disabled>Select your role</option><option>Developer</option><option>Designer / Creative</option><option>Content creator</option><option>Just curious</option></select></label><button className="btn btn-primary" type="submit">Register for #HACK <ArrowRight size={16} /></button><p className="form-note">By registering, you&apos;ll receive event updates from the #HACK Freetown team.</p></>}</form></section>

      <section className="section faq-section section-rule" id="faq"><div className="section-heading"><p className="eyebrow"><span />05 · GOOD TO KNOW</p><h2>Questions, answered.</h2></div><div className="faq-list"><details><summary>Who is #HACK for?</summary><p>Everyone. Developers, designers, storytellers, students, strategists, gamers, and anyone with a desire to make a difference can find a place on a team.</p></details><details><summary>Do I need to come with an idea?</summary><p>Not at all. We will explore challenges together, form teams, and shape ideas during the event.</p></details><details><summary>What should I bring?</summary><p>Bring a laptop if you have one, your charger, and an open mind. We will take care of the rest.</p></details></div></section>

      <footer className="site-footer"><div><a className="wordmark" href="#top">#HACK<span className="cursor">_</span></a><p>#HACK is an initiative of Indigitous.<br />Building for the places that matter.</p></div><div className="footer-links"><a href="mailto:hack@indigitous.org">hack@indigitous.org</a><a href="#register">Register now</a><a href="#top">Back to top ↑</a></div><p className="footer-signoff">PRAY · PLAN · PROTOTYPE</p></footer>
    </main>
  )
}
