import { useParams } from 'react-router-dom';
import { RichContent } from '@/components/rich-content';
import { allBlogPosts } from '@/data/blog-posts';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = allBlogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-2 font-serif mb-4">Artículo no encontrado</h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            Lo sentimos, el artículo que buscas no existe.
          </p>
          <Button asChild>
            <a href="/">Volver al inicio</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
            <h1 className="text-display-1 font-serif text-foreground mb-4">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-title-3 text-foreground/80 mb-6">
                {post.subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 text-body text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <RichContent content={post.content} />

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-muted">
            <Button variant="outline" asChild>
              <a href="/">← Volver al inicio</a>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
