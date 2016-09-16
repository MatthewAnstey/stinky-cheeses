import _ from 'underscore';
import $ from 'jquery';
import { View } from 'backbone';

class addATask extends View {
    taskTemplate() {
        return '<div class="span6 mobile-grid"> <%- name %> </div>' +
            '<div class="span2 mobile-grid"><input value=" <%- score %>" class="js-edit-score edit-score"></div>' +
            '<div class="span4 mobile-grid js-remove-task"><button>Remove Task</button></div>';
    }
    templateRendered() {
        return _.template(this.taskTemplate());
    }
    events() {
        return {
            'click .js-remove-task': 'removeATask',
            'change .js-edit-score': 'updateScoreModel'
        }
    }
    initialize() {
        this.listenTo(this.model, 'change:score', this.updateScore);

        this.$taskName = this.$el.find('.js-task-name');
        this.$taskDescription = this.$el.find('.js-task-description');
        this.$taskScore = this.$el.find('.js-task-score');

        this.$el.addClass('row-fluid');
    }
    render() {
        this.$el.append(this.templateRendered()(this.model.toJSON()));

        return this;
    }
    updateScoreModel() {
        this.model.set('score', this.$('.js-edit-score').val());
    }
    updateScore() {
        this.$el.find('.js-edit-score').html(this.model.get('score'));
    }
    removeATask(evt) {
        this.model.destroy();
        this.remove();
    }
}

export default addATask;
