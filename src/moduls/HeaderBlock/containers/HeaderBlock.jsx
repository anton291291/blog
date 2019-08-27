import React,{useState} from 'react';
import {HeaderBlock,UserLogin} from '../../../components/index';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const HeaderBlockContainer = (props) => {

    const [modal,setModal] = useState(false);

  return (
    <>
      <HeaderBlock onClick={() => {setModal(!modal)}}/>
      {modal ? <UserLogin/>: null}
    </>
      );
};

const mapStateToProps = ({posts},{location: {pathname}}) => {
  const id = pathname.split('/posts/')[1];
  return posts.posts.filter(post => post._id === id)[0];
};

export default withRouter(
  connect(mapStateToProps)(HeaderBlockContainer)
);
