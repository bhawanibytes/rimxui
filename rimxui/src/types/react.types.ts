export type PropsWithoutChildren<P = object> = Omit<P, "children">;

export type PropsWithRequiredChildren<P = object> =
  Required<React.PropsWithChildren> & PropsWithoutChildren<P>;

export type ProviderComponentProps<P = object> = PropsWithRequiredChildren<P>;
export type ProviderComponent<P = object> = React.FC<ProviderComponentProps<P>>;

export type SetStateActionSetter<State> = React.Dispatch<
  React.SetStateAction<State>
>;
