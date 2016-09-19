import { View } from 'backbone';
import TaskRow from 'views/allTheTasks/rowTask';

class allTheTasks extends View {
    events() {
        return {
            'click .js-remove-task': 'removeTask',
            'click .js-prioritise-list': 'priortiseList',
            'click .js-toggle-priority': 'togglePriority'
        }
    }
    initialize() {
        this.priorityToggle = 0;

        this.listenTo(this.collection, 'update', this.appendTasks);
        this.render();
    }
    render() {
        this.appendTasks();
    }
    removeTask() {
        this.model.destroy();
    }
    priortiseList() {
        this.collection.sort();
        this.collection.trigger('update');
    }
    togglePriority() {
        if (this.priorityToggle) {
            this.collection.comparator = "score";
            this.priorityToggle = 0;
        } else {
            this.collection.comparator = function(model) {
                return -model.get("score");
            };
            this.priorityToggle = 1;
        }
        this.collection.sort();
        this.collection.trigger('update');
    }
    appendTasks() {
        this.$el.find('.js-all-the-tasks').html('');
        
        this.collection.each(function(task) {
            var taskRow = new TaskRow({
                model: task
        }).render().$el;

        this.$el.find('.js-all-the-tasks').prepend(taskRow);

        }, this);
    }
}

export default allTheTasks;
