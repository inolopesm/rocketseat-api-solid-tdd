import { ChallengeRepository } from '../../src/application/repositories/challenge-repository'
import { Challenge } from '../../src/domain/entities/challenge'

export class InMemoryChallengeRepository implements ChallengeRepository {
  items: Challenge[] = []

  async findOne(id: string): Promise<Challenge | null> {
    const challenge = this.items.find((item) => id === item.id)
    return challenge ?? null
  }
}
