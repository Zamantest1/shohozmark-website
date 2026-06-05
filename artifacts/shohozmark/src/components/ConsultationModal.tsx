import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SERVICES } from "@/data/services";

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

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-bold text-foreground">Get a Free Consultation</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={(e) => { e.preventDefault(); setOpen(false); }}>
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
            <input id="name" className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="business" className="text-sm font-medium text-foreground">Business Name</label>
            <input id="business" className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Acme Corp" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interested In</label>
            <select id="service" className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
            <input id="phone" type="tel" className="flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="+880 1..." required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Brief Message</label>
            <textarea id="message" className="flex min-h-[80px] w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="How can we help?" required />
          </div>
          <button type="submit" className="bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-sm hover:bg-primary/90 transition-colors w-full mt-2">
            Submit Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
