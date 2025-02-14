import { GetAllTasksResponse } from "@/@clean/shared/domain/types/task_responses";
import { Task } from "../../shared/domain/entities/task";

export interface ITaskRepository {
    create(task: Task): Promise<Task>;
    get(task_id: string): Promise<Task | null>;
    getAll(): Promise<GetAllTasksResponse>;
    update(task_id: string, task: Task): Promise<Task>;
    delete(task_id: string): Promise<string>;
    taskByDay(day: string): Promise<Task>;
    getDisabledTasks(): Promise<Task[]>;
    loadTaskOpenAI(task_massage: string): Promise<Task>;
}