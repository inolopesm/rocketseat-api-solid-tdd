import { StudentRepository } from '../../src/application/repositories/student-repository'
import { Student } from '../../src/domain/entities/student'

export class InMemoryStudentRepository implements StudentRepository {
  items: Student[] = []

  async findOne(id: string): Promise<Student | null> {
    const student = this.items.find((item) => id === item.id)
    return student ?? null
  }
}
