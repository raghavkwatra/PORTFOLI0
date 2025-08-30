import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import { useTheme } from 'next-themes';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark' && !vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0x0,
          skyColor: 0x0,
          cloudColor: 0x0,
          sunColor: 0xc3986f,
          sunGlareColor: 0x0,
          sunlightColor: 0xf06b00,
          speed: 0.9,
        })
      );
    } else if (resolvedTheme === 'light' && vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [resolvedTheme, vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
};

export default VantaBackground;
