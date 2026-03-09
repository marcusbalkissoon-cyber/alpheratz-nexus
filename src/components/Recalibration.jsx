import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../hooks/useSound'

const Recalibration = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { play } = useSound('/click.mp3')

    return (
        <motion.section
            className="w-full mb-12 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
        >
            <div className="w-full items-center text-center mb-6">
                <h2 className="text-white text-lg tracking-[0.2em] font-bold mb-2 uppercase">
                    [ INITIATE RECALIBRATION ]
                </h2>
                <p className="text-gray-900 text-sm tracking-widest">
                    Launch Artifact 005: The Resonance Weaver.
                </p>
            </div>

            <a
                href="https://resonance-weaver-2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                    setIsHovered(true)
                    play()
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                    relative w-full py-5 border border-cyan bg-transparent
                    text-center uppercase tracking-[0.25em] font-bold text-lg
                    transition-all duration-300
                    hover:bg-cyan/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]
                `}
            >
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan -translate-x-1 -translate-y-1" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan -translate-x-1 translate-y-1" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan translate-x-1 translate-y-1" />

                <span className="text-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                    ENTER THE WEAVER
                </span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] tracking-widest text-gray-900 font-bold">
                <span className="text-yellow-500 text-xs">⚠️</span> WARNING: TURN SILENT MODE OFF
            </div>
        </motion.section>
    )
}

export default Recalibration
