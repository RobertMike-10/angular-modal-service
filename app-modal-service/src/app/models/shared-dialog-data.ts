import { SharedControl } from './shared-control';

export interface SharedDialogData {
  title?: string;
  content?: string;
  controls: SharedControl[];
  hideTitleDivider?: boolean;
  titleIcon?: string;
  iconColor?: string;
}
