import Header from './components/Header'
import AirlockTerminal from './components/AirlockTerminal'
import EmailCapture from './components/EmailCapture'
import Recalibration from './components/Recalibration'
import MediaArchives from './components/MediaArchives'

function App() {
    return (
        <div className="relative min-h-screen bg-oled overflow-y-auto overflow-x-hidden text-white font-mono selection:bg-cyan selection:text-oled">
            {/* TV Static overlay for texture layer */}
            <div
                className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.03] mix-blend-screen"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-[480px] mx-auto min-h-screen flex flex-col items-center px-6 selection:bg-cyan selection:text-oled">
                {/* 
                  BLOCK 1: The Identity & Status Header 
                */}
                <Header />

                {/* 
                  BLOCK 1.5: Airlock Terminal
                */}
                <AirlockTerminal />

                {/* 
                  BLOCK 2: Formspree Email Capture (TOP PRIORITY)
                */}
                <EmailCapture />

                {/* 
                  BLOCK 3: The Primary Utility (Artifact 005) 
                */}
                <Recalibration />

                {/* 
                  BLOCK 4: The Decrypted Media (Accordion Pattern) 
                */}
                <MediaArchives />
            </div>

            {/* Scanline overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
                <div className="h-[2px] w-full bg-cyan/5 absolute top-0 animate-[scan_6s_linear_infinite]"
                    style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }} />
            </div>

            {/* Define scanline animation globally */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { transform: translateY(-100vh); }
                    100% { transform: translateY(100vh); }
                }
            `}} />
        </div>
    )
}

export default App
