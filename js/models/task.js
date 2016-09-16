import { Model } from 'backbone';

class Task extends Model {
    defaults() {
        return {
            name: '',
            score: 0
        };
    }
}

export default Task;
