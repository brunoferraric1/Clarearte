import * as React from "react"
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
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-white ${className}`}>
      <div className="w-full">
        <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 cursor-pointer">
              <span className="text-title-2 font-display font-bold text-foreground">
                ClareArte
              </span>
            </a>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-body font-medium cursor-pointer">
                  Invitaciones
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer hover:bg-gradient-to-b hover:from-muted/70 hover:to-muted/90 transition-all"
                          href="/colecciones"
                        >
                          <div className="text-title-3 font-semibold mb-2">
                            Colecciones
                          </div>
                          <p className="text-body-sm text-muted-foreground leading-tight">
                            Diseños únicos con acuarela y acabados artesanales.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/personalizadas" title="Invitaciones Personalizadas">
                      Diseños exclusivos creados solo para vosotros.
                    </ListItem>
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
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer">
          <div className="text-body-sm font-medium leading-none">{title}</div>
          <p className="text-body-xs text-muted-foreground leading-snug mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
