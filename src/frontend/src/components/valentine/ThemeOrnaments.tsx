export default function ThemeOrnaments() {
  return (
    <>
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/islamic-pattern-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Ornamental frames */}
      <div
        className="fixed top-0 left-0 w-full h-48 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/ornamental-frame.dim_1600x900.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-full h-48 opacity-10 pointer-events-none rotate-180"
        style={{
          backgroundImage: 'url(/assets/generated/ornamental-frame.dim_1600x900.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
}
