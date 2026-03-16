export interface BlogPost {
    title: string;
    date: string;
    description: string;
    slug: string;
    content: string; // The raw markdown body
    image?: string;  // Optional header image
  }