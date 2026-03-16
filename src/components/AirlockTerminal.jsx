import React from 'react';

const AirlockTerminal = () => {
  return (
    <div className="w-full max-w-lg mb-20 mx-auto bg-black border border-zinc-800 p-8 font-mono flex flex-col items-center text-center shadow-2xl rounded-none">

      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 mb-6">
        {/* Title */}
        <div className="text-white font-mono font-bold tracking-widest text-lg sm:text-xl leading-relaxed text-center">
          [ ARTIFACT_000 : ZERO-POINT PROTOCOL ]
        </div>

        {/* Status Indicator */}
        <div className="flex flex-row items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <span className="font-mono text-red-500 text-xs tracking-widest font-bold">
            STATUS: AIRLOCK SEALED
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-zinc-800 w-full mb-6"></div>

      {/* Concept Lore */}
      <div className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide text-center">
        The feed cannot heal the state it creates. You cannot consume your way out of a digital sickness. I built an artifact to force a physical break, but it has a hard rule: it refuses to share space with the noise. Grid severance is required.
      </div>

      {/* Routing Gate */}
      <div className="mt-8 flex flex-col items-center gap-3 w-full">
        {/* Primary Action Button */}
        <a
          href="https://zero-point-protocol.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border border-white text-white py-4 uppercase tracking-widest font-bold transition-none hover:bg-[#00f3ff] hover:text-black hover:border-[#00f3ff]"
        >
          [ APPROACH AIRLOCK ]
        </a>

        {/* Helper Context Text */}
        <p className="text-xs text-zinc-600 leading-tight text-center">
          WARNING: Airlock requires a decryption cipher. If you do not possess clearance, submit credentials to the secure comms terminal below.
        </p>
      </div>

    </div>
  );
};

export default AirlockTerminal;
