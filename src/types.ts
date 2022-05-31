export type expense = { text: string; value: number };

export type recordsProps = {
  records: expense[];
  handleDelete: (text: string) => void;
};
