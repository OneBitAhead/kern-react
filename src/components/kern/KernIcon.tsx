interface KernIconProps {
  icon: string;
  size?: 'small' | 'medium' | 'large';
}

function KernIcon ({ icon = 'edit', size = 'small' }: KernIconProps){

  return (
    <span className={`kern-icon kern-icon--${icon} kern-icon--${size}`} aria-hidden="true"></span>
  )
}


export default KernIcon;