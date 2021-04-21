import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, changeSearchTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // [DONE 17.5] TODO - add more dispatchers for other filters
  changeSearchDuration: payload => dispatch(changeSearchDuration(payload)),
  changeSearchTag: payload => dispatch(changeSearchTag(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
