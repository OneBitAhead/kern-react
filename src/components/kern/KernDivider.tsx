
type KernDividerProps = {
  spacing?: "none" | "2x-small" | "x-small" | "small" | "default" | "large" | "x-large"
};

function KernDivider ({spacing = "default"}:KernDividerProps) {

    return(
     <>  
     <hr className="kern-divider" style={{
          marginTop: `var(--kern-metric-space-${spacing})`,
          marginBottom: `var(--kern-metric-space-${spacing})`,
      }} aria-hidden="true" />
     </>
    );

}

export default KernDivider;