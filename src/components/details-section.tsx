export function DetailsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Decorative line */}
          <div className="w-24 h-[2px] bg-muted-foreground/30" />

          {/* Main heading */}
          <h2 className="text-display-1 font-sans font-light text-foreground leading-tight">
            Los pequeños detalles son los que transforman una celebración en un recuerdo eterno
          </h2>
        </div>
      </div>
    </section>
  )
}
