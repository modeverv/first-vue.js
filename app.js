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
  data: {
    type: "A",
    loginType: "username"
  },
});

var vm4 = new Vue({
  el: "#vm4",
  data: {
    parentMessage: 'parent',
    items: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      },
    ]
  }
});

var vm5 = new Vue({
  el: "#vm5",
  data: {
    object: {
      firstName: "firstName",
      lastName: "lastName",
      age: 30,
    },
    items: [{
        id: 1,
        mes: "m1"
      },
      {
        id: 2,
        mes: "m2"
      },
    ],
    numbers: (function () {
      var ar = [];
      for (var i = 0, l = 10; i < l; i++) {
        ar.push(i);
      }
      return ar;
    })()
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 == 0;
      });
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (n) {
        return n % 2 == 0
      })
    }
  }
})
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var aa = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [{
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
});

var e_example1 = new Vue({
  el: "#example-1",
  data: {
    counter: 0
  }
});

var e_example2 = new Vue({
  el: "#example-2",
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + " " + (new Date()));
      if (event) {
        alert(event.target.tagName);
      }
    },
    clear: function (e) {
      alert("ctrl + c");
    }
  }
});

var vm_i1 = new Vue({
  el: "#vm_i1",
  data: {
    message1: "",
    message2: "",
    checked: true,
    checkedNames: [],
    picked: "Two",
    selected: "",
    selected2: [],
    selected3: "",
    options: [{
        text: 'One',
        value: 'A'
      },
      {
        text: 'Two',
        value: 'B'
      },
      {
        text: 'Three',
        value: 'C'
      },
    ],
  }
})
