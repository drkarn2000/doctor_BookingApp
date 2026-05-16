type DoctorCardProps = {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
  consultations: number;
};

export default function DoctorCard({ name, specialty, experience, image, rating, consultations }: DoctorCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_30px_80px_rgba(34,197,94,0.12)]">
      <div className="relative overflow-hidden bg-slate-100 h-64">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <p className="text-lg font-semibold text-slate-950">{name}</p>
          <p className="text-sm text-cyan-500 font-medium">{specialty}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="rounded-3xl bg-slate-50 p-3">
            <p className="text-slate-600">{experience} Experience</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-3">
            <p className="text-slate-600">⭐ {rating.toFixed(1)}/5</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">{consultations}+ consultations completed</p>
        <button className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Book Consultation
        </button>
      </div>
    </article>
  );
}
