import React from "react";

const styles = {
  loader: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem",
  },
};

export const Loader = () => {
  return (
    <div style={styles.loader}>
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};
