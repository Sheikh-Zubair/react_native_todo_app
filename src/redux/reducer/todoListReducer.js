const todoListInitialState = {
  listHeading: null,
  listItem: [{title: null, isDone: false}],
};

export default (state = {...todoListInitialState}, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
