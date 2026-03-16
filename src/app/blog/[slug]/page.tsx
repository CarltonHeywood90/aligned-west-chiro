import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Article not found.</div>;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-clinic-gold text-xs uppercase tracking-widest font-bold mb-8 block hover:underline">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">{data.title}</h1>
          <p className="text-clinic-gray italic">{data.date}</p>
        </header>

        {/* This is a simple way to render content. 
            For full MDX support (components inside MDX), 
            you'll eventually want to use 'next-mdx-remote' or 'mdx-components' */}
        <div className="prose prose-slate lg:prose-lg max-w-none text-clinic-gray whitespace-pre-line">
          {content}
        </div>
      </div>
    </article>
  );
}