import { WebGLLiquid } from "@/components/ui/webgl-liquid";

export default function WebGLLiquidDemo() {
  return (
    <WebGLLiquid
      title="Fluid Motion"
      subtitle="Premium Presence"
      description="A cinematic liquid field tuned for modern hero sections with polished depth and restrained motion."
      colorDeep="#04050b"
      colorMid="#134d93"
      colorHighlight="#8cecff"
      speed={1}
      flowStrength={1}
      grain={0.05}
      contrast={1.1}
      opacity={0.95}
      reveal
      delayMs={0}
    />
  );
}
