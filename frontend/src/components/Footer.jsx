export default function Footer() {
    return ( 
        <footer style = {{ padding: "20px"}} >
            <hr />
            <div style = {
                {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    color: "#6c757d",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "small"
                }
            } >
                <span > Last updated: December 25, 2024, 10: 56: 56.. </span> 
                <span > &copy; IIITH </span> 
            </div> 
        </footer>
    );
}