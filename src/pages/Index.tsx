import { Canvas } from '@react-three/fiber'
import { KinectScene } from '@/components/kinect-scene'
import { Leva } from 'leva'
import { useState } from 'react'
import Icon from '@/components/ui/icon'

const courses = [
  { icon: 'Bot', label: 'Робототехника', age: '6–12 лет' },
  { icon: 'Code2', label: 'Программирование', age: '10–17 лет' },
  { icon: 'Cpu', label: 'Электроника', age: '12–17 лет' },
]

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 500],
          fov: 50,
          near: 1,
          far: 10000
        }}
        gl={{ alpha: false }}
        scene={{ background: null }}
      >
        <KinectScene />
      </Canvas>
      <Leva collapsed={true} hidden={true} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
            <Icon name="Bot" size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">RoboCode</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#courses" className="hover:text-white transition-colors">Курсы</a>
          <a href="#about" className="hover:text-white transition-colors">О школе</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Записаться
        </button>
      </header>

      {/* Hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">Школа будущего</p>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center leading-tight mb-4 drop-shadow-lg">
          Программируем<br />
          <span className="text-orange-400">роботов</span>
        </h1>
        <p className="text-white/60 text-lg text-center max-w-md mb-8">
          Учим детей и подростков создавать умные устройства, писать код и мыслить как инженеры
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="pointer-events-auto bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-orange-500/30 hover:scale-105"
        >
          Попробовать бесплатно
        </button>
      </div>

      {/* Courses strip */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-4 px-4">
        {courses.map((c) => (
          <div
            key={c.label}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/80 flex items-center justify-center">
              <Icon name={c.icon} size={16} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm">{c.label}</div>
              <div className="text-white/50 text-xs">{c.age}</div>
            </div>
          </div>
        ))}
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
            <p className="text-white/50 text-sm mb-6">Оставьте заявку — мы свяжемся с вами</p>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/30 mb-3 outline-none focus:border-orange-500 transition-colors"
              placeholder="Ваше имя"
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/30 mb-6 outline-none focus:border-orange-500 transition-colors"
              placeholder="Телефон или e-mail"
            />
            <button className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl transition-colors">
              Отправить заявку
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
