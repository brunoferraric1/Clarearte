'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ContactFormFields() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-body-sm font-medium text-foreground">
            Nombre completo *
          </label>
          <Input
            id="name"
            name="name"
            required
            className="text-body"
            placeholder="Tu nombre"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-body-sm font-medium text-foreground">
            Correo electrónico *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="text-body"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-body-sm font-medium text-foreground">
            Teléfono (opcional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="text-body"
            placeholder="+34 000 00 00 00"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="guest-count" className="text-body-sm font-medium text-foreground">
            Número de invitados (opcional)
          </label>
          <Input
            id="guest-count"
            name="guest-count"
            type="number"
            className="text-body"
            placeholder="80"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="event-date" className="text-body-sm font-medium text-foreground">
            Fecha de la boda (opcional)
          </label>
          <Input
            id="event-date"
            name="event-date"
            type="date"
            className="text-body"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-body-sm font-medium text-foreground">
            Presupuesto aproximado (opcional)
          </label>
          <Input
            id="budget"
            name="budget"
            type="text"
            className="text-body"
            placeholder="1000 - 2000 €"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="invitation-type" className="text-body-sm font-medium text-foreground">
          Tipo de invitación deseada
        </label>
        <Select name="invitation-type">
          <SelectTrigger className="text-body">
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="coleccion">Invitaciones de colección</SelectItem>
            <SelectItem value="personalizada">Invitaciones personalizadas</SelectItem>
            <SelectItem value="asesoria">Aún no lo sé, necesito asesoría</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-body-sm font-medium text-foreground">
          Mensaje *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="text-body min-h-[150px]"
          placeholder="Cuéntame sobre tu proyecto, tipo de invitación que buscas, estilo preferido, etc."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="tracking-wide w-full cursor-pointer"
      >
        Enviar Solicitud
      </Button>
    </form>
  )
}

