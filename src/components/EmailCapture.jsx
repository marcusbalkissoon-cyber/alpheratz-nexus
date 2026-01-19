import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../hooks/useSound'

const EmailCapture = () => {
    const [email, setEmail] = useState('')
    const { play } = useSound('/click.mp3')

    const handleSubmit = (e) => {
        e.preventDefault()
        play()
        // Handle email submission logic here
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <motion.footer
            className="px-4 pb-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 p-2 rounded-xl glass-card"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for protocols..."
                    className="
            flex-1 bg-transparent border-none outline-none
            px-3 py-2 text-sm font-manrope text-white/80
            placeholder:text-white/30
          "
                    required
                />
                <button
                    type="submit"
                    onMouseEnter={play}
                    className="
            px-5 py-2 rounded-lg
            bg-white/5 hover:bg-white/10
            border border-white/10 hover:border-gold/40
            font-rajdhani font-semibold text-sm tracking-[0.15em] uppercase
            text-white/70 hover:text-white
            transition-all duration-300
          "
                >
                    Join
                </button>
            </form>

            {/* Footer signature */}
            <p className="text-center text-[10px] text-white/20 mt-6 font-manrope tracking-wider">
                © 2026 ALPHERATZ TECHNOLOGIES
            </p>
        </motion.footer>
    )
}

export default EmailCapture
