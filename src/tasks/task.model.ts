export interface Task {
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
}

export enum TaskStatus {
    DONE = 'DONE',
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
}
