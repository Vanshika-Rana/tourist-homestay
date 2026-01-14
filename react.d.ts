/// <reference types="react" />

declare module 'react' {
  export type FC<P = {}> = (props: P) => JSX.Element | null;
  export type ReactNode = JSX.Element | string | number | boolean | null | undefined;
  
  // Hooks
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useContext<T>(context: React.Context<T>): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  
  // Context
  export function createContext<T>(defaultValue: T): Context<T>;
  export interface Context<T> {
    Provider: FC<{ value: T; children?: ReactNode }>;
    Consumer: FC<{ children: (value: T) => ReactNode }>;
  }
  
  // Event types
  export interface ChangeEvent<T = HTMLInputElement> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }
  
  export interface FormEvent<T = HTMLFormElement> extends SyntheticEvent<T> {
    target: EventTarget;
    currentTarget: EventTarget & T;
  }
  
  export interface SyntheticEvent<T = Element, E = Event> {
    currentTarget: EventTarget & T;
    target: EventTarget;
    preventDefault(): void;
    stopPropagation(): void;
    nativeEvent: E;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    timeStamp: number;
    type: string;
  }
  
  // Event handler types
  export type FormEventHandler<T = HTMLFormElement> = (event: FormEvent<T>) => void;
  export type ChangeEventHandler<T = HTMLInputElement> = (event: ChangeEvent<T>) => void;
  
  // Component types
  export interface Component<P = {}, S = {}> {
    props: P;
    state: S;
  }
  
  export interface ReactElement<P = any, T = any> {
    type: T;
    props: P;
    key: string | null;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface Element extends React.ReactElement<any, any> {}
}

declare namespace React {
  export type FC<P = {}> = (props: P) => JSX.Element | null;
  export type ReactNode = JSX.Element | string | number | boolean | null | undefined;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useContext<T>(context: Context<T>): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function createContext<T>(defaultValue: T): Context<T>;
  export interface Context<T> {
    Provider: FC<{ value: T; children?: ReactNode }>;
    Consumer: FC<{ children: (value: T) => ReactNode }>;
  }
}

