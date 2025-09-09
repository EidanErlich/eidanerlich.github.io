import type { ExperienceItem } from '../content/types';

interface TimelineProps {
  items: ExperienceItem[];
}

const Timeline = ({ items }: TimelineProps) => (
  <ol className="relative border-s border-black/10">
    {items.map((exp, idx) => (
      <li key={`${exp.title}-${idx}`} className="mb-10 ms-6">
        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white/80">•</span>
        <h3 className="font-semibold">
          {exp.title} — <span className="text-black/70">{exp.organization}</span>
        </h3>
        <div className="text-sm text-black/60">{exp.start} — {exp.end}</div>
        <ul className="mt-2 list-disc ps-5 text-sm text-black/80">
          {exp.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {exp.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span key={t} className="text-xs bg-white/70 border border-black/5 rounded px-2 py-0.5">{t}</span>
            ))}
          </div>
        )}
      </li>
    ))}
  </ol>
);

export default Timeline;

