import './App.css';
import { Layout } from './components/Layout/Layout.jsx';
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from './components/TaskForm/TaskForm.jsx';
import { TaskList } from './components/TaskList/TaskList.jsx';

function App() {

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
