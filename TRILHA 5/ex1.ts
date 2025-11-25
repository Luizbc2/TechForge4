type TaskType = 'project' | 'daily'

interface TaskEntry {
  type: TaskType
  description: string
}

export abstract class TaskManager {
  protected entries: TaskEntry[] = []

  protected hasEntry(type: TaskType, description: string): boolean {
    return this.entries.some(entry => entry.type === type && entry.description === description)
  }

  protected storeEntry(entry: TaskEntry): void {
    if (!this.hasEntry(entry.type, entry.description)) {
      this.entries.push(entry)
    }
  }

  protected listEntries(type: TaskType): string[] {
    return this.entries.filter(entry => entry.type === type).map(entry => entry.description)
  }

  abstract addTask(task: string): void
  abstract listTasks(): string[]
}

export class Project extends TaskManager {
  addTask(task: string): void {
    this.storeEntry({ type: 'project', description: task })
  }

  listTasks(): string[] {
    return this.listEntries('project')
  }
}

export class DailyTasks extends TaskManager {
  addTask(task: string): void {
    this.storeEntry({ type: 'daily', description: task })
  }

  listTasks(): string[] {
    return this.listEntries('daily')
  }
}
