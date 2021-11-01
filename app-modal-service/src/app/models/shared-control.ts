export interface SharedControl {
  id: number;
  label: string;
  action: string;
  type: "raised" | "normal" | "stroke";
  hide?: boolean;
  disabled?: boolean;
  icon?: string;
  color: "primary" | "accent" | "warn";
  isLoading?: boolean;
}
