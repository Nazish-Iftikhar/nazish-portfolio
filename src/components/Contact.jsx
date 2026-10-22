import { useForm, ValidationError } from '@formspree/react';
import { FiSend, FiCheckCircle, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm('xppqnyyz'); 

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="section-container text-center"
        >
          <FiCheckCircle size={48} className="mx-auto text-violet-600 mb-4" />
          <h2 className="heading-display text-3xl font-semibold mb-2">Message sent!</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Thank you for reaching out. I'll get back to you soon.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Aapki details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-2">Contact</p>
            <h2 className="heading-display text-3xl sm:text-4xl font-semibold mb-4">Let's build something together.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              If you'd like to hire me, collaborate on a project, or just say hello — drop a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="mailto:nazishiftikhar452@gmail.com" className="flex items-center gap-3 hover:text-violet-600 dark:hover:text-violet-400 transition-colors w-fit">
                <div className="p-2 bg-violet-50 dark:bg-violet-500/10 rounded-full text-violet-600 dark:text-violet-400"><FiMail size={18} /></div>
                nazishiftikhar452@gmail.com
              </a>
              <a href="https://wa.me/923353292174?text=Hi%20Nazish,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit">
                <div className="p-2 bg-green-50 dark:bg-green-500/10 rounded-full text-green-600 dark:text-green-400"><FaWhatsapp size={18} /></div>
                +92 335 3292174
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-50 dark:bg-violet-500/10 rounded-full text-violet-600 dark:text-violet-400"><FiMapPin size={18} /></div>
                Pakistan
              </div>
            </div>

            <a href="/Nazish_Iftikhar_Resume.pdf" download="Nazish_Iftikhar_Resume.pdf" className="btn-outline mt-8 inline-flex hover:-translate-y-1 transition-transform duration-300">
              <FiDownload /> Download my resume
            </a>
          </motion.div>

          {/* Right Column: Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-none">
              <div>
                <label className="block text-sm mb-1 font-medium">Name</label>
                <input type="text" name="name" required className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder="you@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">Message</label>
                <textarea name="message" rows={5} required className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" placeholder="Tell me about your project…" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" disabled={state.submitting} className="btn-primary w-full disabled:opacity-60 hover:-translate-y-0.5 transition-transform duration-300">
                <FiSend /> {state.submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}