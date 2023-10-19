
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center mt-10">
        <h1 className="text-4xl">404 Error!</h1>
        <Link to="/" className="btn btn-ghost bg-slate-500 mt-2">Go Back</Link>
      </div>
    );
};

export default Error;