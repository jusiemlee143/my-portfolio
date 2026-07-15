export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(#e5e5e5 1px, transparent 1px),
            linear-gradient(90deg,#e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

    </div>
  );
}