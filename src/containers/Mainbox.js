import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as allActions from '../actions'
import MainBox from '../components/MainBox'

const mapStateToProps = state => ({
    appState: state.AppStatus,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBox)