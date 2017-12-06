export class Post {
  id: number;
  created_at: Date;
  title: string;
  content: string;
  image: string;

    constructor(id: number, title: string, content: string, created_at: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }

}
