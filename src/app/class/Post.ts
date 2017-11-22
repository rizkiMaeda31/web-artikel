export class Post{
  id: number;
  created_at : string;
  title: string;
  content: string;
  image: string;

    constructor(id: number, title: string, content: string, created_at: string){
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }

}
