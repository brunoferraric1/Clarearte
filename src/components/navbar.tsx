import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import invitacionAlbor from '@/images/home-sections-coleciones.webp'
import invitacionPersonalizada from '@/images/home-sections-invitaciones-personalisadas.webp'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 transition-all duration-200 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      />
      
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-white ${className}`}>
        <div className="w-full">
          <div className="flex h-16 items-center justify-between px-8">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 cursor-pointer">
                <span className="text-title-1 font-display font-bold text-foreground">
                  ClareArte
                </span>
              </a>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:flex" onValueChange={(value) => setIsMenuOpen(!!value)}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-body font-medium cursor-pointer">
                    Invitaciones
                  </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-6 md:w-[600px] lg:w-[700px] grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="group block select-none rounded-lg overflow-hidden no-underline outline-none transition-all hover:shadow-lg cursor-pointer"
                          href="/colecciones"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <img 
                              src={invitacionAlbor} 
                              alt="Colecciones de invitaciones" 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4 bg-background border border-t-0 rounded-b-lg">
                            <div className="text-body font-semibold mb-1">
                              Colecciones
                            </div>
                            <p className="text-body-sm text-muted-foreground leading-tight">
                              Diseños únicos con acuarela y acabados artesanales.
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="group block select-none rounded-lg overflow-hidden no-underline outline-none transition-all hover:shadow-lg cursor-pointer"
                          href="/personalizadas"
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted">
                            <img 
                              src={invitacionPersonalizada} 
                              alt="Invitaciones personalizadas" 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4 bg-background border border-t-0 rounded-b-lg">
                            <div className="text-body font-semibold mb-1">
                              Invitaciones Personalizadas
                            </div>
                            <p className="text-body-sm text-muted-foreground leading-tight">
                              Diseños exclusivos creados solo para vosotros.
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/sobre-mi" className="text-body font-medium cursor-pointer">
                    Sobre mí
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/contacto" className="text-body font-medium cursor-pointer">
                    Contacto
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              className="tracking-wide cursor-pointer"
              asChild
            >
              <a href="/contacto">
                Solicitar presupuesto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
