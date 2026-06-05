export default function ArticleHeader({
  title,
}: {
  title: string;
}) {
  return (
    <section className="relative">
      {/* Navbar visibility area */}
<div className="h-32 bg-gradient-to-b from-[#4a9eb3] to-white" />

      <div className="mx-auto max-w-4xl px-6 pb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          {title}
        </h1>
      </div>
    </section>
  );
}