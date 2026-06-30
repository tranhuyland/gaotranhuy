import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
