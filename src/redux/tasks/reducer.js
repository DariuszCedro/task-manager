const tasksInitialState = [
    {id: 0, text: "Pierwsze przykładowe zadanie", completed: true},
    {id: 1, text: "Drugie przykładowe zadanie", completed: true},
    {id: 2, text: "Trzecie przykładowe zadanie", completed: false},
    {id: 3, text: "Czwarte przykładowe zadanie", completed: false},
    {id: 4, text: "Piąte przykładowe zadanie", completed: false},
  ]


export const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
      case "tasks/addTask":
        return [...state, action.payload];
      case "tasks/deleteTask":
        return state.filter(task => task.id !== action.payload);
      case "tasks/toggleCompleted":
        return state.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        });
      default:
        return state;
    }
  };