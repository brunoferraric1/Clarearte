interface OrganicImageMaskProps {
  src: string
  alt: string
  maskSrc: string
  className?: string
}

export function OrganicImageMask({
  src,
  alt,
  maskSrc,
  className = ''
}: OrganicImageMaskProps) {
  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}
