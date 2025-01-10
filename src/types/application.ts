export type Application = {
  name: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  minWidth?: number;
  minHeight?: number;
  icon: string;
  minimized: boolean;
  maximized: boolean;
  zIndex?: number;
  content: React.FC;
  id: number;
};
