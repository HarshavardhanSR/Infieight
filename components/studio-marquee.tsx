import { services } from "@/components/service-data";

type StudioMarqueeProps = {
  className?: string;
  message: string;
  tone?: "ink" | "mist" | "lilac";
};

export function StudioMarquee({
  className = "",
  message,
  tone = "ink",
}: StudioMarqueeProps) {
  const classes = ["studio-marquee", `studio-marquee-${tone}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      aria-label={`INFIEIGHT services: ${message}`}
      className={classes}
      tabIndex={0}
    >
      <span className="studio-marquee-message">{message}</span>
      <div className="studio-marquee-window" aria-hidden="true">
        <div className="studio-marquee-track">
          {[0, 1, 2].map((copy) => (
            <span className="studio-marquee-group" key={copy}>
              {services.map((service) => (
                <span className="studio-marquee-item" key={service.slug}>
                  {service.title}
                  <span className="studio-marquee-mark">✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
