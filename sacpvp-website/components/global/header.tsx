import styles from "./header.module.css";

interface HeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Header({
  title,
  subtitle,
  backgroundImage,
}: HeaderProps) {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `url(${backgroundImage || "/placeholder.svg?height=300&width=1200&text=Header+Background"})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
