import { TextInputProps, AlertButton } from "react-native";

type FieldProps = TextInputProps & {
  name: string;
};

export type AlertOptions = {
  title?: string;
  message?: string;
  // buttons
  actions: Array<{
    text: string;
    style?: AlertButton["style"];
    // It is an object that holds fields data
    onPress?: (data: Record<string, string>) => void;
  }>;
  // fields
  fields: FieldProps[];
};

export declare function AlertBox(): JSX.Element;

export declare function fire(options: AlertOptions): void;
