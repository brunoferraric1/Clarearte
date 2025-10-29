// Define ContentBlock type locally since @/types/blog doesn't exist
type ContentBlock =
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'numberedList'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' }

interface RichContentProps {
  content: ContentBlock[];
  className?: string;
}

export function RichContent({ content, className = '' }: RichContentProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return renderHeading(block, index);
          case 'paragraph':
            return renderParagraph(block, index);
          case 'image':
            return renderImage(block, index);
          case 'bulletList':
            return renderBulletList(block, index);
          case 'numberedList':
            return renderNumberedList(block, index);
          case 'quote':
            return renderQuote(block, index);
          case 'divider':
            return renderDivider(index);
          default:
            return null;
        }
      })}
    </div>
  );
}

function renderHeading(block: Extract<ContentBlock, { type: 'heading' }>, key: number) {
  const headingClasses = {
    1: 'text-display-1 font-serif mb-8',
    2: 'text-title-1 font-serif mb-6 mt-12',
    3: 'text-title-2 font-serif mb-4 mt-8',
    4: 'text-title-3 font-serif mb-3 mt-6',
    5: 'text-body-xl font-semibold mb-3 mt-6',
    6: 'text-body-lg font-semibold mb-2 mt-4',
  };

  const Component = `h${block.level}` as keyof JSX.IntrinsicElements;

  return (
    <Component key={key} className={headingClasses[block.level]}>
      {block.text}
    </Component>
  );
}

function renderParagraph(block: Extract<ContentBlock, { type: 'paragraph' }>, key: number) {
  return (
    <p key={key} className="text-body-lg mb-6 leading-relaxed text-foreground/90">
      {block.text}
    </p>
  );
}

function renderImage(block: Extract<ContentBlock, { type: 'image' }>, key: number) {
  return (
    <figure key={key} className="my-12">
      <img
        src={block.src}
        alt={block.alt}
        className="w-full rounded-lg shadow-lg"
      />
      {block.caption && (
        <figcaption className="text-body-sm text-muted-foreground text-center mt-4 italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function renderBulletList(block: Extract<ContentBlock, { type: 'bulletList' }>, key: number) {
  return (
    <ul key={key} className="my-8 space-y-3 list-disc pl-6 marker:text-primary">
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex} className="text-body-lg text-foreground/90 pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

function renderNumberedList(block: Extract<ContentBlock, { type: 'numberedList' }>, key: number) {
  return (
    <ol key={key} className="my-8 space-y-3 list-decimal pl-6 marker:text-primary marker:font-semibold">
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex} className="text-body-lg text-foreground/90 pl-2">
          {item}
        </li>
      ))}
    </ol>
  );
}

function renderQuote(block: Extract<ContentBlock, { type: 'quote' }>, key: number) {
  return (
    <blockquote
      key={key}
      className="my-12 border-l-4 border-primary pl-6 py-4 bg-muted/20 rounded-r-lg"
    >
      <p className="text-body-xl font-serif italic text-foreground mb-2">
        "{block.text}"
      </p>
      {block.author && (
        <cite className="text-body text-muted-foreground not-italic">
          — {block.author}
        </cite>
      )}
    </blockquote>
  );
}

function renderDivider(key: number) {
  return (
    <hr
      key={key}
      className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"
    />
  );
}
