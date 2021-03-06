import * as React from 'react';
interface IProps<T> {
    title: string;
    value: T;
    checked: boolean;
    theme: 'default' | 'emphasis';
    onClick: (value: T) => void;
}
export declare class RadioBox<T> extends React.Component<IProps<T>> {
    render(): JSX.Element;
    private onClick;
    private readonly color;
    private readonly radioColor;
    private readonly radioIcon;
}
export {};
