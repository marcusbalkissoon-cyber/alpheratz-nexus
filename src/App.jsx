import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import TrinityLinks from './components/TrinityLinks'
import EmailCapture from './components/EmailCapture'

// Generate random particles for background dust effect
const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 20 + 30,
        delay: Math.random() * 10,
    }))
}

const ParticleBackground = () => {
    const particles = useMemo(() => generateParticles(40), [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: 0.15 + Math.random() * 0.2,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

function App() {
    return (
        <div className="relative min-h-screen bg-obsidian overflow-y-auto overflow-x-hidden">
            {/* Particle Dust Background */}
            <ParticleBackground />

            {/* Main Content Container */}
            <div className="relative z-10 max-w-[480px] mx-auto min-h-screen flex flex-col py-12">
                {/* Header Section */}
                <Header />

                {/* Trinity Links */}
                <main className="flex-1">
                    <TrinityLinks />
                </main>

                {/* Email Capture Footer */}
                <EmailCapture />
            </div>

            {/* Gradient overlay at bottom for depth */}
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none z-5" />
        </div>
    )
}

export default App
