import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Star, MessageCircle, MapPin, Zap, Lightbulb, Wrench, Shield, Zap as ZapIcon, Lock, Award } from "lucide-react";
import { useState } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  iconImage?: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const reviews: Review[] = [
  {
    name: "Carlos Mendes",
    rating: 5,
    comment: "Atendimento rápido e serviço impecável! O Lupercio chegou em menos de 30 minutos e resolveu o problema com disjuntor que estava dando defeito. Muito profissional, recomendo!",
  },
  {
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente trabalho na instalação de iluminação externa. Ficou perfeito, muito bem acabado. Voltaria a contratar com certeza!",
  },
  {
    name: "João Santos",
    rating: 5,
    comment: "Eletricista de confiança! Fez a manutenção completa da casa e tudo funcionando perfeitamente. Preço justo e qualidade garantida.",
  },
  {
    name: "Ana Costa",
    rating: 5,
    comment: "Instalação do portão automático saiu perfeita! Muito atencioso, explicou tudo direitinho. Super recomendo para quem precisa de um profissional sério.",
  },
  {
    name: "Pedro Oliveira",
    rating: 5,
    comment: "Melhor eletricista! Resolveu todos os problemas da minha loja em um dia. Profissionalismo de primeira!",
  },
  {
    name: "Fernanda Rocha",
    rating: 5,
    comment: "Muito satisfeita com o serviço! Fez a instalação elétrica do meu comércio com perfeição. Voltarei a chamar com certeza!",
  },
  {
    name: "Roberto Alves",
    rating: 5,
    comment: "Profissional competente e educado. Resolveu o problema rápido e sem complicações. Já recomendei para vários amigos!",
  },
];

const services: Service[] = [
  {
    title: "Instalações Comerciais e Residenciais",
    description: "Realizamos instalações elétricas completas para residências e estabelecimentos comerciais. Desde projetos pequenos até grandes obras, garantimos qualidade e segurança.",
    icon: <Zap size={48} className="text-accent" />,
  },
  {
    title: "Manutenção Residencial",
    description: "Mantemos sua residência segura e funcional com serviços de manutenção preventiva e corretiva. Verificamos toda a instalação elétrica e identificamos problemas potenciais.",
    icon: <Wrench size={48} className="text-accent" />,
  },
  {
    title: "Troca de Disjuntores",
    description: "Disjuntores com defeito são perigosos! Oferecemos serviço rápido de diagnóstico e substituição com equipamentos certificados.",
    icon: <Shield size={48} className="text-accent" />,
    iconImage: "/images/icon-breaker.png",
  },
  {
    title: "Iluminação Interna e Externa",
    description: "Transforme seus ambientes com soluções modernas de iluminação. Instalamos luminárias, spots e sistemas que combinam funcionalidade e estética.",
    icon: <Lightbulb size={48} className="text-accent" />,
  },
  {
    title: "Manutenção e Instalação de Portão Automático",
    description: "Instale ou mantenha seu portão automático com segurança. Realizamos instalações completas, manutenção preventiva e reparos de motores.",
    icon: <Lock size={48} className="text-accent" />,
  },
  {
    title: "Troca de Chuveiro",
    description: "Substituição rápida e profissional de chuveiros elétricos. Instalamos modelos modernos com segurança garantida e sem complicações.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C24 6 20 10 20 14C20 17.31 21.79 20.16 24 22V28M24 6C24 6 28 10 28 14C28 17.31 26.21 20.16 24 22V28M24 28V40M20 32H28M18 36H30" stroke="#e78725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconImage: "/images/icon-shower.png",
  },
  {
    title: "Troca de Tomadas",
    description: "Substituição de tomadas antigas ou danificadas. Instalamos tomadas modernas com segurança e compatibilidade com seus aparelhos.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="24" height="28" rx="2" stroke="#e78725" strokeWidth="2"/>
        <circle cx="18" cy="18" r="1.5" fill="#e78725"/>
        <circle cx="30" cy="18" r="1.5" fill="#e78725"/>
        <rect x="22" y="26" width="4" height="8" rx="1" fill="#e78725"/>
      </svg>
    ),
  },
  {
    title: "Troca de Fiação",
    description: "Substituição completa de fiação elétrica antiga ou danificada. Utilizamos materiais de qualidade premium com conformidade às normas técnicas.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24H40M14 18L8 24L14 30M34 18L40 24L34 30M20 12V36M28 12V36" stroke="#e78725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Instalação de Ventilador de Teto",
    description: "Instalação profissional de ventiladores de teto com segurança e eficiência. Deixamos seu ambiente mais fresco e confortável.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="3" fill="#e78725"/>
        <path d="M24 8V4M24 44V40M40 24H44M4 24H8" stroke="#e78725" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 8C20 12 18 16 18 24C18 32 20 36 24 40M24 8C28 12 30 16 30 24C30 32 28 36 24 40" stroke="#e78725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const values: Value[] = [
  {
    title: "Qualidade",
    description: "Utilizamos materiais de primeira qualidade e seguimos rigorosamente as normas técnicas vigentes em todos os nossos serviços.",
    icon: <Award size={40} className="text-accent" />,
  },
  {
    title: "Agilidade",
    description: "Atendimento rápido e eficiente. Estamos sempre prontos para resolver seus problemas elétricos com rapidez.",
    icon: <ZapIcon size={40} className="text-accent" />,
  },
  {
    title: "Confiabilidade",
    description: "Profissionalismo e transparência em cada projeto. Você pode contar conosco para soluções seguras e duradouras.",
    icon: <Shield size={40} className="text-accent" />,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-accent text-accent" : "text-gray-300"}
      />
    ))}
  </div>
);

