export class Post {
  id: number;
  created_at: Date;
  title: string;
  content: string;
  image: string;
  content_html: string;
  content_text: string;
  category: string;
  viewCount: number;

    constructor(id: number, title: string, content: string, created_at: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }

}
