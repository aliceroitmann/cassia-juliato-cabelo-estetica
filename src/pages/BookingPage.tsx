import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronDown, Scissors } from 'lucide-react';

const BOOKING_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-booking`;

const services = [
  'Corte Feminino',
  'Corte Masculino',
  'Coloração',
  'Balayage / Mechas',
  'Tratamento de Queratina',
  'Limpeza de Pele',
  'Facial Anti-Idade',
  'Massagem Sueca',
  'Massagem Relaxante',
  'Massagem com Pedras Quentes',
  'Manicure',
  'Pedicure',
  'Combo Mani + Pedi',
  'Esfoliação Corporal',
  'Envoltório Corporal',
  'Pacote para Noiva',
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00',
];

const stylists = ['Qualquer Disponível', 'Isabella Chen', 'Marcus Williams', 'Sofia Alvarez', 'Ethan Brooks'];

type Step = 1 | 2 | 3;

interface BookingForm {
  service: string;
  date: string;
  time: string;
  stylist: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export default function BookingPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<BookingForm>({
    service: '',
    date: '',
    time: '',
    stylist: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const set = (key: keyof BookingForm, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const today = new Date().toISOString().split('T')[0];

  const step1Valid = form.service && form.date && form.time && form.stylist;
  const step2Valid = form.name && form.phone && form.email;

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(BOOKING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          service: form.service,
          appointment_date: form.date,
          appointment_time: form.time,
          stylist: form.stylist,
          client_name: form.name,
          client_phone: form.phone,
          client_email: form.email,
          notes: form.notes,
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? `Erro ${response.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Algo deu errado. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr + 'T12:00:00').toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6 pt-20">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#8B6914]" />
          </div>
          <h2 className="font-serif text-3xl text-[#1C1C1C] font-light mb-3">Agendamento Confirmado!</h2>
          <p className="text-[#6B6560] text-sm leading-relaxed mb-2">
            Obrigado, <strong>{form.name}</strong>! Seu agendamento foi recebido com sucesso.
          </p>
          <p className="text-[#6B6560] text-sm leading-relaxed mb-8">
            Enviaremos uma confirmação para <strong>{form.email}</strong> em breve.
          </p>
          <div className="bg-white border border-gray-100 p-6 text-left space-y-2 mb-8">
            {[
              ['Serviço', form.service],
              ['Data', formatDate(form.date)],
              ['Horário', form.time],
              ['Profissional', form.stylist],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-[#6B6560]">{label}</span>
                <span className="font-medium text-[#1C1C1C]">{value}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setForm({ service: '', date: '', time: '', stylist: '', name: '', phone: '', email: '', notes: '' });
            }}
            className="px-8 py-3 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-colors"
          >
            Fazer Novo Agendamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Reserve Seu Horário</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">Agendar Horário</h1>
        <div className="section-divider mx-auto mb-4" />
        <p className="text-[#6B6560] text-sm">Simples, rápido e disponível 24 horas por dia</p>
      </div>

      {/* Indicador de passos */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step >= s ? 'text-[#8B6914]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all ${
                  step > s ? 'bg-[#C9A96E] border-[#C9A96E] text-[#1C1C1C]' :
                  step === s ? 'border-[#C9A96E] text-[#8B6914]' :
                  'border-gray-200 text-gray-400'
                }`}>
                  {step > s ? '✓' : s}
                </div>
                <span className="text-xs tracking-wide hidden sm:block">
                  {['Escolha o Serviço', 'Seus Dados', 'Confirmar'][s - 1]}
                </span>
              </div>
              {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-[#C9A96E]' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm border border-gray-100 p-8">

          {/* Passo 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1C1C] font-light flex items-center gap-2">
                <Scissors className="text-[#8B6914]" size={20} />
                Escolha o Serviço e o Horário
              </h3>

              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Serviço *</label>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={e => set('service', e.target.value)}
                    className="w-full appearance-none border border-gray-200 px-4 py-3 text-sm bg-white text-[#1C1C1C] focus:outline-none focus:border-[#C9A96E] transition-colors pr-10"
                  >
                    <option value="">Selecione um serviço...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Data *</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={e => set('date', e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Horário *</label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={form.time}
                      onChange={e => set('time', e.target.value)}
                      className="w-full appearance-none border border-gray-200 px-4 py-3 pl-10 text-sm bg-white focus:outline-none focus:border-[#C9A96E] transition-colors pr-10"
                    >
                      <option value="">Selecione o horário...</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Profissional *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {stylists.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => set('stylist', s)}
                      className={`px-4 py-3 text-xs border transition-all text-center ${
                        form.stylist === s
                          ? 'border-[#C9A96E] bg-[#C9A96E]/5 text-[#8B6914]'
                          : 'border-gray-200 text-[#6B6560] hover:border-[#C9A96E]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => step1Valid && setStep(2)}
                disabled={!step1Valid}
                className="w-full py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </div>
          )}

          {/* Passo 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1C1C] font-light flex items-center gap-2">
                <User className="text-[#8B6914]" size={20} />
                Seus Dados
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Nome Completo *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Telefone *</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="(11) 99999-0000"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">E-mail *</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="seu@email.com.br"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 pl-10 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Observações</label>
                <textarea
                  rows={3}
                  placeholder="Alergias, preferências ou pedidos especiais..."
                  value={form.notes}
                  onChange={e => set('notes', e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border border-gray-200 text-[#6B6560] text-xs tracking-widest uppercase hover:border-[#C9A96E] transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={() => step2Valid && setStep(3)}
                  disabled={!step2Valid}
                  className="flex-1 py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Revisar Agendamento
                </button>
              </div>
            </div>
          )}

          {/* Passo 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1C1C] font-light">Confirmar Agendamento</h3>

              <div className="bg-[#FAF7F2] p-6 space-y-3">
                <p className="text-xs tracking-widest uppercase text-[#8B6914] mb-4">Resumo do Agendamento</p>
                {[
                  ['Serviço', form.service],
                  ['Data', formatDate(form.date)],
                  ['Horário', form.time],
                  ['Profissional', form.stylist],
                  ['Nome', form.name],
                  ['Telefone', form.phone],
                  ['E-mail', form.email],
                  ...(form.notes ? [['Observações', form.notes]] : []),
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0">
                    <span className="text-[#6B6560]">{label}</span>
                    <span className="font-medium text-[#1C1C1C] text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3">{error}</div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 border border-gray-200 text-[#6B6560] text-xs tracking-widest uppercase hover:border-[#C9A96E] transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-colors disabled:opacity-60"
                >
                  {loading ? 'Confirmando...' : 'Confirmar Agendamento'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
