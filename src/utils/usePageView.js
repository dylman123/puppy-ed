import React from 'react';
import { useLocation } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN);

export default function usePageView() {
    let location = useLocation();
    React.useEffect(() => {
      console.log(["pageview", location.pathname]);
      mixpanel.track('Page View', {
          url: location.pathname
      })
    }, [location]);
}