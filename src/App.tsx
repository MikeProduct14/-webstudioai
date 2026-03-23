/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  BrainCircuit, 
  Layers, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Smartphone, 
  Globe, 
  Cpu, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">DEVSTUDIO<span className="text-brand-accent">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-brand-accent transition-colors">Услуги</a>
          <a href="#advantages" className="hover:text-brand-accent transition-colors">Преимущества</a>
          <a href="#cases" className="hover:text-brand-accent transition-colors">Кейсы</a>
          <a href="#process" className="hover:text-brand-accent transition-colors">Процесс</a>
          <button type="button" className="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all">
            Обсудить проект
          </button>
        </div>

        <button type="button" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
          >
            <a href="#services" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Услуги</a>
            <a href="#advantages" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Преимущества</a>
            <a href="#cases" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Кейсы</a>
            <a href="#process" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Процесс</a>
            <button type="button" className="bg-brand-primary text-white px-6 py-3 rounded-xl mt-2">Обсудить проект</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Разработка с применением ИИ
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Масштабируем ваш бизнес в <span className="gradient-text">цифровой среде</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Создаем приложения, сайты и автоматизации для крепкого бизнеса. От идеи до первых клиентов и SEO-продвижения. Быстро, прозрачно, системно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Начать проект <ArrowRight size={20} />
            </a>
            <a href="#cases" className="border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors text-center">
              Наши кейсы
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-gray-100 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary">50+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Проектов</span>
            </div>
            <div className="w-px h-8 bg-gray-100 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary">10+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Лет опыта</span>
            </div>
            <div className="w-px h-8 bg-gray-100 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary">95%</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">LTV клиентов</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl animate-float border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">мониторинг_разработки</div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-widest">Статус проекта</span>
                <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-400/10 rounded">Активен</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                  <span>Прогресс разработки</span>
                  <span>85%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">ИИ-Модули</div>
                  <div className="text-white font-bold text-sm">Подключено</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">SEO-Оптимизация</div>
                  <div className="text-white font-bold text-sm">В процессе</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Анализ бизнес-требований...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-blue-500" />,
      title: "Сайты и Web-сервисы",
      desc: "От лендингов до сложных корпоративных порталов и маркетплейсов с высокой нагрузкой."
    },
    {
      icon: <Smartphone className="text-purple-500" />,
      title: "Мобильные приложения",
      desc: "iOS и Android решения для фитнес-центров, доставки еды и систем лояльности."
    },
    {
      icon: <MessageSquare className="text-green-500" />,
      title: "Чат-боты и CRM",
      desc: "Автоматизация продаж и поддержки в Telegram, WhatsApp и интеграция с вашими системами."
    },
    {
      icon: <Cpu className="text-red-500" />,
      title: "ИИ и Автоматизация",
      desc: "Внедрение нейросетей для обработки данных, генерации контента и оптимизации процессов."
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Что мы создаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Комплексные цифровые решения, которые решают конкретные задачи вашего бизнеса.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Rocket />,
      title: "Скорость разработки",
      desc: "Выстроенные командные процессы позволяют нам запускать проекты в 1.5-2 раза быстрее рынка без потери качества."
    },
    {
      icon: <BrainCircuit />,
      title: "Продуктовый подход",
      desc: "Мы не просто пишем код. Мы изучаем ваши бизнес-требования и предлагаем решения, которые приносят прибыль."
    },
    {
      icon: <Layers />,
      title: "Полный цикл (End-to-End)",
      desc: "От написания ТЗ до регистрации в поисковиках и настройки рекламы. Вам не нужно искать 5 разных подрядчиков."
    },
    {
      icon: <Eye />,
      title: "Прозрачность этапов",
      desc: "Согласовываем каждый шаг. Вы всегда знаете, на какой стадии проект и когда будет готов следующий модуль."
    }
  ];

  return (
    <section id="advantages" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Почему выбирают нас</h2>
            <div className="space-y-8">
              {advantages.map((adv, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-widest">AI Integration Case</div>
              <h3 className="text-3xl font-bold mb-6">Автоматизация для сети автосервисов</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>Умная запись через чат-бота</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>ИИ-анализ истории обслуживания</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>Автоматические напоминания в WhatsApp</span>
                </div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-1">+42%</div>
                <div className="text-sm text-gray-400">Рост повторных визитов за 3 месяца</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<any>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCase(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedCase) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [selectedCase]);

  const cases = [
    {
      id: 1,
      tag: "Фитнес-центры",
      title: "Мобильное приложение для сети 'Energy'",
      task: "Снизить нагрузку на ресепшн и повысить лояльность клиентов за счет автоматизации записи на групповые занятия.",
      solution: "Разработка нативного мобильного приложения с системой QR-пропусков, онлайн-записью и push-уведомлениями о тренировках.",
      result: "Нагрузка на администраторов снизилась на 35%, посещаемость групповых занятий выросла на 22% за счет удобной записи.",
      stats: "+22% посещаемость",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/fitness-logo/100/100"
    },
    {
      id: 2,
      tag: "Автосервисы",
      title: "CRM и Чат-бот для 'AutoMaster'",
      task: "Высокий процент неявок клиентов (No-show) и отсутствие прозрачной истории обслуживания для мастеров.",
      solution: "Интеграция CRM-системы с WhatsApp-ботом для автоматических напоминаний и личного кабинета клиента с историей ТО.",
      result: "Количество неявок сократилось на 40%, средний чек вырос на 15% за счет своевременных рекомендаций по обслуживанию.",
      stats: "-40% неявок",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/auto-logo/100/100"
    },
    {
      id: 3,
      tag: "Логистика",
      title: "Система мониторинга для 'ТрансЮг'",
      task: "Неэффективное планирование маршрутов и отсутствие контроля расхода топлива в реальном времени.",
      solution: "Разработка кастомной системы мониторинга с интеграцией GPS-трекеров и алгоритмом оптимизации маршрутов на базе ИИ.",
      result: "Расходы на топливо снизились на 18%, точность доставки в срок (On-time delivery) достигла 99.2%.",
      stats: "-18% расходы на топливо",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/logistics-logo/100/100"
    },
    {
      id: 4,
      tag: "Образование",
      title: "LMS-платформа для 'SkillUp'",
      task: "Ручная проверка домашних заданий и сложность отслеживания прогресса 500+ студентов одновременно.",
      solution: "Создание образовательной платформы с автоматизированным тестированием, системой грейдов и дашбордом для кураторов.",
      result: "Пропускная способность центра выросла в 3 раза без расширения штата администраторов.",
      stats: "x3 рост студентов",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/edu-logo/100/100"
    },
    {
      id: 5,
      tag: "Кондитерские",
      title: "Онлайн-витрина для 'Sweet Moment'",
      task: "Низкая доля онлайн-заказов и сложность приема индивидуальных заказов на торты через мессенджеры.",
      solution: "Сайт-конструктор тортов с интеграцией оплаты и Telegram-ботом для мгновенного подтверждения заказа.",
      result: "Доля онлайн-заказов выросла с 10% до 55%. Среднее время обработки заказа сократилось с 20 до 2 минут.",
      stats: "+450% онлайн-продажи",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/cake-logo/100/100"
    },
    {
      id: 6,
      tag: "B2B Сервисы",
      title: "ИИ-агенты для автоматизации продаж 'GlobalService'",
      task: "Менеджеры по продажам тратили 60% времени на квалификацию лидов и ответы на типовые вопросы, что замедляло цикл сделки.",
      solution: "Внедрение системы автономных ИИ-агентов, которые ведут первичный диалог в почте и мессенджерах, квалифицируют лидов и назначают встречи в календаре.",
      result: "Скорость ответа сократилась до 2 минут, конверсия из лида в демо-звонок выросла на 45%, высвобождено 20 часов в неделю у каждого менеджера.",
      stats: "+45% конверсия в демо",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      logo: "https://picsum.photos/seed/ai-logo/100/100"
    }
  ];

  return (
    <section id="cases" className="section-padding bg-brand-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-gray-400 max-w-xl">
              Реальные задачи, технологичные решения и измеримые результаты для лидеров рынка.
            </p>
          </motion.div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Обсудить проект <ChevronRight />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCase(c)}
              className="group cursor-pointer bg-white/5 rounded-[2.5rem] p-4 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {c.tag}
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img src={c.logo} alt="Client Logo" className="w-10 h-10 rounded-full bg-white p-1" referrerPolicy="no-referrer" />
                  <h3 className="text-lg font-bold leading-tight group-hover:text-brand-accent transition-colors">{c.title}</h3>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-brand-accent font-bold text-sm">{c.stats}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white text-brand-primary w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                    {selectedCase.tag}
                  </div>
                  <h3 className="text-3xl font-bold mb-8 leading-tight">{selectedCase.title}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Задача</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedCase.task}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Решение</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedCase.solution}</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Результат</h4>
                      <p className="text-blue-900 font-medium leading-relaxed">{selectedCase.result}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedCase(null);
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full mt-10 bg-brand-primary text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    Хочу такой же результат
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Аналитика и ТЗ", desc: "Погружаемся в ваш бизнес, прописываем требования." },
    { num: "02", title: "Прототип и Дизайн", desc: "Создаем визуальную концепцию и UX-схему." },
    { num: "03", title: "Разработка", desc: "Пишем чистый код, внедряем ИИ и автоматизации." },
    { num: "04", title: "SEO и Запуск", desc: "Оптимизируем под поиск и выводим проект в онлайн." }
  ];

  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-gray-600">Прозрачный процесс от первого звонка до первых продаж.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-8xl font-display font-black text-gray-50 absolute -top-10 -left-4 -z-10">
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-3 pt-4">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
        <p className="text-blue-100 mb-12 text-lg">
          Оставьте заявку, и мы проведем бесплатный аудит ваших текущих решений и предложим план развития.
        </p>
        
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-brand-primary"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-500">Мы свяжемся с вами в течение 30 минут.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-brand-primary grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Ваше имя</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="Иван Иванов"
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Телефон</label>
              <input 
                required
                name="phone"
                type="tel" 
                placeholder="+7 (999) 000-00-00"
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="md:col-span-2 text-left">
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">О проекте</label>
              <textarea 
                name="message"
                rows={4}
                placeholder="Расскажите кратко о вашей задаче..."
                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>
            <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Отправить заявку
            </button>
            <p className="md:col-span-2 text-xs text-gray-400">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold tracking-tighter">DEVSTUDIO<span className="text-brand-accent">AI</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Студия разработки полного цикла. Создаем системные решения для роста вашего бизнеса.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <Smartphone size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <Globe size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Услуги</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent">Разработка сайтов</a></li>
              <li><a href="#" className="hover:text-brand-accent">Мобильные приложения</a></li>
              <li><a href="#" className="hover:text-brand-accent">ИИ Автоматизация</a></li>
              <li><a href="#" className="hover:text-brand-accent">SEO Продвижение</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Отрасли</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent">Фитнес и Спорт</a></li>
              <li><a href="#" className="hover:text-brand-accent">Автосервисы</a></li>
              <li><a href="#" className="hover:text-brand-accent">Логистика</a></li>
              <li><a href="#" className="hover:text-brand-accent">Образование</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3"><Phone size={16} /> +7 (900) 000-00-00</li>
              <li className="flex items-center gap-3"><Mail size={16} /> hello@devstudio.ai</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Ростов-на-Дону / Пятигорск</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 DevStudio AI. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-600">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      <Cases />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
}
