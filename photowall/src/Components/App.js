import Main from './Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removePost } from '../redux/actions'
import { withRouter } from 'react-router'

function mapStateToProps(state) {
    return {
        posts: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removePost }, dispatch)
}

// this.props.posts

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;