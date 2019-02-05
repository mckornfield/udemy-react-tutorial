import Main from './Main'
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return {
        posts: state
    };
}

// this.props.posts

const App = connect(mapStateToProps)(Main);

export default App;