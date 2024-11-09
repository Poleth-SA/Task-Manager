import { Check, Trash2 } from "lucide-react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className="task-item group">
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? "bg-success border-success scale-105"
            : "border-gray-300 dark:border-gray-600 hover:border-success hover:scale-105"
        }`}
      >
        {task.completed && <Check className="w-4 h-4 text-white" />}
      </button>
      <span
        className={`flex-1 transition-all ${
          task.completed ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-all hover:rotate-12"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TaskItem;