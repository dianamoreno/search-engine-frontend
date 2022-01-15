export interface SearchTerm {
  text: string;
}

export interface FormProps {
  placeHolder: string;
  buttonText: string;
  onSubmitHandler: (value: string) => void;
}

export interface CardProps {
  id: number;
  uri: string;
  title: string;
  short_desc: string;
}
