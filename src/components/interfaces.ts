export interface DragItem {
    type: string;
    id: string;
    top: number;
    left: number;
}
export interface ToolPos {
    top: number;
    left: number;
    title: string;
}
export interface CarProps {
    color: number;
    clean: boolean;
    tirefill: boolean;
    window: boolean;
}
export interface Car {
    color: number;
    tint: number;
    tire: number;
    background: number;
    effects: Record<string, ToolPos>;
}
