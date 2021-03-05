/* Thanks Josh Comeau */

import React, { useState, useEffect } from 'react';

function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default useHasMounted;