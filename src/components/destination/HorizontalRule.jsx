export default function HorizontalRule() {
  return (
    <hr
      style={{
        height: "1px",
        backgroundColor: "hsl(var(--color-white) / 0.25)",
      }}
      className="mb-12 lg:mb-20"
    />
  );
}
