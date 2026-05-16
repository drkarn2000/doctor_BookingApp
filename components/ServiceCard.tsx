type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_80px_rgba(3,166,136,0.12)]">
      <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </article>
  );
}
