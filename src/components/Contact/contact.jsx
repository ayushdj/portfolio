import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    window.open(
      `mailto:ayushdj13@gmail.com?subject=${encodeURIComponent(
        `${data.name} — ${data.email}`
      )}&body=${encodeURIComponent(data.chat)}`
    );
  };

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:bg-white/[0.07] focus:ring-2 focus:ring-accent/20 outline-none transition-all";

  return (
    <section id="contact" className="relative py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-mono text-accent mb-3">// contact</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Have a project, role, or idea? I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 bg-accent/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-sky-500/10 blur-3xl rounded-full" />

          <div className="relative grid md:grid-cols-[1fr_1.2fr] gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-3">Get in touch</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                I'm open to conversations about software engineering roles,
                collaborations, or just geeking out over good code.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:ayushdj13@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent transition-colors"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-white/5 border border-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 5L2 7" />
                    </svg>
                  </span>
                  ayushdj13@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-dhananjai/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent transition-colors"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-white/5 border border-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.12 1 2.5 1s2.48 1.119 2.48 2.5zM.22 8h4.56v14H.22V8zm7.49 0h4.37v1.906h.062c.609-1.152 2.094-2.367 4.312-2.367 4.609 0 5.46 3.031 5.46 6.977V22h-4.55v-6.336c0-1.512-.03-3.457-2.11-3.457-2.11 0-2.43 1.648-2.43 3.348V22H7.71V8z" />
                    </svg>
                  </span>
                  linkedin.com/in/ayush-dhananjai
                </a>
                <a
                  href="https://github.com/ayushdj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent transition-colors"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-white/5 border border-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.566 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  github.com/ayushdj
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={inputBase}
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className={inputBase}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("chat", { required: "Message is required" })}
                  className={`${inputBase} resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.chat && (
                  <p className="mt-1 text-xs text-red-400">{errors.chat.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(78,225,160,0.4)]"
              >
                Send message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
