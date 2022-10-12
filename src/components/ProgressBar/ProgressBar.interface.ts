export interface IProgressBar {
  max?: number;
  onChange: (e: any) => void;
  value: number;
  step?: number;
}
