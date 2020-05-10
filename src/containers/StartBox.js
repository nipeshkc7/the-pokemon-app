import { connect } from 'react-redux'
import StartBox from '../components/StartBox'
import { bindActionCreators } from 'redux'
import * as allActions from '../actions'

const mapStateToProps = state => ({
    appState: state.AppStatus,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartBox)