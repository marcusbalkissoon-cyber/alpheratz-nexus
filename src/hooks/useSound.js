import { useCallback, useRef } from 'react'

export const useSound = (src) => {
    const audioRef = useRef(null)

    const play = useCallback(() => {
        try {
            // Create audio instance if it doesn't exist
            if (!audioRef.current) {
                audioRef.current = new Audio(src)
                audioRef.current.volume = 0.3
            }

            // Reset and play
            audioRef.current.currentTime = 0
            audioRef.current.play().catch(() => {
                // Silently fail if audio can't play (e.g., no user interaction yet)
            })
        } catch (e) {
            // Audio not supported or file not found
        }
    }, [src])

    return { play }
}
