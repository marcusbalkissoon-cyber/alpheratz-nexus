import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { useSound } from '../hooks/useSound'

const links = [
    {
        id: 'artifact',
        icon: '💠',
        main: 'INITIALIZE ARTIFACT 005',
        sub: 'The Resonance Weaver (App)',
        href: 'https://resonance-weaver-2.vercel.app/',
        isHero: true,
    },
    {
        id: 'music',
        icon: '📡',
        main: 'RECEIVE TRANSMISSION',
        sub: 'Stream the Latest Signal',
        href: 'https://lnk.to/GuidedByTheAngels',
        isHero: false,
    },
    {
        id: 'signallab',
        icon: <Activity size={24} className="text-white/80" />,
        main: 'ACCESS SIGNAL LAB',
        sub: 'Experimental Audio/Visual Archives',
        href: 'https://alpheratz-signal-lab.vercel.app/',
        isHero: false,
    },
    {
        id: 'website',
        icon: '🪐',
        main: 'ACCESS MAINFRAME',
        sub: 'Official Website & Archives',
        href: 'https://www.markuscolemusic.com/',
        isHero: false,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const TrinityLinks = () => {
    const { play } = useSound('/click.mp3')

    const handleInteraction = () => {
        play()
    }

    return (
        <motion.nav
            className="flex flex-col gap-4 px-4 py-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {links.map((link) => (
                <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
            relative block w-full p-5 rounded-xl
            glass-card cursor-pointer
            transition-all duration-300 ease-out
            hover:border-gold/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]
            ${link.isHero ? 'hero-glow' : ''}
          `}
                >
                    <div className="flex items-center gap-4">
                        {/* Icon */}
                        <span className="text-2xl">{link.icon}</span>

                        {/* Text Content */}
                        <div className="flex-1 text-left">
                            <p className="font-rajdhani font-semibold text-base tracking-[0.1em] uppercase text-white">
                                {link.main}
                            </p>
                            <p className="font-manrope text-xs text-white/40 mt-0.5">
                                {link.sub}
                            </p>
                        </div>

                        {/* Arrow Indicator */}
                        <span className="text-white/20 text-lg">→</span>
                    </div>
                </motion.a>
            ))}
        </motion.nav>
    )
}

export default TrinityLinks
