import { useState } from "react";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="task-input pr-12"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
        disabled={!title.trim()}
      >
        <Plus className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TaskInput;