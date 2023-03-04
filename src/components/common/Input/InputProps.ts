export type InputFocusEvent = FocusEvent & { currentTarget: HTMLInputElement; target: Element;}
export type InputInputEvent = InputEvent & { currentTarget: HTMLInputElement; target: Element;};

export interface InputProps {
  onFocus?: (e: InputFocusEvent) => unknown;
  onInput?: (e: InputInputEvent) => unknown;
}
