import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { toast } from "react-toastify";
import { cn } from '../lib/utils';


export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true)

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm('service_3bx5k65', 'template_psrg2xq', form.current, {
        publicKey: 'C8CNBHzYAR0usgc5E',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: "top-right",
            autoClose: 5000,
          });
          setIsSubmitting(false)
          form.current?.reset();
        },
        () => {
          toast.error('Failed to send email.', {
            position: "top-right",
            autoClose: 5000,
          });
          setIsSubmitting(false)
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div>
            <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
            >
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-4"
                placeholder="Your Name..."
            />
            <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-4"
                placeholder="example@email.com"
            />
            <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
            >
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-4"
                placeholder="Your Message..."
            />

            <button
                disabled={isSubmitting} 
                className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
            )}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
            </button>
        </div>
    </form>
  );
};
