import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>SilentCraft Store</h1>
          <p>Welcome to SilentCraft Store - Your ecommerce destination</p>
        </header>
        
        <main className="main">
          <section className="hero">
            <h2>Coming Soon</h2>
            <p>We're building something amazing. Stay tuned!</p>
          </section>
        </main>
        
        <footer className="footer">
          <p>&copy; 2026 SilentCraft Store. All rights reserved.</p>
        </footer>
      </div>
      
      {/* Vercel Speed Insights - Tracks Core Web Vitals and performance metrics */}
      <SpeedInsights />
    </>
  )
}

export default App
