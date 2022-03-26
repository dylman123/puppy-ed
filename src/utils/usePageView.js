import React from 'react';
import { useLocation } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import { MIXPANEL_PROJECT_TOKEN } from '../config';

mixpanel.init(MIXPANEL_PROJECT_TOKEN);

export default function usePageView(pageName) {
    let location = useLocation();
    React.useEffect(() => {
      mixpanel.track(`${pageName}`, {
          url: location.pathname
      })
    }, [location, pageName]);
}