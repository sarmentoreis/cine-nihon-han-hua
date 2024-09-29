import { useState } from 'react';

export const useDiscoveryQuestion = () => {
  const [discoveryResponse, setDiscoveryResponse] = useState<string | null>(
    null
  );

  const handleDiscoveryChange = (value: string) => {
    setDiscoveryResponse(value);
  };

  return { handleDiscoveryChange, discoveryResponse };
};
