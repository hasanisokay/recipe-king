import React from "react";
import App from "../blog/Doc";

const Blog = () => {
  return (
    <div className='mx-4 mt-4'>
      <div className="text-right">
        {
          <App></App>
        }
      </div>
      <div>
        <h1 className='text-xl font-semibold mb-2'>Difference between controlled and uncontrolled components</h1>
        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
      </div>
      <div className='my-8'>
        <h1 className='text-xl font-semibold mb-2'>How to validate React props using PropTypes</h1>
        <p>React components use a special property called <code>propTypes</code> to set up type checking. Component.propTypes is used for props validation in react component. </p>
      </div>
      <div className='mb-8'>
        <h1 className='text-xl font-semibold mb-2'>Difference between nodejs and express js.</h1>
        <p> Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture. Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. <br />
          Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize application's functionality with middle ware and routing. Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
        </p>
      </div>
      <div className="mb-6">
        <h1 className='text-xl font-semibold mb-2'>Custom hook and its necessity</h1>
        <p>A custom Hook is a JavaScript function whose name starts with <code>use</code> and that may call other Hooks. If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. </p>
      </div>

    </div>
  );
};

export default Blog;