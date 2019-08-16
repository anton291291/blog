import {HeaderBlock} from '../../../components/index';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = ({posts},{location: {pathname}}) => {
  const id = pathname.split('/posts/')[1];
  return posts.posts.filter(post => post._id === id)[0];
};

export default withRouter(
  connect(mapStateToProps)(HeaderBlock)
);
