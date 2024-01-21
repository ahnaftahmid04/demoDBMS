import './Layout.css';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import MainBar from './components/MainBar';

const Layout = ({ user, children }) => {
  return (
    <div className="Layout">
      <LeftSideBar className="LeftSideBar" />
      <MainBar className="MainBar">{children}</MainBar>
      <RightSideBar className="RightSideBar" user={user}/>
    </div>
  );
};

export default Layout;