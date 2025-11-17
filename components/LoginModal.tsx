
import React from 'react';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const KeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4h2v-2h2v-2H8a6 6 0 1110 0zM8.088 12.414l1.414-1.414a4 4 0 10-5.656-5.656 4 4 0 005.656 5.656z" clipRule="evenodd" />
    </svg>
);


const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-300 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
        >
            <div 
                className="bg-light-theme-card dark:bg-dark-blue-800 text-light-theme-text dark:text-light-text p-10 rounded-xl shadow-xl relative w-full max-w-md overflow-hidden border border-light-theme-border dark:border-dark-blue-700"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-light-theme-text-secondary dark:text-gray-400 hover:text-light-theme-text dark:hover:text-white transition-colors z-10"
                    aria-label="Cerrar modal"
                >
                    <CloseIcon />
                </button>
                
                <div className="text-center mb-8">
                    <h2 id="login-modal-title" className="text-2xl font-bold text-light-theme-text dark:text-light-text-heading">
                        Ingresar al Campus
                    </h2>
                     <p className="text-light-theme-text-secondary dark:text-light-text-secondary mt-1">Accedé a tu cuenta</p>
                </div>
                
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-base font-medium text-light-theme-text-secondary dark:text-light-text mb-2">Usuario</label>
                        <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <UserIcon className="text-light-theme-text-secondary dark:text-light-text-secondary" />
                            </div>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                className="w-full text-base bg-light-theme-bg dark:bg-dark-blue-700 text-light-theme-text dark:text-light-text rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent border border-light-theme-border dark:border-dark-blue-700"
                                placeholder="Tu usuario"
                                aria-label="Nombre de usuario"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-base font-medium text-light-theme-text-secondary dark:text-light-text mb-2">Clave</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <KeyIcon className="text-light-theme-text-secondary dark:text-light-text-secondary" />
                            </div>
                             <input 
                                type="password" 
                                id="password"
                                name="password"
                                className="w-full text-base bg-light-theme-bg dark:bg-dark-blue-700 text-light-theme-text dark:text-light-text rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent border border-light-theme-border dark:border-dark-blue-700"
                                placeholder="Tu contraseña"
                                aria-label="Contraseña"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-light-theme-border dark:border-dark-blue-700 text-accent focus:ring-accent bg-light-theme-bg dark:bg-dark-blue-700" />
                            <label htmlFor="remember-me" className="ml-2 block text-base text-light-theme-text-secondary dark:text-light-text">Recordarme</label>
                        </div>
                         <a href="#" className="text-base text-accent hover:text-accent-dark transition-colors hover:underline">¿Olvidaste tu clave?</a>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-accent text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
