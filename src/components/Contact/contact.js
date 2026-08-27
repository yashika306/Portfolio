import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import { logEvent } from '../../utils/analytics';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const senderEmail = form.current.email.value || "anonymous";
    emailjs.sendForm('service_8ntmoim', 'template_4e7gpjc', form.current, 'BkW_lhFFkFn-SApqj')
      .then((result) => {
        logEvent("Contact Form", "Message Sent Successfully", senderEmail);
        setOpen(true);
        form.current.reset();
      }, (error) => {
        logEvent("Contact Form", "Message Sending Failed", senderEmail);
        console.log(error.text);
      });
  }

  return (
    <div id="contact" className="h-full">
      <div className="h-full bg-white/60 dark:bg-darkCard backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-accent-glow/20 hover:border-purple-500/30 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Email Me 🚀</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              required 
              className="w-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:bg-white/70 dark:focus:bg-slate-900/60 focus:shadow-accent-glow/10 transition-all duration-200"
            />
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              required 
              className="w-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:bg-white/70 dark:focus:bg-slate-900/60 focus:shadow-accent-glow/10 transition-all duration-200"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              name="subject" 
              required 
              className="w-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:bg-white/70 dark:focus:bg-slate-900/60 focus:shadow-accent-glow/10 transition-all duration-200"
            />
            <textarea 
              placeholder="Message" 
              rows="3" 
              name="message" 
              required 
              className="w-full bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:bg-white/70 dark:focus:bg-slate-900/60 focus:shadow-accent-glow/10 transition-all duration-200 resize-none flex-1 min-h-[90px]"
            />
            <input 
              type="submit" 
              value="Send Message" 
              className="w-full text-center text-white font-semibold text-sm py-2.5 mt-1 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-accent-glow hover:translate-y-[-1px] transition-all duration-300 cursor-pointer select-none"
            />
          </form>
          
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={()=>setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
