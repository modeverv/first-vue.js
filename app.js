var app = new Vue({
  el: '#app',
  data: {
    message: 'Hellow Vue'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'Learn JavaScript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "keee",
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    gList: [{
        id: 0,
        text: 'V1'
      },
      {
        id: 1,
        text: 'V2'
      },
      {
        id: 2,
        text: 'V3'
      },
    ]
  },
  created: function () {
    console.log(this.gList);
  }
});

var data = {
  a: 1
};
var vm1 = new Vue({
  el: "#vm1",
  data: {
    message: "Hello"
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});

var vm2 = new Vue({
  el: "#vm2",
  data: {
    firstName: "a1",
    lastName: "b1",
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newVal) {
        var names = newVal.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});

var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: '',
    answer: 'I can\'t give you a answer',
    isActive: false,
    hasError: false,
    error: null,
    styleObject: {
      color: 'blue',
      fontSize: '20px',
    },
  },
  watch: {
    question: function (newQ, oldQ) {
      this.isActive = false;
      this.answer = 'Waiting for you to stop typing';
      this.debouncedGetAnswer();
    },
  },
  computed: {
    classObject: function () {
      hoge = {
        active: this.isActive,
        'text-danger': true
      }
      console.log(hoge)
      return hoge;
    }
  },
  created: function () {
    console.log('created');
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = '?で終われ';
        return;
      }
      this.answer = 'Thinking...';
      var vm = this;
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
          vm.isActive = true
        })
        .catch(function (err) {
          vm.answer = 'Error' + err;
        });

    }
  }
});

var vm3 = new Vue({
  el: '#vm3',
  data: {},
  
})
