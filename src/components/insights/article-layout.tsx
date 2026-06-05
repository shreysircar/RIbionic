import ArticleHeader from "./article-header";

export default function ArticleLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <ArticleHeader title={title} />

      <article className="mx-auto max-w-4xl px-6 pb-24">
        {children}
      </article>
    </main>
  );
}