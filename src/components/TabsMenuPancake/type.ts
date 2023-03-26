export interface TabMenuProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  children: React.ReactElement[];
  fullWidth?: boolean;
  gap?: string;
  isColorInverse?: boolean;
}
