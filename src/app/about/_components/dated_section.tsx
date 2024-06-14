export default function DatedSection({
  date,
  belowDate,
  title,
  subtitle,
  children,
}: {
  date: string;
  belowDate?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col gap-x-4">
        <div className="flex justify-between">
          <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
          </div>
          <div className="text-right">
            <p className="text-sm">{date}</p>
            <p className="text-xs italic">{belowDate}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
