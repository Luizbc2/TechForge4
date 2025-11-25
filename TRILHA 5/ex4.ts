type VoteRecord = Record<string, number>

export abstract class VoteSystem {
  protected votes: VoteRecord = {}

  protected registerVote(candidate: string): void {
    const name = candidate.trim()
    if (!name) return
    this.votes[name] = (this.votes[name] ?? 0) + 1
  }

  abstract voteFor(candidate: string): void
  abstract getResults(): object
}

export class Election extends VoteSystem {
  voteFor(candidate: string): void {
    this.registerVote(candidate)
  }

  getResults(): VoteRecord {
    return { ...this.votes }
  }
}

export class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    this.registerVote(candidate)
  }

  getResults(): string[] {
    const pairs = Object.keys(this.votes).map(name => [name, this.votes[name]] as [string, number])
    return pairs.sort((a, b) => b[1] - a[1]).map(([name]) => name)
  }
}
