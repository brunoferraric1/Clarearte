'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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

interface NavbarProps {
  className?: string
  lang?: string
}

export function Navbar({ className, lang = 'es' }: NavbarProps) {
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
              <Link href={`/${lang}`} className="flex items-center space-x-2 cursor-pointer">
                <span className="text-title-1 font-display font-bold text-foreground">
                  ClareArte
                </span>
              </Link>
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
                        <Link
                          className="group block select-none rounded-lg overflow-hidden no-underline outline-none transition-all hover:shadow-lg cursor-pointer"
                          href={`/${lang}/colecciones`}
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                            <Image
                              src="/images/home-sections-coleciones.webp"
                              alt="Colecciones de invitaciones"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="group block select-none rounded-lg overflow-hidden no-underline outline-none transition-all hover:shadow-lg cursor-pointer"
                          href={`/${lang}/personalizadas`}
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                            <Image
                              src="/images/home-sections-invitaciones-personalisadas.webp"
                              alt="Invitaciones personalizadas"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={`/${lang}/sobre-mi`} className="text-body font-medium cursor-pointer">
                    Sobre mí
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={`/${lang}/blog`} className="text-body font-medium cursor-pointer">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={`/${lang}/contacto`} className="text-body font-medium cursor-pointer">
                    Contacto
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Development only - Design System link */}
              {process.env.NODE_ENV === 'development' && (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={`/${lang}/design-system`} className="text-body font-medium cursor-pointer text-muted-foreground">
                      Design System
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
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
              <Link href={`/${lang}/contacto`}>
                Solicitar presupuesto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
