import { ITaskRepository } from "@/@clean/modules/interfaces/task_repo_interface";
import { Task } from "../../domain/entities/task";
import { GetAllTasksResponse } from "../../domain/types/task_responses";

export class TaskRepositoryMock implements ITaskRepository {
    loadTaskOpenAI(task_massage: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    create(task: Task): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    get(task_id: string): Promise<Task | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<GetAllTasksResponse> {
        throw new Error("Method not implemented.");
    }
    update(task_id: string, task: Task): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    delete(task_id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateStatus(task_id: string, status: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    taskByDay(day: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    getDisabledTasks(): Promise<Task[]> {
        throw new Error("Method not implemented.");
    }
}