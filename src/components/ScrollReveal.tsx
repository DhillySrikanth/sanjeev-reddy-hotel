import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className || ""} ${styles["scroll-reveal"]} ${visible ? styles.visible : styles.hidden} ${styles[direction]}`}
      data-visible={visible}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
