import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-PVVT1FV5NC');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
