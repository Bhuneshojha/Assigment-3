

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff3e0' }}> {/* Outer container with minHeight */}
      <header style={{ color: '#4b5563', fontFamily: 'your-body-font-family-here' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1.35rem',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <a style={{ display: 'flex', fontFamily: 'your-title-font-family-here', fontWeight: '500', alignItems: 'center', color: '#1f2937', marginBottom: '1rem' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1dQGu_nymgw8EW2iHNIPNlHGpxQbbekDuQ&s"
              alt="b logo"
              style={{ width: '2.9rem', height: '2.9rem', borderRadius: '50%', marginRight: '0.7rem' }}
            />
            <span style={{ fontSize: "35px", fontFamily: "sans-serif" }}><b>Bhunesh Kumar</b></span>
          </a>
          <nav style={{
            marginRight: windowWidth >= 768 ? 'auto' : '0',
            marginLeft: windowWidth >= 768 ? '1rem' : '0',
            paddingTop: windowWidth >= 768 ? '0.25rem' : '0',
            paddingBottom: windowWidth >= 768 ? '0.25rem' : '0',
            paddingLeft: windowWidth >= 768 ? '1rem' : '0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '1rem',
            justifyContent: 'center',
          }}>
            <Link href={"/navbar"} style={{ fontSize: "24px", marginLeft: '1.5rem', marginRight: '1.25rem', padding: "1.35rem", color: 'inherit', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'blue'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>Home</Link>
            <Link href={"/aboutus"} style={{ fontSize: "24px", marginRight: '1.25rem', color: 'inherit', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'blue'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>About Us</Link>
            <Link href={"/contactus"} style={{ fontSize: "24px", marginRight: '1.25rem', color: 'inherit', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'blue'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>Contact Us</Link>
            <Link href={"/privacypolicy"} style={{ fontSize: "24px", marginRight: '1.25rem', color: 'inherit', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'blue'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>Privacy Policy</Link>
          </nav>

          <div style={{ display: 'flex', marginTop: windowWidth >= 768 ? '0' : '1rem', gap: '1rem' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '0.25rem 0.75rem', outline: 'none', borderRadius: '0.25rem', fontSize: '1rem' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#001f3f'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3B82F6'}>
              Log in
            </button>
            <button style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'green', color: 'white', border: 'none', padding: '0.25rem 0.75rem', outline: 'none', borderRadius: '0.25rem', fontSize: '1rem' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#001f3f'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'green'}>
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main style={{ flex: 1 }}></main>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '1rem', textAlign: 'center', }}>
        <p style={{ margin: '0', color: '#6c757d' }}>© 2024 Bhunesh Kumar. All rights reserved.</p>
        <nav>
          <Link href="/privacy-policy" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'none' }}>Terms of Service</Link>
        </nav>
      </footer>
    </div>
  );
}

