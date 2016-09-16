import _ from 'underscore';
import { Collection } from 'backbone';
import Task from 'models/task';

class Tasks extends Collection {
    constructor(models, options) {
        this.model = Task;
        this.comparator = 'score';
        super(models, options);
    }
}

export default Tasks;