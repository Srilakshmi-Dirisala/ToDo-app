const Task = require('../models/taskModel');

// Create Task
exports.createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const task = await Task.create({
            user: req.user.id,
            title,
            description,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User's Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const task = await Task.findById(id);

        if (!task || task.user.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Task not found or unauthorized' });
        }

        task.title = title || task.title;
        task.description = description || task.description;

        const updatedTask = await task.save();

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task || task.user.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Task not found or unauthorized' });
        }

        await task.remove();

        res.status(200).json({ message: 'Task removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
