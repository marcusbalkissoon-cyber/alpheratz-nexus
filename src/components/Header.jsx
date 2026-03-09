import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.header
            className="flex flex-col items-center text-center pt-16 pb-12 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Hologram Avatar Container */}
            <div className="relative w-32 h-32 mb-8">
                <div className="w-full h-full rounded-full overflow-hidden border border-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-oled">
                    <video
                        src="/avatar.mp4"
                        className="w-full h-full object-cover opacity-90 mix-blend-screen"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/avatar.jpg"
                    />
                </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 mb-6 border border-gray-800 px-4 py-1.5 bg-oled/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <span className="text-xs text-gray-900 tracking-widest">[ SYSTEM:</span>
                <span className="text-xs text-cyan tracking-widest">ONLINE ]</span>
                <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(0,240,255,1)] ml-1" />
            </div>

            {/* Identity */}
            <h1 className="font-bold text-2xl tracking-[0.2em] text-white uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                MARKUS COLE
            </h1>

            {/* Title */}
            <p className="text-xs text-gray-900 tracking-[0.15em] uppercase border-b border-gray-800 pb-2 inline-block">
                Sonic Architect <span className="text-cyan mx-2">//</span> Alpheratz Technologies
            </p>
        </motion.header>
    )
}

export default Header
