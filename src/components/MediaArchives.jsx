import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSound } from '../hooks/useSound'

const AccordionItem = ({ title, active, onClick, children }) => {
    return (
        <div className="border border-gray-800 bg-black mb-3">
            <button
                onClick={onClick}
                className={`
                    w-full py-3 px-4 flex items-center justify-between text-left
                    font-bold text-xs tracking-widest transition-colors
                    ${active ? 'text-black bg-cyan border-b border-gray-800' : 'text-cyan hover:bg-gray-800 hover:text-white'}
                `}
            >
                <span className="uppercase">{title}</span>
                <span className="font-mono text-sm">{active ? '[-]' : '[+]'}</span>
            </button>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-black"
                    >
                        <div className="p-4 border-t border-gray-800">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const MediaArchives = () => {
    const [activeAccordion, setActiveAccordion] = useState(null)
    const { play } = useSound('/click.mp3')

    const toggleAccordion = (index) => {
        play()
        setActiveAccordion(activeAccordion === index ? null : index)
    }

    return (
        <motion.section
            className="w-full mb-12 flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
        >
            <h2 className="text-gray-900 text-sm tracking-[0.2em] font-bold mb-4 uppercase border-b border-gray-800 pb-2">
                [ DECRYPTED ARCHIVES ]
            </h2>

            {/* Accordions */}
            <div className="w-full flex flex-col">
                <AccordionItem
                    title="> DECRYPT_VISUAL_LOG [Fight For My Spirit]"
                    active={activeAccordion === 0}
                    onClick={() => toggleAccordion(0)}
                >
                    <div className="relative w-full aspect-video bg-gray-900 border border-gray-800 flex items-center justify-center">
                        {activeAccordion === 0 ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/2ZZSK2XcC4U?si=M_KlKM5p29mJdGVF"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        ) : (
                            <span className="text-gray-900 text-xs tracking-widest">LOADING...</span>
                        )}
                    </div>
                </AccordionItem>

                <AccordionItem
                    title="> ACCESS_AUDIO_CACHE [Master Frequencies]"
                    active={activeAccordion === 1}
                    onClick={() => toggleAccordion(1)}
                >
                    <div className="w-full flex items-center justify-center bg-gray-900 border border-gray-800 h-[152px]">
                        {activeAccordion === 1 ? (
                            <iframe
                                src="https://open.spotify.com/embed/track/4muU9TRCstbHJj7QDj0xgJ?utm_source=generator&theme=0"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        ) : (
                            <span className="text-gray-900 text-xs tracking-widest">LOADING...</span>
                        )}
                    </div>
                </AccordionItem>

                {/* Standard Link */}
                <a
                    href="https://www.markuscolemusic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={play}
                    className="
                        w-full py-4 px-4 flex items-center justify-between
                        border border-gray-800 bg-black
                        text-cyan text-xs font-bold tracking-widest uppercase
                        transition-colors hover:bg-gray-800 hover:text-white mt-1
                    "
                >
                    <span>{'>'} ENTER_MAIN_DATABASE</span>
                    <span>→</span>
                </a>
            </div>

            {/* System Footer */}
            <div className="mt-12 text-center text-[10px] tracking-widest text-gray-900 font-bold uppercase border-t border-gray-800 pt-6">
                © 2026 ALPHERATZ TECHNOLOGIES
                <div className="mt-2 text-[8px] opacity-50">SYS.VER. 2.0.0 // ZERO-POINT</div>
            </div>
        </motion.section>
    )
}

export default MediaArchives
