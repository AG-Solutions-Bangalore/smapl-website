import { Send, User, Mail, Phone, MessageSquare, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-1">SEND US A MESSAGE</h2>
      <div className="w-16 h-1 bg-accent mb-4" />
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Have a question or need more information about our products?
        <br />
        Fill out the form and our team will get back to you shortly.
      </p>

      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Your Name"
              aria-label="Your Name"
              className="pl-10 h-11 rounded-xl border-gray-200 bg-gray-50/50"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="pl-10 h-11 rounded-xl border-gray-200 bg-gray-50/50"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="pl-10 h-11 rounded-xl border-gray-200 bg-gray-50/50"
            />
          </div>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Subject"
              aria-label="Subject"
              className="pl-10 h-11 rounded-xl border-gray-200 bg-gray-50/50"
            />
          </div>
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
          <Textarea
            placeholder="Your Message"
            aria-label="Your Message"
            rows={4}
            className="pl-10 rounded-xl border-gray-200 bg-gray-50/50 resize-none"
          />
        </div>

        <Button
          type="button"
          className="bg-navy hover:bg-navy-dark text-white px-8 py-2.5 rounded-xl font-semibold"
        >
          <Send className="w-4 h-4 mr-2" />
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
}
