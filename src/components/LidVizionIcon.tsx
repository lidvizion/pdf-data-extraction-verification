import Image from 'next/image'

interface LidVizionIconProps {
  width?: number;
  height?: number;
  invert?: boolean
}

export default function LidVizionIcon({ width = 100, height = 100, invert = false}: LidVizionIconProps) {
  return (
    <Image
      src="/Lid Vizion Banner Logo Website-BlackSleek.png"
      alt="Lid Vizion Logo"
      width={width}
      height={height}
      style={{
        objectFit: 'contain',
        filter: invert ? 'brightness(0) invert(1)' : 'none'
      }}
    />
  )
}