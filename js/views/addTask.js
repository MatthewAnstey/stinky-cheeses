import _ from 'underscore';
import $ from 'jquery';
import { View } from 'backbone';

class addTask extends View {
    events() {
        return {
            'click .js-add-a-task-btn': 'addATask'
        }
    }
    initialize() {
        this.$taskName = this.$el.find('.js-task-name');
        this.$taskScore = this.$el.find('.js-task-score');
    }
    addATask(evt) {
        evt.preventDefault();

        var name = this.$('.js-task-name').val();
        var score = this.$('.js-task-score').val();

        if ($.trim(name) === '' || $.trim(score) === '') {
            return;
        }

        this.collection.add({
            name: name,
            score: score
        });

        this.$el[0].reset();
    }
}

export default addTask;