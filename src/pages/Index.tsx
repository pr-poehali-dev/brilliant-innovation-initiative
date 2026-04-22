import { Canvas } from '@react-three/fiber'
import { KinectScene } from '@/components/kinect-scene'
import { Leva } from 'leva'
import { useState } from 'react'
import Icon from '@/components/ui/icon'

const courses = [
  { icon: 'Bot', label: 'Робототехника LEGO WeDo 2.0', age: '5+ лет', color: 'from-green-400/20 to-green-400/5' },
  { icon: 'Bot', label: 'Робототехника LEGO Mindstorms EV3', age: '10+ лет', color: 'from-green-400/20 to-green-400/5' },
  { icon: 'Zap', label: 'Электроника', age: '8+ лет', color: 'from-purple-400/20 to-purple-400/5' },
  { icon: 'Cpu', label: 'Схемотехника Arduino', age: '10+ лет', color: 'from-purple-400/20 to-purple-400/5' },
  { icon: 'Code2', label: 'Программирование Scratch', age: '8+ лет', color: 'from-green-400/20 to-green-400/5' },
  { icon: 'Smartphone', label: 'Программирование AppInventor', age: '10+ лет', color: 'from-purple-400/20 to-purple-400/5' },
  { icon: 'Gamepad2', label: 'Программирование Roblox Studio', age: '10+ лет', color: 'from-green-400/20 to-green-400/5' },
  { icon: 'Terminal', label: 'Программирование Python', age: '10+ лет', color: 'from-purple-400/20 to-purple-400/5' },
]

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#0a0a14]">
      <Canvas
        camera={{ position: [0, 0, 500], fov: 50, near: 1, far: 10000 }}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <KinectScene />
      </Canvas>
      <Leva collapsed={true} hidden={true} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-purple-400 flex items-center justify-center">
            <Icon name="GraduationCap" size={18} className="text-white" />
          </div>
          <div className="leading-none">
            <span className="text-white font-extrabold text-base tracking-tight">IT-школа</span>
            <span className="text-green-300 font-extrabold text-base tracking-tight ml-1">JUNIOR</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#courses" className="hover:text-white transition-colors">Курсы</a>
          <a href="#about" className="hover:text-white transition-colors">О школе</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-green-400 to-purple-400 hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-full transition-opacity"
        >
          Записаться
        </button>
      </header>

      {/* Hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        <p className="text-green-300/80 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Детская IT-школа</p>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center leading-tight mb-4 drop-shadow-lg">
          Технологии —<br />
          <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">детям</span>
        </h1>
        <p className="text-white/50 text-lg text-center max-w-md mb-8">
          Робототехника, электроника и программирование для детей от 5 лет
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="pointer-events-auto bg-gradient-to-r from-green-400 to-purple-400 hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-purple-500/20 hover:scale-105"
        >
          Первое занятие бесплатно
        </button>
      </div>

      {/* Courses strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 pt-4 overflow-x-auto">
        <div className="flex gap-3 w-max mx-auto">
          {courses.map((c) => (
            <div
              key={c.label}
              className={`backdrop-blur-md bg-gradient-to-b ${c.color} border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 text-white min-w-[200px]`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name={c.icon} size={15} className="text-green-200" />
              </div>
              <div>
                <div className="font-semibold text-xs leading-tight">{c.label}</div>
                <div className="text-white/40 text-xs mt-0.5">{c.age}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-[#0d0d1a] border border-white/10 rounded-3xl p-8 w-full max-w-sm text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-1">Запись на курс</h2>
            <p className="text-white/40 text-sm mb-6">Оставьте заявку — мы свяжемся с вами</p>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/30 mb-3 outline-none focus:border-green-400 transition-colors"
              placeholder="Ваше имя"
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/30 mb-6 outline-none focus:border-green-400 transition-colors"
              placeholder="Телефон или e-mail"
            />
            <button className="w-full bg-gradient-to-r from-green-400 to-purple-400 hover:opacity-90 text-white font-bold py-3 rounded-xl transition-opacity">
              Отправить заявку
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
