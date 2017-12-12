export class Post {
  id: number;
  created_at: Date;
  title: string;
  content: string;
  category: any;
  view: number;
  published_at: Date;
    constructor(id: number, title: string, content: string, category: string, view: number, created_at: Date = new Date()
        , published_at: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.view = view;
        this.created_at = created_at;
        this.published_at = published_at;
    }

}
