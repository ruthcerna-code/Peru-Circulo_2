import React, { useState } from 'react';
import { ActiveModal, Tribute } from '../types';
import { 
  X, 
  Heart, 
  ShieldCheck, 
  FileText, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Download, 
  Gift, 
  Users, 
  AlertCircle, 
  Printer,
  Instagram
} from 'lucide-react';
import { ButterflyIcon, StarIcon, FlowerIcon, HeartIcon, CandleIcon } from './SvgIcons';

interface ModalsProps {
  activeModal: ActiveModal;
  onClose: () => void;
  onTributeAdded?: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose, onTributeAdded }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F8EDE6] text-[#2E2448] w-full max-w-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden relative max-h-[90vh] flex flex-col my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-[#2E2448] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#F1DDE0] flex items-center justify-center">
              <ButterflyIcon size={20} />
            </span>
            <span className="font-serif-display font-medium text-lg tracking-wide">
              CAD Perú
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 transition-colors text-white cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {activeModal === 'first-steps' && <FirstStepsContent onClose={onClose} />}
          {activeModal === 'join-circle' && <JoinCircleContent onClose={onClose} />}
          {activeModal === 'ley-estrella' && <LeyEstrellaContent onClose={onClose} />}
          {activeModal === 'how-to-accompany' && <HowToAccompanyContent onClose={onClose} />}
          {activeModal === 'add-tribute' && (
            <AddTributeContent 
              onClose={onClose} 
              onSuccess={() => {
                if (onTributeAdded) onTributeAdded();
                onClose();
              }} 
            />
          )}
          {activeModal === 'memory-box' && <MemoryBoxContent onClose={onClose} />}
          {activeModal === 'professionals' && <ProfessionalsContent onClose={onClose} />}
          {activeModal === 'donate' && <DonateContent onClose={onClose} />}
          {activeModal === 'contact' && <ContactContent onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

/* 1. First Steps Modal */
const FirstStepsContent: React.FC<{ onClose: () => void }> = () => {
  const [printed, setPrinted] = useState(false);

  const handlePrint = () => {
    setPrinted(true);
    window.print();
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D97A8E]">
          Guía de Primeros Auxilios Emocionales
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Acabo de perder a mi bebé: ¿Por dónde empezar?
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Respira despacio. No tienes que apresurarte ni resolver todo hoy. Este dolor es inmenso y mereces ser tratada con la mayor delicadeza.
        </p>
      </div>

      <div className="space-y-4 text-[15px] text-[#2E2448]/90">
        <div className="bg-white/80 p-4 rounded-2xl border border-[#2E2448]/10">
          <h4 className="font-bold text-[#2E2448] mb-1 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#DCD2EE] flex items-center justify-center text-xs font-mono">1</span>
            En el hospital o clínica: Tus recuerdos importan
          </h4>
          <p className="text-sm leading-relaxed text-[#2E2448]/85">
            Tienes derecho a conocer, cargar y despedir a tu bebé con calma. Si lo deseas, puedes tomar fotografías de sus manitos y pies, pedir huellitas con tinta, cortar un mechoncito de pelo o vestirlo con su primera ropita. Estos recuerdos serán un tesoro invaluable en los años venideros.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#2E2448]/10">
          <h4 className="font-bold text-[#2E2448] mb-1 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#DCD2EE] flex items-center justify-center text-xs font-mono">2</span>
            Tu cuerpo y el puerperio
          </h4>
          <p className="text-sm leading-relaxed text-[#2E2448]/85">
            Tu cuerpo atravesará cambios hormonales intensos y es posible que baje la leche. Habla con tu médico sobre opciones respetuosas para inhibir la lactancia o donar leche si así lo sientes. Permítete descansar y delega trámites.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#2E2448]/10">
          <h4 className="font-bold text-[#2E2448] mb-1 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#DCD2EE] flex items-center justify-center text-xs font-mono">3</span>
            El silencio y las palabras ajenas
          </h4>
          <p className="text-sm leading-relaxed text-[#2E2448]/85">
            Muchas personas bienintencionadas dirán cosas dolorosas por no saber qué decir. No tienes que responder mensajes si no tienes energía. Pide a alguien de confianza que sea tu portavoz.
          </p>
        </div>

        <div className="bg-[#A893D1]/20 p-4 rounded-2xl border border-[#A893D1]/40 flex items-start gap-3">
          <Heart className="text-[#D97A8E] shrink-0 mt-1" size={20} />
          <div className="text-sm">
            <strong className="block text-[#2E2448]">Estamos para sostenerte</strong>
            <p className="text-[#2E2448]/85">
              En CAD Perú no estarás sola. Cuando estés lista, te esperamos con los brazos abiertos en nuestro grupo de mamás y papás.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#2E2448]/15">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#2E2448] bg-white px-4 py-2.5 rounded-full border border-[#2E2448]/20 hover:bg-[#F1DDE0] transition-colors cursor-pointer"
        >
          <Printer size={15} />
          <span>{printed ? 'Guía enviada a imprimir' : 'Imprimir / Guardar guía'}</span>
        </button>

        <a
          href="https://www.instagram.com/circulodeapoyoperu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#2E2448] px-5 py-2.5 rounded-full hover:brightness-110 transition-colors"
        >
          <span>Escribirnos directamente</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

/* 2. Join Circle Modal */
const JoinCircleContent: React.FC<{ onClose: () => void }> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'mama',
    city: 'Lima',
    babyName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#4A6FA5]">
          Acompañamiento Gratuito y Confidencial
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Quiero unirme al Círculo de Apoyo
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Un espacio seguro donde hablar de tu hijo o hija, validar tus emociones y escuchar a otras familias que caminan el mismo sendero.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white/90 p-6 rounded-2xl text-center border border-[#A893D1]/30">
          <CheckCircle2 className="mx-auto text-emerald-600 mb-3" size={44} />
          <h4 className="font-serif-display text-xl font-bold text-[#2E2448] mb-2">
            ¡Bienvenida(o) con amor al Círculo!
          </h4>
          <p className="text-sm text-[#2E2448]/85 mb-5 max-w-md mx-auto">
            Hemos recibido tus datos con absoluto respeto y cariño. Una de nuestras coordinadoras se pondrá en contacto contigo muy pronto vía WhatsApp para darte la bienvenida al grupo.
          </p>
          <a
            href="https://www.instagram.com/circulodeapoyoperu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4A6FA5] text-white text-sm font-semibold hover:brightness-105"
          >
            <span>También puedes escribirnos al Instagram</span>
            <span>→</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                Tu nombre
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Carmen / Daniel"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                WhatsApp / Teléfono de contacto
              </label>
              <input
                required
                type="tel"
                placeholder="+51 987 654 321"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                ¿Quién se suma al círculo?
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              >
                <option value="mama">Mamá en duelo</option>
                <option value="papa">Papá en duelo</option>
                <option value="pareja">Ambos en pareja</option>
                <option value="familiar">Familiar cercano</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                Ciudad o departamento (Perú)
              </label>
              <input
                type="text"
                placeholder="Ej. Lima, Arequipa, Trujillo..."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Nombre de tu bebé o angelito (opcional)
            </label>
            <input
              type="text"
              placeholder="Si deseas nombrarlo o colocar un apodo cariñoso"
              value={formData.babyName}
              onChange={(e) => setFormData({ ...formData, babyName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
            />
          </div>

          <p className="text-xs text-[#2E2448]/70 italic">
            * Tus datos son tratados con máxima confidencialidad. Los grupos son moderados por madres pares capacitadas.
          </p>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full font-bold text-base bg-[#4A6FA5] text-white hover:brightness-105 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Enviar solicitud de ingreso al grupo</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

/* 3. Ley Estrella Modal */
const LeyEstrellaContent: React.FC<{ onClose: () => void }> = () => {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#2E2448] bg-[#F2A07B] px-3 py-1 rounded-full">
          Legislación Peruana Vigente
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-3">
          Ley N.° 32132 · Ley Estrella
        </h3>
        <p className="text-sm text-[#2E2448]/85 mt-2">
          Ley que promueve el cuidado integral y multidisciplinario de la madre, padre y familia ante la muerte y duelo gestacional y neonatal en el Perú.
        </p>
      </div>

      <div className="space-y-4 text-sm text-[#2E2448]/90">
        <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
          <strong className="block text-base text-[#2E2448] mb-1 font-serif-display">
            1. Trato digno y humanizado en salud
          </strong>
          <p className="text-xs leading-relaxed text-[#2E2448]/80">
            Obliga a los establecimientos de salud públicos (Minsa, EsSalud, Fuerzas Armadas) y privados (clínicas) a brindar atención médica con empatía, informando con claridad y respetando los tiempos de la familia.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
          <strong className="block text-base text-[#2E2448] mb-1 font-serif-display">
            2. Habitación separada de maternidad general
          </strong>
          <p className="text-xs leading-relaxed text-[#2E2448]/80">
            Dispone que la madre no comparta habitación con otras madres con bebés recién nacidos vivos para proteger su salud mental y bienestar emocional.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
          <strong className="block text-base text-[#2E2448] mb-1 font-serif-display">
            3. Registro simbólico ante RENIEC
          </strong>
          <p className="text-xs leading-relaxed text-[#2E2448]/80">
            Permite la inscripción voluntaria de los bebés fallecidos antes de nacer con su nombre y apellidos elegidos por sus padres, otorgando reconocimiento simbólico a su existencia.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
          <strong className="block text-base text-[#2E2448] mb-1 font-serif-display">
            4. 15 de octubre: Día Nacional de Concientización
          </strong>
          <p className="text-xs leading-relaxed text-[#2E2448]/80">
            Institucionalizado para realizar acciones de sensibilización en todo el país, rompiendo el tabú social del duelo perinatal.
          </p>
        </div>

        <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
          <strong className="block text-base text-[#2E2448] mb-1 font-serif-display">
            5. Apoyo en salud mental y licencias
          </strong>
          <p className="text-xs leading-relaxed text-[#2E2448]/80">
            Acompañamiento psicológico continuo e información sobre las licencias laborales de maternidad y paternidad estipuladas por la legislación peruana.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#2E2448]/15 flex justify-end">
        <a
          href="https://www.instagram.com/circulodeapoyoperu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E2448] text-white text-xs font-semibold hover:brightness-110"
        >
          <span>¿Vulneraron tus derechos? Escríbenos</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

/* 4. How To Accompany Modal */
const HowToAccompanyContent: React.FC<{ onClose: () => void }> = () => {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D97A8E]">
          Para Familiares, Amigos y Entorno
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Cómo acompañar a alguien que perdió a su bebé
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          El duelo no necesita ser "arreglado". Necesita ser sostenido con presencia, respeto y escucha sincera.
        </p>
      </div>

      <div className="space-y-5 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200">
            <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
              <CheckCircle2 size={18} className="text-emerald-700" />
              <span>Frases que abrazan</span>
            </h4>
            <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed list-disc list-inside">
              <li>"Lamento mucho la partida de [Nombre del bebé]."</li>
              <li>"Aquí estoy para ti, incluso si solo quieres estar en silencio."</li>
              <li>"¿Quieres contarme sobre tu bebé? Me encantaría escuchar."</li>
              <li>"Tus sentimientos son totalmente válidos."</li>
              <li>"Siempre serás su mamá / papá."</li>
            </ul>
          </div>

          <div className="bg-rose-50/80 p-4 rounded-2xl border border-rose-200">
            <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-1.5">
              <AlertCircle size={18} className="text-rose-700" />
              <span>Frases que duelen (evitar)</span>
            </h4>
            <ul className="space-y-2 text-xs text-rose-950 leading-relaxed list-disc list-inside">
              <li>"Eres joven, ya tendrás otro."</li>
              <li>"Por algo pasan las cosas / Dios sabe por qué."</li>
              <li>"Al menos no llegaste a conocerlo tanto."</li>
              <li>"Tienes que ser fuerte por tus otros hijos."</li>
              <li>"El tiempo lo cura todo."</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-[#2E2448]/10">
          <h4 className="font-bold text-[#2E2448] mb-1">
            Ayuda práctica tangible
          </h4>
          <p className="text-xs text-[#2E2448]/85 leading-relaxed">
            En lugar de preguntar genéricamente "¿en qué te ayudo?", ofrece acciones concretas:
            "Voy a dejarles comida lista para el almuerzo hoy a las 1pm", "Puedo llevar a los hermanitos al parque una hora", o "Me encargo de hacer las compras de víveres si me mandas la lista".
          </p>
        </div>
      </div>
    </div>
  );
};

/* 5. Add Tribute Modal */
const AddTributeContent: React.FC<{ onClose: () => void; onSuccess: () => void }> = ({ onSuccess }) => {
  const [babyName, setBabyName] = useState('');
  const [dateOrMonth, setDateOrMonth] = useState('');
  const [message, setMessage] = useState('');
  const [parentsName, setParentsName] = useState('');
  const [symbol, setSymbol] = useState<Tribute['symbol']>('mariposa');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!babyName.trim() || !message.trim()) return;

    const newTribute: Tribute = {
      id: `t-${Date.now()}`,
      babyName: babyName.trim(),
      dateOrMonth: dateOrMonth.trim() || 'Siempre en memoria',
      message: message.trim(),
      parentsName: parentsName.trim() || 'Familia en amor',
      symbol,
      candlesCount: 1,
      timestamp: Date.now(),
    };

    try {
      const saved = localStorage.getItem('cad_peru_tributes');
      const tributesList: Tribute[] = saved ? JSON.parse(saved) : [];
      tributesList.unshift(newTribute);
      localStorage.setItem('cad_peru_tributes', JSON.stringify(tributesList));
    } catch {
      // fallback
    }

    onSuccess();
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#A893D1]">
          Muro de Memoria y Amor Eterno
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Quiero que nombren a mi bebé
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Nombrar a nuestros bebés es reconocer su vida, su lugar en el árbol familiar y el amor que nunca terminará.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Nombre de tu bebé *
            </label>
            <input
              required
              type="text"
              placeholder="Ej. Mateo Andrés / Nuestra lucecita"
              value={babyName}
              onChange={(e) => setBabyName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Mes o fecha de recuerdo
            </label>
            <input
              type="text"
              placeholder="Ej. Octubre 2024 / Nacido al cielo en mayo"
              value={dateOrMonth}
              onChange={(e) => setDateOrMonth(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-[#2E2448] mb-1">
            Palabras o dedicatoria de amor *
          </label>
          <textarea
            required
            rows={3}
            placeholder="Escribe el mensaje que quisieras dedicarle a tu bebé..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Nombre de mamá, papá o familia
            </label>
            <input
              type="text"
              placeholder="Ej. Mamá Valeria y Papá Roberto"
              value={parentsName}
              onChange={(e) => setParentsName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Símbolo para su recuerdo
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[
                { id: 'mariposa', label: 'Mariposa', icon: <ButterflyIcon size={24} /> },
                { id: 'estrella', label: 'Estrella', icon: <StarIcon size={24} /> },
                { id: 'corazon', label: 'Corazón', icon: <HeartIcon size={24} /> },
                { id: 'flor', label: 'Flor', icon: <FlowerIcon size={24} /> },
                { id: 'vela', label: 'Vela', icon: <CandleIcon size={20} lit /> },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSymbol(item.id as Tribute['symbol'])}
                  className={`p-2 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                    symbol === item.id
                      ? 'bg-[#2E2448] text-white ring-2 ring-[#D97A8E]'
                      : 'bg-white hover:bg-[#F1DDE0] text-[#2E2448] border border-[#2E2448]/15'
                  }`}
                  title={item.label}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-[10px] mt-1 font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-3">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full font-bold text-base bg-[#2E2448] text-white hover:brightness-110 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Publicar homenaje en el muro</span>
            <span className="text-lg leading-none" aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

/* 6. Memory Box Modal */
const MemoryBoxContent: React.FC<{ onClose: () => void }> = () => {
  const [requested, setRequested] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D97A8E]">
          Cajitas de Recuerdo · CAD Perú
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Cajitas de Recuerdo <span aria-hidden="true">🦋🌸</span>
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Un regalo tangible de amor y memoria para familias que despiden a sus bebés en clínicas y hospitales.
        </p>
      </div>

      <div className="space-y-4 text-sm text-[#2E2448]/90">
        <div className="bg-white/80 p-5 rounded-2xl border border-[#2E2448]/10">
          <h4 className="font-bold text-[#2E2448] mb-2 flex items-center gap-2">
            <Gift className="text-[#D97A8E]" size={20} />
            ¿Qué contiene una Cajita de Recuerdo?
          </h4>
          <ul className="text-xs leading-relaxed space-y-1.5 list-disc list-inside text-[#2E2448]/85">
            <li>Mantita de algodón tejida a mano con amor por voluntarias.</li>
            <li>Almohadilla de tinta hipoalergénica para toma de huellas de manitos y pies.</li>
            <li>Tarjeta conmemorativa de nacimiento y despedida.</li>
            <li>Frasquito de cristal con lazo para guardar un mechoncito de cabello.</li>
            <li>Vela de cera aromática para encender en fechas significativas.</li>
            <li>Folleto de primeros pasos y contacto directo con el Círculo de Apoyo.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
            <strong className="block text-sm text-[#2E2448] mb-1">
              ¿Acabas de perder a tu bebé o estás en el hospital?
            </strong>
            <p className="text-xs text-[#2E2448]/80 mb-3">
              Podemos entregarte o enviarte una cajita de recuerdo sin ningún costo.
            </p>
            <button
              onClick={() => setRequested(true)}
              className="w-full py-2 px-3 rounded-full bg-[#F2A07B] text-[#2E2448] text-xs font-bold hover:brightness-105 cursor-pointer"
            >
              {requested ? '✓ Solicitud en proceso' : 'Solicitar una cajita'}
            </button>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-[#2E2448]/10">
            <strong className="block text-sm text-[#2E2448] mb-1">
              ¿Quieres donar o patrocinar cajitas?
            </strong>
            <p className="text-xs text-[#2E2448]/80 mb-3">
              Cada cajita se financia gracias a donaciones voluntarias de familias solidarias.
            </p>
            <a
              href="https://linktr.ee/circulodeapoyoperu"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 px-3 rounded-full bg-[#4A3A6E] text-white text-xs font-bold hover:brightness-105"
            >
              Donar materiales o patrocinar
            </a>
          </div>
        </div>

        {requested && (
          <div className="p-4 rounded-xl bg-emerald-50 text-emerald-900 text-xs border border-emerald-200">
            Te hemos contactado mentalmente con nuestro equipo de voluntarias. También puedes escribirnos con urgencia al DM de Instagram <strong>@circulodeapoyoperu</strong>.
          </div>
        )}
      </div>
    </div>
  );
};

/* 7. Health Professionals Modal */
const ProfessionalsContent: React.FC<{ onClose: () => void }> = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#4A6FA5]">
          Humanización del Duelo en Salud
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Profesionales de la Salud
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Capacitaciones, charlas y talleres vivenciales para obstetras, ginecólogos, neonatólogos, enfermeras y personal de admisión en el Perú.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white/90 p-6 rounded-2xl text-center border border-emerald-200">
          <CheckCircle2 className="mx-auto text-emerald-600 mb-3" size={40} />
          <h4 className="font-serif-display text-xl font-bold text-[#2E2448] mb-2">
            Solicitud enviada con éxito
          </h4>
          <p className="text-sm text-[#2E2448]/80">
            Nos pondremos en contacto con tu institución médica para coordinar fechas y temarios del taller.
          </p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Nombre de la institución o centro de salud
            </label>
            <input
              required
              type="text"
              placeholder="Ej. Hospital Nacional / Clínica / Colegio de Obstetras"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                Persona de contacto y cargo
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Dra. María Ramos - Jefa de Obstetricia"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#2E2448] mb-1">
                Correo electrónico o WhatsApp
              </label>
              <input
                required
                type="text"
                placeholder="contacto@hospital.gob.pe / +51 ..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Modalidad de interés
            </label>
            <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]">
              <option>Taller presencial de sensibilización y Ley Estrella</option>
              <option>Charla virtual para equipo médico multidisciplinario</option>
              <option>Capacitación en protocolo de entrega de Cajitas de Recuerdo</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full font-bold text-base bg-[#4A3A6E] text-white hover:bg-[#2E2448] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Send size={17} />
              <span>Solicitar charla o capacitación</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

/* 8. Donate Modal */
const DonateContent: React.FC<{ onClose: () => void }> = () => {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#F2A07B] bg-[#2E2448] px-3 py-1 rounded-full">
          Sostenibilidad y Voluntariado
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-3">
          Donaciones y Alianzas
        </h3>
        <p className="text-sm text-[#2E2448]/85 mt-2">
          CAD Perú es una organización ciudadana sin fines de lucro. Tu apoyo permite elaborar cajitas de recuerdo, imprimir guías de derechos y sostener los grupos de contención gratuitos.
        </p>
      </div>

      <div className="space-y-4 text-sm">
        <div className="bg-white/90 p-5 rounded-2xl border border-[#2E2448]/15">
          <h4 className="font-bold text-[#2E2448] text-base mb-3 flex items-center gap-2">
            <span>Canales directos en Perú</span>
          </h4>
          <div className="space-y-2.5 text-sm text-[#2E2448]">
            <div className="p-3 bg-[#F8EDE6] rounded-xl flex items-center justify-between">
              <div>
                <strong className="block text-xs uppercase text-[#D97A8E]">Yape / Plin</strong>
                <span className="font-mono font-bold text-base">Disponible vía enlace oficial</span>
              </div>
              <span className="text-xs text-[#2E2448]/70">Perú</span>
            </div>

            <div className="p-3 bg-[#F8EDE6] rounded-xl flex items-center justify-between">
              <div>
                <strong className="block text-xs uppercase text-[#4A6FA5]">Linktree Oficial</strong>
                <span className="text-xs">Detalles bancarios y campañas de recaudación</span>
              </div>
              <a
                href="https://linktr.ee/circulodeapoyoperu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#2E2448] text-white text-xs font-semibold hover:brightness-110"
              >
                Abrir Linktree
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#DCD2EE]/50 p-4 rounded-xl border border-[#A893D1]/40">
          <strong className="block text-[#2E2448] font-bold text-sm mb-1">
            Alianzas y Voluntariado
          </strong>
          <p className="text-xs text-[#2E2448]/85 leading-relaxed">
            ¿Eres psicóloga perinatal, abogada o tejedora? ¿Quieres ser voluntaria en los encuentros? Escríbenos directamente a través de nuestro Instagram <strong>@circulodeapoyoperu</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

/* 9. Contact Modal */
const ContactContent: React.FC<{ onClose: () => void }> = () => {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#D97A8E]">
          Estamos para ti
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#2E2448] font-normal mt-1">
          Escríbenos
        </h3>
        <p className="text-sm text-[#2E2448]/80 mt-2">
          Te leemos con total respeto y discreción.
        </p>
      </div>

      {sent ? (
        <div className="bg-white/90 p-6 rounded-2xl text-center border border-emerald-200">
          <CheckCircle2 className="mx-auto text-emerald-600 mb-3" size={40} />
          <h4 className="font-serif-display text-xl font-bold text-[#2E2448] mb-2">
            Mensaje recibido
          </h4>
          <p className="text-sm text-[#2E2448]/80">
            Gracias por escribirnos. Te responderemos lo más pronto posible.
          </p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Tu nombre o cómo prefieres que te llamemos
            </label>
            <input
              required
              type="text"
              placeholder="Tu nombre"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              Correo o WhatsApp para responderte
            </label>
            <input
              required
              type="text"
              placeholder="ejemplo@correo.com o +51 ..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E2448] mb-1">
              ¿En qué podemos acompañarte?
            </label>
            <textarea
              required
              rows={4}
              placeholder="Escribe lo que sientes o la consulta que tengas..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2E2448]/20 focus:outline-none focus:ring-2 focus:ring-[#A893D1]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full font-bold text-base bg-[#F2A07B] text-[#2E2448] hover:brightness-105 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Send size={17} />
              <span>Enviar mensaje al Círculo</span>
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 pt-4 border-t border-[#2E2448]/15 flex items-center justify-between text-xs">
        <a
          href="https://www.instagram.com/circulodeapoyoperu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-[#2E2448] hover:underline"
        >
          <Instagram size={15} />
          <span>Instagram @circulodeapoyoperu</span>
        </a>

        <span className="text-[#2E2448]/70">Línea Minsa 113 opción 5</span>
      </div>
    </div>
  );
};
