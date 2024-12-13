// import React from 'react';
// import './404.css';

// const NotFoundPage = () => {
//   return (
//     <div className="not-found-container">
//       <h1 className="error-title">404 Not Found</h1>
//       <p className="error-message">
//         Your visited page not found. You may go home page.
//       </p>
//       <button className="back-button" onClick={() => window.location.href = '/'}>
//         Back to home page
//       </button>
//     </div>
//   );
// };

// export default NotFoundPage;
import React from 'react';
import './404.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-title">404 Not Found</h1>
      <p className="error-message">
        Your visited page not found. You may go home page.
      </p>
      <button className="back-button" onClick={() => window.location.href = '/'}>
        Back to home page
      </button>
    </div>
  );
};

export default NotFoundPage;