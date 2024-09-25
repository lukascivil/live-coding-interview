// Packages
import axios from "axios";
import { useEffect } from "react";

/**
 * Challenge 4 (CRUD + DOM Manipulation + form + API + Typescript)
 *
 * The user should see the list and interact with it.
 *
 * (1) User should be able to List the todos.
 * - GET /todos
 * (2) User should be able to create a new todo.
 * - POST /todos
 * (3) User should be able to update a todo.
 * - PUT /todos/1
 * (4) User should be able to delete a todo.
 * - DELETE /posts/1
 * (5) Implement optimistic updates
 * (6) Implement pagination strategy (client side).
 * - GET /todos?_start=10&_end=20 | GET /todos?_page=1&_per_page=25
 * (7) Use all TypeScript system resources.
 * (*) Tell about the pagination strategy e how it would be implemented in front in case of.
 *   - Finite list.
 *   - Infinite list
 *
 *  The API running at http://localhost:3001/todos is a simple CRUD API that should.
 *  The API has the following structure:
 *    id: number;
 *    title: string;
 *    description: string;
 *    completed: boolean;
 */
const Challenge4 = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Challenge 4</h1>
    </div>
  );
};

export default Challenge4;
