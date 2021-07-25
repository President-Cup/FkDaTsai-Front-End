import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesListService {

  private likesId: number[] = [];
  get likesList() {
    return this.likesId;
  }

  constructor() { }

  isLiked(id: number): boolean {
    return this.likesId.includes(id);
  }

  like(id: number): void {
    this.likesId.push(id);
  }

  dislike(id: number): void {
    this.likesId = this.likesId.filter(value => value !== id);
  }


}
