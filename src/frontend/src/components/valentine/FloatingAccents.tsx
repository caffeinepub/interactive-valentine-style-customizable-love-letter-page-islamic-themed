import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function FloatingAccents() {
  const { isReducedMotion } = useReducedMotion();

  if (isReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-slow opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        >
          <img
            src="/assets/generated/accent-icons.dim_512x512.png"
            alt=""
            className="w-8 h-8 md:w-12 md:h-12"
            style={{
              objectFit: 'cover',
              objectPosition: `${(i % 3) * 33.33}% ${Math.floor(i / 3) * 50}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
