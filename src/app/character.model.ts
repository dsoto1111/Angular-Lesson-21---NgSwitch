export class Character {
  public name: string;
  public age: number;
  public archetype: string;
  public strengths: string[];

  constructor(name: string,
              age: number,
              archetype: string,
              strengths: string[]) {
      this.name = name;
      this.age = age;
      this.archetype = archetype;
      this.strengths = strengths;
  }
}
