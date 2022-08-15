/// <reference types="vite/client" />

/* eslint-disable no-unused-vars */
declare type PropsWithClassName<T> = T & {
    className?: string;
};


declare type FCProps<T> = PropsWithClassName<PropsWithChildren<T>>;

declare type Callback = () => void;

declare type Nullable<T> = T | null;

declare type Component<P = any> = (props?: P) => JSX.Element;

/* eslint-enable no-unused-vars */
