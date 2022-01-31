// From official documentation - not working on my project

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

// From video comment - working perfectly

import { useMatch } from "react-router-dom";

export const withRouter = (Component) => {
  let RouterComponent = (props) => {
    const match = useMatch('/profile/:userId/');
    return <Component {...props} match={match}/>;
  };
  return RouterComponent;
};

