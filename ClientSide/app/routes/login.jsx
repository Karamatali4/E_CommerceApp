// app/routes/user.login.jsx

import { Form } from "@remix-run/react";

export default function UserLogin() {
  return (
    <div style={{ padding: 20 }}>
      <h1>User Login</h1>
      <Form method="post">
        <div>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
        </div>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
