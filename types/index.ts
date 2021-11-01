export type InputProps = {
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  autoFocus: boolean;
};

export type Event = {
  date: string;
  id: string;
  int: number;
};

export type Data = {
  events: Event[];
};
