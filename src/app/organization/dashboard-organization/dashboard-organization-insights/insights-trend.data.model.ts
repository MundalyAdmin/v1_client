export class InsightsTrendData {
  score!: number;
  month!: string;
  year!: string;

  get date() {
    const test = `${this.month.substring(0, 3)} ${this.year}`;
    return test;
  }
}
