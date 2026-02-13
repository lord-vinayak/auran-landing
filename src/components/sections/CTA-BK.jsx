import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2 } from "lucide-react"; // Make sure to import this!
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CTA = () => {
  // Replace 'xlgwjarl' with your actual Formspree endpoint ID if different
  const [state, handleSubmit] = useForm("xlgwjarl");

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Ready to Accelerate Your Vision?
        </h2>
        <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
          Whether you need a full-stack medical platform or a team of 20
          developers by Monday, we are ready.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-white text-indigo-900 active:scale-95 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-50 transition-colors text-lg">
                Schedule a Consultation
              </button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[425px]">
              {/* If successful, show the confirmation UI inside the Dialog */}
              {state.succeeded ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6 shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                    Request Received!
                  </DialogTitle>
                  <DialogDescription className="text-base text-slate-600 mb-8">
                    We'll get back to you soon to schedule your consultation.
                  </DialogDescription>
                  <DialogClose asChild>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                      Close Window
                    </Button>
                  </DialogClose>
                </div>
              ) : (
                /* Otherwise, show the Form */
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Request a Callback</DialogTitle>
                    <DialogDescription>
                      Leave your details below and our team will reach out shortly.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-5 py-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        className="rounded-xl border-slate-200 focus-visible:ring-teal-500"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Work Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="john@company.com" 
                        className="rounded-xl border-slate-200 focus-visible:ring-teal-500"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+1 (555) 000-0000" 
                        className="rounded-xl border-slate-200 focus-visible:ring-teal-500"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>

                  <DialogFooter className="sm:justify-between gap-3">
                    <DialogClose asChild>
                      <Button type="button" variant="outline" className="rounded-full w-full sm:w-auto">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button 
                      type="submit" 
                      disabled={state.submitting}
                      className="rounded-full w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      {state.submitting ? "Sending..." : "Submit Request"}
                    </Button>
                  </DialogFooter>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CTA;