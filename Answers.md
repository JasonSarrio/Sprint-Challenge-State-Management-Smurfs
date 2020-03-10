1. What problem does the context API help solve?

Context API solves the problem with passing data from the parent component only to specific components without prop drilling. It is a way to give props to only specific components that need it while managing it at the higher levels without having to pass it through every component.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


Actions- Actions are events that send an object with information about what the reducer should do. It has a type key that tells it which action to take and an optional payload with data that can be used to update state or be displayed.
Reducers- Reducers is a place to store all of your different state options, like 'finite state machine' where you have a list of possible forks that state can be and transition to. It is also a place where state is stored and managed for the entire application.
Store - The Redux Store is basically a storage for your state that, when wrapped around your components, allows the data within the store to become availble to all the components within it. It stores your state variables.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more 'global' to your app and should be managed at the top level of your application. This could be state data that would be used by many components throughout your application. Component state is more 'local' state that is managed and stored within a single component. It usually only pertains to the component it resides in.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


Redux Thunk is middleware. It allows developers to add functions and make changes after an action is dispatched and before the data hits the reducer phase and goes to the redux store. It allows us to create Async functionality and do things like make API calls.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I don't know if I have a favorite. I do like Context API because it feels a lot simpler. But redux seems to have a lot of power and can do a lot more. So I think I would lean more towards Redux. The capabilities of Redux seem to go further but I may be wrong.