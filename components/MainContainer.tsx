const MainContainer = ({ children }) => (
  <div className="ross_main-container">
    {children}
    <style jsx>{`
      .ross_main-container {
        margin: 0 auto;
        padding: 15px 0;
        width: 95%;
      }
    `}</style>
  </div>
);

export default MainContainer;
