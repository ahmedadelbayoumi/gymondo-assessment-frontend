import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const IsLoadingContext = createContext(false);
const SetLoadingContext = createContext(() => { });

/**
 * Loading Hook - Loading Provider
 *
 * A module that export default a context provider
 * for the global Loading component to consume, and
 * another context for components to show/hide the spinner.
 *
 * It also expose the context hooks used in the components.
 */
function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsLoadingContext.Provider value={isLoading}>
      <SetLoadingContext.Provider value={setIsLoading}>
        {children}
      </SetLoadingContext.Provider>
    </IsLoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export const useIsLoading = () => useContext(IsLoadingContext);
export const useSetLoading = () => useContext(SetLoadingContext);

export default LoadingProvider;
