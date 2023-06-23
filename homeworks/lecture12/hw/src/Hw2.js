export default function Hw2() {
      const styles = {
            Header: {
                  height: "120px",
                  border: "solid",
                  margin: "2px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
            },

            Nav: {
                  height: "50px",
                  border: "solid",
                  margin: "2px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
            },

            Container: {
                  margin: "2px",
                  display: "flex"
            },
            Aside: {
                  height: "300px",
                  width: "30%",
                  border: "solid",
                  marginRight: "2px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
            },
            Section: {
                  height: "300px",
                  width: "70%",
                  border: "solid",
                  flex: "1",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
            },
            Clear: {
                  clear: "both"
            },

            Footer: {
                  height: "100px",
                  border: "solid",
                  margin: "2px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
            },

            H1: {
                  textAlign: "center"
            }
      };

      return (
            <div className="Hw2">
                  <div className="Header" style={styles.Header}>
                        <h1>Header</h1>
                  </div>
                  <div className="Nav" style={styles.Nav}>
                        <h1>Nav</h1>
                  </div>
                  <div className="Container" style={styles.Container}>
                        <div className="Aside" style={styles.Aside}>
                              <h1>Aside</h1>
                        </div>
                        <div className="Section" style={styles.Section}>
                              <h1>Section</h1>
                        </div>
                        <div className="Clear" style={styles.Clear}></div>
                  </div>
                  <div className="Footer" style={styles.Footer}>
                        <h1>Footer</h1>
                  </div>
            </div>
      );
}