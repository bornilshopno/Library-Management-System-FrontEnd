const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '5px solid #ccc',
    borderTop: '5px solid #1d4ed8', // blue color
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Add keyframes to global CSS (or use styled-components / CSS modules)
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Loader;
