export class Post{
  created_at : Date;
  title: string;
  content: string;
  image: string;

    constructor(title: string, content: string, created_at: Date){
        this.title = title;
        this.content = content;
        this.created_at = created_at;
    }

}