const whatsappLink = `https://wa.me/5512992537253?text=Olá%20Lupercio,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20elétricos.`;

export default function Home() {
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Construir mensagem para WhatsApp
    const message = `Olá Lupercio!\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nMensagem: ${formData.message}\n\nPor favor, me envie um orçamento.`;
    const whatsappUrl = `https://wa.me/5512992537253?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setFormSubmitted(true);
    
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-12 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-black">{APP_TITLE}</h1>
            </div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-orange-600 text-white gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-24 overflow-hidden">
        {/* Background Electrician Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/hero-background.png"
            alt="Electrician working"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Precisando de um eletricista residencial com urgência?
            </h2>
            <p className="text-xl text-gray-300 mb-4 flex items-center gap-2">
              <Zap size={24} className="text-accent flex-shrink-0" />
              Estamos sempre prontos para atender você!
            </p>
            <p className="text-gray-400 mb-8">
              Atendimento rápido e profissional. Resolvemos seu problema elétrico com agilidade e qualidade garantida.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-orange-600 text-white gap-2 text-lg px-8">
                <Zap size={24} />
                Falar agora pelo WhatsApp
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/hero-eletricista.jpg"
              alt="Eletricista trabalhando"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Serviços
            </h3>
            <p className="text-gray-600 text-lg">
              Oferecemos soluções completas para suas necessidades elétricas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200 flex flex-col">
                {service.image && (
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col items-center text-center flex-grow">
                  {!service.image && !service.iconImage && (
                    <div className="mb-6 p-4 bg-orange-50 rounded-full">
                      {service.icon}
                    </div>
                  )}
                  {service.image && !service.iconImage && (
                    <div className="mb-4 p-3 bg-orange-50 rounded-full">
                      {service.icon}
                    </div>
                  )}
                  {service.iconImage && (
                    <div className="mb-6 w-20 h-20 flex items-center justify-center">
                      <img src={service.iconImage} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-black mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-accent text-accent hover:bg-orange-50">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-gray-600 text-lg">
              Avaliações reais de clientes satisfeitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.comment}"
                </p>
                <p className="font-semibold text-black">
                  {review.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-20">
        <div className="container text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para resolver seu problema elétrico?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco agora mesmo. Atendimento rápido e profissional!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-orange-600 text-white gap-2 text-lg px-8">
              <Zap size={24} />
              Chamar no WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Solicite seu Orçamento
            </h3>
            <p className="text-gray-600 text-lg">
              Preencha o formulário abaixo e entraremos em contato em breve
            </p>
          </div>

          <Card className="p-8 border-gray-200">
            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-semibold">✓ Formulário enviado com sucesso! Você será redirecionado para o WhatsApp.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(12) 99999-9999"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Serviço *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-orange-100"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Instalações Comerciais e Residenciais">Instalações Comerciais e Residenciais</option>
                    <option value="Manutenção Residencial">Manutenção Residencial</option>
                    <option value="Troca de Disjuntores">Troca de Disjuntores</option>
                    <option value="Iluminação Interna e Externa">Iluminação Interna e Externa</option>
                    <option value="Manutenção e Instalação de Portão Automático">Manutenção e Instalação de Portão Automático</option>
                    <option value="Troca de Chuveiro">Troca de Chuveiro</option>
                    <option value="Troca de Tomadas">Troca de Tomadas</option>
                    <option value="Troca de Fiação">Troca de Fiação</option>
                    <option value="Instalação de Ventilador de Teto">Instalação de Ventilador de Teto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu problema ou necessidade elétrica..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-orange-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                Solicitar Orçamento via WhatsApp
              </button>
            </form>
          </Card>
        </div>
      </section>

      {/* Missão e Valores Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossa Missão e Valores
            </h3>
            <p className="text-gray-600 text-lg">
              Compromisso com excelência e satisfação do cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
              <h4 className="text-2xl font-bold text-black mb-4">Nossa Missão</h4>
              <p className="text-gray-700 leading-relaxed">
                Fornecer soluções elétricas de alta qualidade, seguras e confiáveis para residências e empresas. Nosso objetivo é ser o eletricista de confiança que você pode chamar a qualquer hora, oferecendo atendimento rápido, profissional e com preços justos.
              </p>
            </Card>

            <Card className="p-8 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
              <h4 className="text-2xl font-bold text-black mb-4">Nossos Valores</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Qualidade:</strong> Materiais premium e trabalho impecável</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Agilidade:</strong> Resposta rápida e eficiente</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Confiabilidade:</strong> Profissionalismo e transparência</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Segurança:</strong> Conformidade com normas técnicas</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h5 className="text-xl font-bold text-black mb-3">{value.title}</h5>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-auto" />
                {APP_TITLE}
              </h4>
              <p className="text-gray-400">
                Atendimento rápido e profissional. Resolvemos seus problemas elétricos com agilidade e qualidade.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-accent" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                    +55 12 99253-7253
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Redes Sociais</h5>
              <div className="flex gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.6 5.2c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-7.2 0c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.6 1.6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1.6c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4z" />
                  </svg>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.146l-.064.04-4.064.767.78-2.853c-.64-1.392-1.007-2.996-1.007-4.523 0-5.523 4.582-10.015 10.169-10.015 2.701 0 5.232 1.053 7.134 2.963 1.903 1.909 2.956 4.451 2.956 7.146 0 5.538-4.582 10.015-10.169 10.015zm5.846-3.641c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 {APP_TITLE}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div
          className="relative"
          onMouseEnter={() => setShowWhatsappTooltip(true)}
          onMouseLeave={() => setShowWhatsappTooltip(false)}
        >
          {/* Tooltip */}
          {showWhatsappTooltip && (
            <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 min-w-max border border-gray-200 mb-2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={APP_LOGO} alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-accent" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">{APP_TITLE}</p>
                  <p className="text-xs text-green-600 font-medium">Online</p>
                </div>
              </div>
            </div>
          )}

          {/* Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce overflow-hidden">
              <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-full h-full object-cover" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
