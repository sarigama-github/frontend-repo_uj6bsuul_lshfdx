import { useRef } from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'
import Features from './components/Features'
import Upload from './components/Upload'

function App() {
  const uploadRef = useRef(null)

  const scrollToUpload = () => {
    const el = document.getElementById('upload')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <Background />
      <Navbar />
      <Hero onGetStarted={scrollToUpload} />
      <Features />
      <Upload ref={uploadRef} />
      <footer className="border-t border-white/50 py-10 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} apifydata.dev — CSV → REST in seconds.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
