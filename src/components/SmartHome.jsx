import { Light } from "./Light";

export function SmartHome() {

  return (
    <section
      style={{
        fontSize: "5rem",
        display: "grid",
        gridTemplateColumns: "min-content min-content",
        gap: "3px",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      <Light id={0} />
      <Light id={1} />
      <Light id={2} />
    </section>
  );
}
