import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.header
            className="flex flex-col items-center text-center pt-12 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Avatar Container */}
            <div className="relative w-28 h-28 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 glass-card">
                    {/* Video/Image placeholder - will use avatar.mp4 or avatar.jpg */}
                    <video
                        src="/avatar.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/avatar.jpg"
                    />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110" />
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full status-pulse" />
                <span className="text-xs font-manrope text-white/60 tracking-[0.2em] uppercase">
                    Signal: Strong
                </span>
            </div>

            {/* Name */}
            <h1 className="font-rajdhani font-bold text-3xl tracking-[0.15em] uppercase mb-2">
                Markus Cole
            </h1>

            {/* Title */}
            <p className="font-manrope text-sm text-white/50 tracking-wide">
                Sonic Architect // Alpheratz Technologies
            </p>
        </motion.header>
    )
}

export default Header
