'use client';

import { useState } from 'react';
import emailjs from "@emailjs/browser";

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: { [key: string]: string } = {};

  if (!formData.nome.trim()) newErrors.nome = "Il nome è obbligatorio";
  if (!formData.message.trim()) {
  newErrors.message = 'Il messaggio è obbligatorio';
}
  if (!formData.cognome.trim()) newErrors.cognome = "Il cognome è obbligatorio";
  if (!formData.email.trim()) {
    newErrors.email = "Email obbligatoria";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Email non valida";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  emailjs
    .send(
      "service_k6b692l",      
      "template_59fwo4h",         
      {
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        message: formData.message,
      },
      "s04vy0LfHDfL-LCoI"           
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ nome: '', cognome: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("Errore invio email:", error);
    });
};

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Contatti</h1>
      <p className="text-slate-600 mb-8">
        Hai una domanda o vuoi saperne di più su Sadaga? Compila il modulo qui sotto e ti contatteremo al più presto.
      </p>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
          Grazie! Abbiamo ricevuto il tuo messaggio. Ti contatteremo presto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-slate-900 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded outline-none transition ${
              errors.nome
                ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                : 'border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-100'
            }`}
            placeholder="Inserisci il tuo nome"
          />
          {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="cognome" className="block text-sm font-semibold text-slate-900 mb-2">
            Cognome *
          </label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded outline-none transition ${
              errors.cognome
                ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                : 'border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-100'
            }`}
            placeholder="Inserisci il tuo cognome"
          />
          {errors.cognome && <p className="text-red-600 text-sm mt-1">{errors.cognome}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded outline-none transition ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                : 'border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-100'
            }`}
            placeholder="esempio@email.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Messaggio *
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded outline-none transition h-32 ${
              errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-slate-300 focus:border-slate-900'
            }`}
            placeholder="Scrivi il tuo messaggio..."
          />

          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Invia messaggio
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Altre informazioni</h2>
        <p className="text-slate-600 mb-2">
          Email: <span className="font-semibold text-slate-900">grupposadaga@libero.it</span>
        </p>
        <p className="text-slate-600">
          Seguici sui social per rimanere aggiornato sui nostri eventi e attività.
        </p>
      </div>
    </div>
  );
}
