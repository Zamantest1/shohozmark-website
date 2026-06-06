import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SERVICES } from "@/data/services";
import { useSubmitContact } from "@workspace/api-client-react";
import { CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ConsultationModal({ children, open, onOpenChange }: ConsultationModalProps) {
  const [isControlled] = useState(open !== undefined);
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;
  const setOpen = isControlled && onOpenChange ? onOpenChange : setInternalOpen;

  const [form, setForm] = useState({ name: "", email: "", phone: "", businessName: "", serviceInterest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitContact({
    mutation: {
      onSuccess: () => setSubmitted(true),
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      data: {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        businessName: form.businessName || null,
        serviceInterest: form.serviceInterest || null,
        message: form.message,
      },
    });
  };

  const handleOpenChange = (o: boolean) => {
    setOpen(o);
    if (!o) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", businessName: "", serviceInterest: "", message: "" });
        mutation.reset();
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-bold text-foreground">Get a Free Consultation</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">Fill in your details and we'll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-primary" />
            <h3 className="font-serif text-xl font-bold">Request Received!</h3>
            <p className="text-muted-foreground text-sm">Thank you! We'll be in touch within 24 hours.</p>
            <button
              onClick={() => handleOpenChange(false)}
              className="bg-primary text-black font-bold px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-colors text-sm mt-2"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name *</label>
              <input id="name" value={form.name} onChange={handleChange} className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
              <input id="email" type="email" value={form.email} onChange={handleChange} className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="businessName" className="text-sm font-medium text-foreground">Business Name</label>
              <input id="businessName" value={form.businessName} onChange={handleChange} className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Acme Corp" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="serviceInterest" className="text-sm font-medium text-foreground">Service Interested In</label>
              <select id="serviceInterest" value={form.serviceInterest} onChange={handleChange} className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
              <input id="phone" type="tel" value={form.phone} onChange={handleChange} className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="+880 1..." />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Brief Message *</label>
              <textarea id="message" value={form.message} onChange={handleChange} className="flex min-h-[80px] w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="How can we help?" required />
            </div>
            {mutation.isError && (
              <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-sm hover:bg-primary/90 transition-colors w-full mt-2 disabled:opacity-60"
            >
              {mutation.isPending ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
