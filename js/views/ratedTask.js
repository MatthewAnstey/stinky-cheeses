import { View } from 'backbone';

class ratedTask extends View {
    ratedTemplate() {
        return '<strong>Priority <%- score %> :</strong>  <%- name %> ';
    }
    initialize(options) {
        this.firstIndex = options.firstIndex;

        this.listenTo(this.collection, 'update', this.render);
        this.listenTo(this.collection, 'change', this.render);

        this.render();
    }
    render() {
        this.renderTask();
    }
    renderTask() {
        if (this.collection.length === 0) {
            this.$el.html('');
        }

        this.collection.sort();

        if (this.firstIndex) {
            this.model = this.collection.at(this.collection.length - 1);
        } else {
            this.model = this.collection.at(0);
        }
        this.renderRow();
    }
    renderRow() {
        if (!this.model || !this.model.get('score')) {
            return;
        }

        var rated = _.template(this.ratedTemplate());

        this.$el.html(rated(this.model.toJSON()));
    }
}

export default ratedTask;
