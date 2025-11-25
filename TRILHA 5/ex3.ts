export abstract class FavoriteManager {
  protected items: string[] = []

  abstract addFavorite(item: string): void
  abstract getFavorites(): string[]
}

export class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
  if (this.items.indexOf(item) === -1) {
      this.items.push(item)
      this.items.sort((a, b) => a.localeCompare(b))
    }
  }

  getFavorites(): string[] {
    return [...this.items]
  }
}

export class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    this.items = [item, ...this.items.filter(existing => existing !== item)]
  }

  getFavorites(): string[] {
    return [...this.items]
  }
}
