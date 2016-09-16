import Backbone from 'backbone';
import AllTheTasksView from 'views/allTheTasks';
import ratedTaskView from 'views/ratedTask';
import AddATaskView from 'views/addTask';
import TasksCollection from 'collections/tasks';
import 'styles/styles.scss';
import $ from 'jquery';

var dummyData = [
    {
        name : 'Do homework',
        score : 1
    },
    {
        name : 'Eat Chips',
        score : 2
    },
    {
        name : 'Feed Cat',
        score : 3
    }
];

 var tasksCollection = new TasksCollection(dummyData);

$(function() {
  new AllTheTasksView({
     el : $('.js-all-the-tasks-outer'),
     collection : tasksCollection
  });

  var highestRatedView = new ratedTaskView({
      el : $('.js-highest-rated-task'),
      collection : tasksCollection,
      firstIndex: true
  });

  var lowestRatedView = new ratedTaskView({
      el : $('.js-lowest-rated-task'),
      collection : tasksCollection,
      firstIndex: false
  });

  new AddATaskView({
      el : $('.js-add-task'),
      collection : tasksCollection
  });

});
