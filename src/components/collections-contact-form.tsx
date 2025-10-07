'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function CollectionsContactForm() {
  const [formData, setFormData] = useState({
    coupleName: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    guestCount: '',
    invitationType: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-title-1 font-display font-bold text-foreground">
              Hablemos de vuestro gran día
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada historia de amor es única, y vuestras invitaciones también lo serán.
              Cuéntame un poco sobre vosotros y sobre lo que imagináis para vuestro gran día.
              Con esta información podré preparar una propuesta personalizada y adaptada a vuestra esencia.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-background rounded-lg p-6 md:p-8 shadow-sm">
            {/* Couple Name */}
            <div className="space-y-2">
              <Label htmlFor="coupleName">
                Nombre de la pareja <span className="text-destructive">*</span>
              </Label>
              <Input
                id="coupleName"
                placeholder="María & Juan"
                required
                value={formData.coupleName}
                onChange={(e) => setFormData({ ...formData, coupleName: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email de contacto <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contacto@ejemplo.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Teléfono / WhatsApp
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Wedding Date */}
            <div className="space-y-2">
              <Label htmlFor="weddingDate">
                Fecha de la boda <span className="text-destructive">*</span>
              </Label>
              <Input
                id="weddingDate"
                type="date"
                required
                value={formData.weddingDate}
                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">
                Lugar de la celebración
              </Label>
              <Input
                id="location"
                placeholder="Barcelona / Masía Can Font"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <Label htmlFor="guestCount">
                Número aproximado de invitados <span className="text-destructive">*</span>
              </Label>
              <Input
                id="guestCount"
                type="number"
                placeholder="80"
                required
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              />
            </div>

            {/* Invitation Type */}
            <div className="space-y-2">
              <Label htmlFor="invitationType">
                Tipo de invitación deseada <span className="text-destructive">*</span>
              </Label>
              <Select
                required
                value={formData.invitationType}
                onValueChange={(value) => setFormData({ ...formData, invitationType: value })}
              >
                <SelectTrigger id="invitationType">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coleccion">Invitaciones de colección</SelectItem>
                  <SelectItem value="personalizada">Invitaciones personalizadas</SelectItem>
                  <SelectItem value="asesoria">Aún no lo sé, necesito asesoría</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget">
                Presupuesto estimado
              </Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Selecciona un rango (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500">Hasta 500 €</SelectItem>
                  <SelectItem value="500-1000">500–1.000 €</SelectItem>
                  <SelectItem value="1000-2000">1.000–2.000 €</SelectItem>
                  <SelectItem value="2000+">Más de 2.000 €</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Cuéntame vuestra idea, estilo o inspiración
              </Label>
              <Textarea
                id="message"
                placeholder="Nos encanta el estilo romántico con flores silvestres, colores pastel y detalles en acuarela. Nos casamos en un jardín al atardecer..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full tracking-wide"
              >
                Enviar solicitud
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
