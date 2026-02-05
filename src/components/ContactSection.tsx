import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email demasiado largo"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000, "Mensaje demasiado largo"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission - in production, connect to email service
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("¡Mensaje enviado! Te respondemos pronto.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="text-muted-foreground">Cuéntame qué necesitas y te respondo rápido para que empieces ya.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-14 bg-background border-border focus:ring-primary ${
                  errors.name ? "border-destructive" : ""
                }`}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-14 bg-background border-border focus:ring-primary ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <Textarea
                placeholder="¿Qué necesitas para tu web?"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`bg-background border-border focus:ring-primary resize-none ${
                  errors.message ? "border-destructive" : ""
                }`}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full btn-primary py-6 text-base">
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">📩 Respondo rápido para que empieces ya</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
