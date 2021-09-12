const { Link } = require("react-router-dom")

const NotFound = ()=> {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot b found</p>
            <Link to="/">Back to Home...</Link>
        </div>
    )
}

export default NotFound