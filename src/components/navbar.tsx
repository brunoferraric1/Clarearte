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
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-title-2 font-display font-bold text-foreground">
                ClareArte
              </span>
            </a>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-body font-medium">
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/servicos"
                        >
                          <div className="text-title-3 font-semibold mb-2">
                            Nossos Serviços
                          </div>
                          <p className="text-body-sm text-muted-foreground leading-tight">
                            Descubra como transformamos seu evento em arte.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/convites" title="Convites Personalizados">
                      Convites únicos para o seu casamento especial.
                    </ListItem>
                    <ListItem href="/menus" title="Menus Personalizados">
                      Menus elegantes que complementam seu evento.
                    </ListItem>
                    <ListItem href="/ilustracoes" title="Ilustrações ao Vivo">
                      Arte ao vivo para momentos inesquecíveis.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/portfolio" className="text-body font-medium">
                    Portfolio
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/sobre" className="text-body font-medium">
                    Sobre Nós
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/contacto" className="text-body font-medium">
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
              className="tracking-wide"
              asChild
            >
              <a href="/contacto">
                Solicitar Orçamento
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
        <a href={href}>
          <div className="text-body-sm font-medium leading-none">{title}</div>
          <p className="text-body-xs text-muted-foreground leading-snug mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
