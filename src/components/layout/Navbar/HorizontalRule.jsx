export default function HorizontalRule() {
  return (
    <div className="hidden lg:block" style={{ width: "100%", zIndex: 1 }}>
      <div
        className="h-1"
        style={{
          width: "calc(100% + 2rem)",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
      />
    </div>
  );
}
