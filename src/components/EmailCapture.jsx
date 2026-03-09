import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../hooks/useSound'

const EmailCapture = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { play } = useSound('/click.mp3')

    return (
        <motion.section
            className="w-full mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
        >
            <div className="border-l-2 border-cyan pl-4 mb-4">
                <h2 className="text-cyan text-sm tracking-[0.2em] uppercase font-bold mb-1">
                    [ SECURE COMMS CHANNEL ]
                </h2>
                <p className="text-gray-900 text-xs tracking-wider leading-relaxed">
                    The grid is loud. Secure your comms link for priority access to the ZERO-POINT PROTOCOL—an upcoming offline digital sanctuary designed to physically recalibrate your nervous system.
                </p>
            </div>

            <form
                action="https://formspree.io/f/mbdzdgde"
                method="POST"
                className="flex flex-col gap-3 mt-6"
            >
                {/* Minimalist Input */}
                <div className="relative group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan font-bold opacity-70">
                        {'>'}
                    </span>
                    <input
                        type="email"
                        name="email"
                        placeholder="INPUT_EMAIL_ADDRESS_"
                        required
                        className="
                            w-full bg-transparent border-0 border-b border-gray-800
                            pl-6 py-3 text-sm text-white tracking-widest
                            placeholder:text-gray-900 focus:outline-none focus:border-cyan
                            transition-colors duration-300
                            group-hover:border-gray-500
                        "
                    />
                </div>

                {/* Tactical Submit Button */}
                <button
                    type="submit"
                    onMouseEnter={() => {
                        setIsHovered(true)
                        play()
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`
                        mt-4 w-full py-3 border border-cyan
                        font-bold text-sm tracking-[0.2em] uppercase
                        transition-all duration-200
                        ${isHovered
                            ? 'bg-cyan text-oled shadow-[0_0_20px_rgba(0,240,255,0.6)]'
                            : 'bg-transparent text-cyan hover:bg-cyan/10'
                        }
                    `}
                >
                    [ ENCRYPT & SUBMIT ]
                </button>
            </form>
        </motion.section>
    )
}

export default EmailCapture
