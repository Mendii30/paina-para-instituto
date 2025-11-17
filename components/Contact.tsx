import React from 'react';

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);


const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-light-theme-bg-alt dark:bg-dark-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-light-theme-text dark:text-light-text-heading">Ponete en Contacto</h2>
          <p className="mt-4 text-lg text-light-theme-text-secondary dark:text-light-text-secondary max-w-2xl mx-auto">
            ¿Tenés preguntas? Estamos acá para ayudarte. Envianos un mensaje o visitanos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-light-theme-card dark:bg-dark-blue-900 p-8 rounded-xl shadow-lg border border-light-theme-border dark:border-transparent">
            <h3 className="text-2xl font-bold text-light-theme-text dark:text-light-text-heading mb-6">Envianos tu consulta</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-theme-text-secondary dark:text-light-text-secondary">Nombre completo</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 bg-light-theme-bg dark:bg-dark-blue-700 border border-light-theme-border dark:border-dark-blue-700 text-light-theme-text dark:text-light-text rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-theme-text-secondary dark:text-light-text-secondary">Correo electrónico</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 bg-light-theme-bg dark:bg-dark-blue-700 border border-light-theme-border dark:border-dark-blue-700 text-light-theme-text dark:text-light-text rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-theme-text-secondary dark:text-light-text-secondary">Mensaje</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 bg-light-theme-bg dark:bg-dark-blue-700 border border-light-theme-border dark:border-dark-blue-700 text-light-theme-text dark:text-light-text rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent text-white p-3 rounded-full"><MapPinIcon /></div>
                <div>
                    <h4 className="text-xl font-bold text-light-theme-text dark:text-light-text-heading">Dirección</h4>
                    <p className="text-light-theme-text-secondary dark:text-light-text">Márquez 51, Dolores, Buenos Aires (Sede Principal)</p>
                </div>
             </div>
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent text-white p-3 rounded-full"><EnvelopeIcon /></div>
                <div>
                    <h4 className="text-xl font-bold text-light-theme-text dark:text-light-text-heading">Email</h4>
                    <p className="text-light-theme-text-secondary dark:text-light-text">consultasinstituto26@gmail.com</p>
                </div>
             </div>
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-accent text-white p-3 rounded-full"><ClockIcon /></div>
                <div>
                    <h4 className="text-xl font-bold text-light-theme-text dark:text-light-text-heading">Horarios de Atención</h4>
                    <p className="text-light-theme-text-secondary dark:text-light-text">18:20 a 22:20 hs</p>
                </div>
             </div>
             <div className="h-64 w-full rounded-xl overflow-hidden shadow-lg mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.480838180374!2d-57.67800468471114!3d-36.3248889800619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9599d7504381014b%3A0x633c7bede233633!2sM%C3%A1rquez%2051%2C%20Dolores%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1722026848070" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del Instituto">
                </iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;