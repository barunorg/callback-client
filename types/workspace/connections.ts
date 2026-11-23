export type Integration = {
  key: string;
  glyph: string;
  color: string;
  name: string;
  tag: string;
  description: string;
  unlocks: string[];
  footnote?: string;
  isConnected: boolean;
};
