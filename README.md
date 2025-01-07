# 📱 React Native with Redux Toolkit & Redux Observable

A React Native app showcasing state management using **Redux Toolkit** and reactive programming with **Redux Observable**. Built to handle complex asynchronous workflows with **Epics**, this app demonstrates how to create scalable, maintainable, and reactive architectures.

---

## 🚀 Features

- **State Management with Redux Toolkit**: Simplified, powerful, and scalable state management.
- **Reactive Programming with Redux Observable**: Handle side effects and async logic elegantly using **RxJS**.
- **React Native Goodness**: Cross-platform support with intuitive design and performance.

---

## 🛠️ Tech Stack

- **React Native**: Build cross-platform apps.
- **Redux Toolkit**: Simplifies Redux development.
- **Redux Observable**: Manage async workflows with reactive streams.
- **RxJS**: Power reactive programming.
- **TypeScript** *(optional)*: Strongly typed development (if used).

---

## 📖 Usage

1. **Setting Up Redux Store**  
   The store is configured with `configureStore` from Redux Toolkit, integrating `redux-observable` as middleware.

2. **Creating Epics**  
   Write epics in `/src/redux/epics` to manage async actions:
   ```typescript
   import { ofType } from 'redux-observable';
   import { mapTo } from 'rxjs/operators';
   import { exampleAction } from '../slices/exampleSlice';

   const exampleEpic = (action$) =>
     action$.pipe(
       ofType(exampleAction.type),
       mapTo({ type: 'EXAMPLE_SUCCESS' })
     );

   export default exampleEpic;
   ```

3. **Reactive Streams with RxJS**  
   Handle async workflows, like fetching data or real-time updates, with RxJS operators.

4. **Connecting to UI**  
   Use `useSelector` and `useDispatch` to connect your React Native components to the store.

---

## 🛠️ Customization

- **Add New Epics**: Extend functionality by adding more epics and registering them in `rootEpic`.
- **Add New Slices**: Use Redux Toolkit to create new slices for state management.

---

## 📜 License

This project is licensed under the MIT License.
