'use client';

import { useState } from 'react';

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
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

    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
    }
    if (!formData.cognome.trim()) {
      newErrors.cognome = 'Il cognome è obbligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ nome: '', cognome: '', email: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
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

        <button
          type="submit"
          className="w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition"
        >
          Invia messaggio
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Altre informazioni</h2>
        <p className="text-slate-600 mb-2">
          Email: <span className="font-semibold text-slate-900">info@sadaga.it</span>
        </p>
        <p className="text-slate-600">
          Seguici sui social per rimanere aggiornato sui nostri eventi e attività.
        </p>
      </div>
    </div>
  );
}
