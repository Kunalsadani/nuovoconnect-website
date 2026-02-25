import { motion } from "framer-motion";

export function NetworkGlobe() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
      
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[500px] animate-[spin_60s_linear_infinite]">
        <defs>
          <radialGradient id="globeGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(255, 138, 76, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 138, 76, 0.0)" />
          </radialGradient>
        </defs>
        
        <circle cx="200" cy="200" r="180" fill="url(#globeGrad)" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" />
        
        <motion.ellipse 
          cx="200" cy="200" rx="180" ry="80" 
          stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" fill="none"
          transform="rotate(45, 200, 200)"
        />
        <motion.ellipse 
          cx="200" cy="200" rx="180" ry="80" 
          stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" fill="none"
          transform="rotate(-45, 200, 200)"
        />
        <motion.ellipse 
          cx="200" cy="200" rx="180" ry="40" 
          stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" fill="none"
        />

        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + Math.cos(i * 0.8) * 140}
            cy={200 + Math.sin(i * 0.8) * 60}
            r="4"
            fill="#F97316"
            animate={{
              r: [4, 6, 4],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}

        <path d="M60 200 Q200 100 340 200" stroke="rgba(249, 115, 22, 0.2)" fill="none" />
        <path d="M200 60 Q100 200 200 340" stroke="rgba(249, 115, 22, 0.2)" fill="none" />
      </svg>

      <motion.div 
        className="absolute top-[20%] right-[10%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">
          $
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Transaction</div>
          <div className="text-sm font-bold text-foreground">Success</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] left-[10%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
          5G
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Data Bundle</div>
          <div className="text-sm font-bold text-foreground">Activated</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-[55%] right-[5%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">
          B
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Bank Account</div>
          <div className="text-sm font-bold text-foreground">Approved</div>
        </div>
      </motion.div>
    </div>
  );
}
