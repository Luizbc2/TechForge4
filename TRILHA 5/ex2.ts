export type InventoryRecord = Record<string, number>

export abstract class Inventory {
  protected items: InventoryRecord = {}

  protected setQuantity(item: string, quantity: number): void {
    if (quantity <= 0) {
      delete this.items[item]
    } else {
      this.items[item] = quantity
    }
  }

  abstract addItem(item: string, quantity: number): void
  abstract removeItem(item: string): void
  abstract getInventory(): InventoryRecord
}

export class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (quantity <= 0) return
    const current = this.items[item] ?? 0
    this.setQuantity(item, current + quantity)
  }

  removeItem(item: string): void {
    delete this.items[item]
  }

  getInventory(): InventoryRecord {
    return { ...this.items }
  }
}

export class StoreInventory extends Inventory {
  private static readonly LIMIT = 10

  addItem(item: string, quantity: number): void {
    if (quantity <= 0) return
    const current = this.items[item] ?? 0
    const updated = Math.min(StoreInventory.LIMIT, current + quantity)
    this.setQuantity(item, updated)
  }

  removeItem(item: string): void {
    delete this.items[item]
  }

  getInventory(): InventoryRecord {
    return { ...this.items }
  }
}
