import { Link } from 'react-router-dom';
import { PageHero } from '@/components/page-hero';
import { allBlogPosts } from '@/data/blog-posts';
import { Button } from '@/components/ui/button';

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Blog"
        subtitle="Inspiración, consejos y reflexiones sobre el arte de crear invitaciones personalizadas"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 md:gap-16">
            {allBlogPosts.map((post) => (
              <article
                key={post.id}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center group"
              >
                {/* Image */}
                <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-body-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time>{post.date}</time>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-title-1 font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  {post.subtitle && (
                    <p className="text-body-lg text-foreground/80">
                      {post.subtitle}
                    </p>
                  )}

                  <Button asChild variant="outline">
                    <Link to={`/blog/${post.id}`}>Leer más →</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
