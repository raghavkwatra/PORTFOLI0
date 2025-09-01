import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { useTheme } from "next-themes";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!vantaEffect) {
      const isDark = resolvedTheme === "dark";
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: isDark ? 0x0 : 0x87ceeb,
          cloudColor: isDark ? 0x0 : 0xffffff,
          cloudShadowColor: isDark ? 0x0 : 0x1e293b,
          sunColor: isDark ? 0xc3986f : 0xffd700,
          sunGlareColor: isDark ? 0x0 : 0xffffe0,
          sunlightColor: isDark ? 0xf06b00 : 0xffffe0,
          speed: 0.9,
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [resolvedTheme, vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 z-0" />;
};

export default VantaBackground;
