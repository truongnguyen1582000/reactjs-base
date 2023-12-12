import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

PrivateRouteGuard.propTypes = {};

interface PrivateRouteGuardProps {
  children: ReactNode;
}

function PrivateRouteGuard({ children }: PrivateRouteGuardProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // check auth here
  }, []);

  return <div>{children}</div>;
}

export default PrivateRouteGuard;
