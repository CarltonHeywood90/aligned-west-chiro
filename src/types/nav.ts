export type PageType = 
  | 'about' 
  | 'services' 
  | 'massageapprentice' 
  | 'blog' 
  | 'clinic' 
  | 'home';

export interface NavItem {
  text: string;
  page: PageType;
  href?: string; // Optional if you want to override the automatic path
}