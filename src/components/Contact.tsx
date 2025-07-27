import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import contatoBg from '../assets/contato.png'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventType: 'reserva'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      eventType: 'reserva'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${contatoBg})`,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contato
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Entre em contato conosco para reservas, eventos ou qualquer dúvida. 
            Estamos aqui para tornar sua noite inesquecível!
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Envie sua Mensagem</h2>
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="(81) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Solicitação</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                >
                  <option value="reserva">Reserva de Mesa</option>
                  <option value="evento">Evento Privado</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="informacoes">Informações Gerais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-vertical"
                  placeholder="Conte-nos mais sobre sua solicitação..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitted ? 'Enviado!' : 'Enviar Mensagem'}</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <ContactItem icon={<MapPin />} title="Endereço" content={[
                  'Avenida conselheiro rosa e silva, 172',
                  'Espinheiro - Recife/PE',
                  'CEP: 52020-220'
                ]} gradient="from-blue-500 to-purple-500" />

                <ContactItem icon={<Phone />} title="Telefone" content={['+55 (81) 98811-5840']} gradient="from-purple-500 to-pink-500" />

                <ContactItem icon={<Mail />} title="E-mail" content={['princyrpiress@gmail.com']} gradient="from-pink-500 to-blue-800" />

                <ContactItem icon={<Clock />} title="Funcionamento" content={[
                  'Quinta a Sábado: 22:00 às 06:00',
                  'Domingo: Fechado',
                  'Segunda a Quarta: Eventos Privados'
                ]} gradient="from-blue-800 via-purple-500 to-pink-500" />
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Dicas Importantes</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="text-purple-400 mr-2">&#8226;</span> Reservas antecipadas garantem mesa garantida</li>
                <li className="flex items-start"><span className="text-pink-400 mr-2">&#8226;</span> Dress code: traje social ou esporte fino</li>
                <li className="flex items-start"><span className="text-blue-800 mr-2">&#8226;</span> Entrada permitida apenas para maiores de 18 anos</li>
                <li className="flex items-start"><span className="text-purple-400 mr-2">&#8226;</span> Consulte nossa agenda de eventos especiais</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
  gradient: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, gradient }) => (
  <div className="flex items-start space-x-4">
    <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-300 whitespace-pre-line">{content.join('\n')}</p>
    </div>
  </div>
);

export default Contact;