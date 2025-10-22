import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Marquee } from "@/components/ui/marquee"
import { Label } from "@/components/ui/label"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-display-2 font-display text-foreground mb-4">
            Design System
          </h1>
          <p className="text-body-xl text-muted-foreground max-w-2xl">
            A comprehensive guide to Clarearte's design tokens, components, and patterns.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        
        {/* Typography Scale */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Typography Scale</h2>
          <div className="space-y-8">
            
            {/* Display Typography */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Display Typography</h3>
              <div className="space-y-4">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-display-3 font-display text-foreground mb-2">
                    Display 3 - Hero Headlines
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-display-3</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-display-2 font-display text-foreground mb-2">
                    Display 2 - Large Headlines
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-display-2</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-display-1 font-display text-foreground mb-2">
                    Display 1 - Section Headlines
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-display-1</code>
                </div>
              </div>
            </div>

            {/* Title Typography */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Title Typography</h3>
              <div className="space-y-4">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-title-3 font-display text-foreground mb-2">
                    Title 3 - Subsection Headers
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-title-3</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-title-2 font-display text-foreground mb-2">
                    Title 2 - Component Headers
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-title-2</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-title-1 font-display text-foreground mb-2">
                    Title 1 - Card Headers
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-title-1</code>
                </div>
              </div>
            </div>

            {/* Body Typography */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Body Typography</h3>
              <div className="space-y-4">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-xl text-foreground mb-2">
                    Body XL - Large body text for emphasis
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-body-xl</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-lg text-foreground mb-2">
                    Body Large - Standard large body text
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-body-lg</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body text-foreground mb-2">
                    Body - Standard body text for paragraphs
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-body</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-sm text-foreground mb-2">
                    Body Small - Secondary information
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-body-sm</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-xs text-foreground mb-2">
                    Body Extra Small - Captions and fine print
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-body-xs</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-label text-foreground mb-2">
                    Label - Form labels and overlines
                  </div>
                  <code className="text-body-sm text-muted-foreground">text-label</code>
                </div>
              </div>
            </div>

            {/* Font Families */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Font Families</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="font-sans text-body-lg text-foreground mb-2">
                    Sans Serif
                  </div>
                  <div className="text-body-sm text-muted-foreground mb-2">Zen Kaku Gothic New</div>
                  <code className="text-body-xs text-muted-foreground">font-sans</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="font-serif text-body-lg text-foreground mb-2">
                    Serif
                  </div>
                  <div className="text-body-sm text-muted-foreground mb-2">Playfair Display</div>
                  <code className="text-body-xs text-muted-foreground">font-serif</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="font-mono text-body-lg text-foreground mb-2">
                    Monospace
                  </div>
                  <div className="text-body-sm text-muted-foreground mb-2">Roboto Mono</div>
                  <code className="text-body-xs text-muted-foreground">font-mono</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Color Palette</h2>
          <div className="space-y-8">
            
            {/* Primary Colors */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-primary rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Primary</div>
                  <code className="text-body-xs text-muted-foreground">bg-primary</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-primary-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Primary Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-primary-foreground</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-secondary rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Secondary</div>
                  <code className="text-body-xs text-muted-foreground">bg-secondary</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-secondary-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Secondary Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-secondary-foreground</code>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Neutral Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-background rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Background</div>
                  <code className="text-body-xs text-muted-foreground">bg-background</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-foreground</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-muted rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Muted</div>
                  <code className="text-body-xs text-muted-foreground">bg-muted</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-muted-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Muted Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-muted-foreground</code>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Accent Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-accent rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Accent</div>
                  <code className="text-body-xs text-muted-foreground">bg-accent</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-accent-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Accent Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-accent-foreground</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-destructive rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Destructive</div>
                  <code className="text-body-xs text-muted-foreground">bg-destructive</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-destructive-foreground rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Destructive Foreground</div>
                  <code className="text-body-xs text-muted-foreground">bg-destructive-foreground</code>
                </div>
              </div>
            </div>

            {/* Border & Input Colors */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Border & Input Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-border rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Border</div>
                  <code className="text-body-xs text-muted-foreground">bg-border</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-input rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Input</div>
                  <code className="text-body-xs text-muted-foreground">bg-input</code>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-ring rounded-lg border"></div>
                  <div className="text-body-sm font-medium text-foreground">Ring</div>
                  <code className="text-body-xs text-muted-foreground">bg-ring</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Spacing Scale</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96].map((space) => (
                <div key={space} className="space-y-2">
                  <div 
                    className="bg-primary rounded"
                    style={{ height: `${space * 0.25}rem`, width: `${space * 0.25}rem` }}
                  ></div>
                  <div className="text-body-sm font-medium text-foreground">{space * 0.25}rem</div>
                  <code className="text-body-xs text-muted-foreground">p-{space}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Border Radius</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-sm"></div>
              <div className="text-body-sm font-medium text-foreground">Small</div>
              <code className="text-body-xs text-muted-foreground">rounded-sm</code>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded"></div>
              <div className="text-body-sm font-medium text-foreground">Default</div>
              <code className="text-body-xs text-muted-foreground">rounded</code>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-md"></div>
              <div className="text-body-sm font-medium text-foreground">Medium</div>
              <code className="text-body-xs text-muted-foreground">rounded-md</code>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-lg"></div>
              <div className="text-body-sm font-medium text-foreground">Large</div>
              <code className="text-body-xs text-muted-foreground">rounded-lg</code>
            </div>
          </div>
        </section>

        {/* UI Components */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">UI Components</h2>
          <div className="space-y-12">
            
            {/* Buttons */}
            <div>
              <h3 className="text-title-2 text-foreground mb-6">Buttons</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-title-3 text-foreground mb-4">Button Variants</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="primary-outline">Primary Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary-outline">Secondary Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-title-3 text-foreground mb-4">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">🎨</Button>
                    <Button size="icon-sm">🎨</Button>
                    <Button size="icon-lg">🎨</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-title-2 text-foreground mb-6">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-foreground">
                      This is the card content area where you can place any content.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Another Card</CardTitle>
                    <CardDescription>With different content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-foreground">
                      Cards are flexible containers for grouping related content.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Third Card</CardTitle>
                    <CardDescription>Example card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-foreground">
                      Perfect for showcasing features or content blocks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="text-title-2 text-foreground mb-6">Form Elements</h3>
              <div className="max-w-md space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="input-example">Input Field</Label>
                  <Input id="input-example" placeholder="Enter text here..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textarea-example">Textarea</Label>
                  <Textarea id="textarea-example" placeholder="Enter longer text here..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-example">Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Marquee */}
            <div>
              <h3 className="text-title-2 text-foreground mb-6">Marquee</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-title-3 text-foreground mb-4">Horizontal Marquee</h4>
                  <Marquee className="[--duration:20s]">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div key={i} className="px-4 py-2 bg-muted rounded-lg text-body-sm text-foreground">
                        Item {i + 1}
                      </div>
                    ))}
                  </Marquee>
                </div>
                <div>
                  <h4 className="text-title-3 text-foreground mb-4">Vertical Marquee</h4>
                  <div className="h-32">
                    <Marquee vertical className="[--duration:15s]">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="px-4 py-2 bg-muted rounded-lg text-body-sm text-foreground">
                          Vertical Item {i + 1}
                        </div>
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Design Tokens</h2>
          <div className="space-y-8">
            
            {/* Shadows */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Shadows</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-2xs"></div>
                  <div className="text-body-sm font-medium text-foreground">2XS</div>
                  <code className="text-body-xs text-muted-foreground">shadow-2xs</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-xs"></div>
                  <div className="text-body-sm font-medium text-foreground">XS</div>
                  <code className="text-body-xs text-muted-foreground">shadow-xs</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-sm"></div>
                  <div className="text-body-sm font-medium text-foreground">Small</div>
                  <code className="text-body-xs text-muted-foreground">shadow-sm</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow"></div>
                  <div className="text-body-sm font-medium text-foreground">Default</div>
                  <code className="text-body-xs text-muted-foreground">shadow</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-md"></div>
                  <div className="text-body-sm font-medium text-foreground">Medium</div>
                  <code className="text-body-xs text-muted-foreground">shadow-md</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-lg"></div>
                  <div className="text-body-sm font-medium text-foreground">Large</div>
                  <code className="text-body-xs text-muted-foreground">shadow-lg</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-xl"></div>
                  <div className="text-body-sm font-medium text-foreground">XL</div>
                  <code className="text-body-xs text-muted-foreground">shadow-xl</code>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-card border rounded-lg shadow-2xl"></div>
                  <div className="text-body-sm font-medium text-foreground">2XL</div>
                  <code className="text-body-xs text-muted-foreground">shadow-2xl</code>
                </div>
              </div>
            </div>

            {/* Letter Spacing */}
            <div>
              <h3 className="text-title-2 text-foreground mb-4">Letter Spacing</h3>
              <div className="space-y-4">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-lg tracking-tighter text-foreground mb-2">
                    Tighter - For display text
                  </div>
                  <code className="text-body-sm text-muted-foreground">tracking-tighter</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-lg tracking-tight text-foreground mb-2">
                    Tight - For headings
                  </div>
                  <code className="text-body-sm text-muted-foreground">tracking-tight</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-lg tracking-normal text-foreground mb-2">
                    Normal - For body text
                  </div>
                  <code className="text-body-sm text-muted-foreground">tracking-normal</code>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                  <div className="text-body-lg tracking-wide text-foreground mb-2">
                    Wide - For labels and overlines
                  </div>
                  <code className="text-body-sm text-muted-foreground">tracking-wide</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-title-1 font-display text-foreground mb-8">Usage Guidelines</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Typography Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-body text-foreground">
                  <li>• Use display typography for hero sections and main headlines</li>
                  <li>• Use title typography for section headers and component titles</li>
                  <li>• Use body typography for paragraphs and general content</li>
                  <li>• Use the serif font (Playfair Display) for display and title text</li>
                  <li>• Use the sans-serif font (Zen Kaku Gothic New) for body text</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Color Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-body text-foreground">
                  <li>• Primary colors should be used for main actions and branding</li>
                  <li>• Secondary colors are for supporting elements</li>
                  <li>• Muted colors are for subtle backgrounds and secondary text</li>
                  <li>• Destructive colors should only be used for dangerous actions</li>
                  <li>• All colors automatically adapt to light/dark mode</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Component Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-body text-foreground">
                  <li>• Use consistent spacing between elements (4, 6, 8, 12, 16, 24, 32, 48, 64)</li>
                  <li>• Maintain proper contrast ratios for accessibility</li>
                  <li>• Use semantic color tokens instead of hardcoded colors</li>
                  <li>• Follow the established component patterns for consistency</li>
                  <li>• Test components in both light and dark modes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

