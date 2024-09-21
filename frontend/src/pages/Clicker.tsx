import { Button, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react"

const Clicker = () => {
  const [exponent, setExponent] = useState<number>(fetchExponent());
  const [clicks, setClicks] = useState<number>(getStoredClicks());

  /**
   * Get Stored Clicks from Browser Storage
   * @returns 
   */
  function getStoredClicks(): number {
    const storedClicks = localStorage.getItem('clicks');
    if (!storedClicks) {
      return 0;
    }
    if (storedClicks == 'NaN') {
      return 0;
    }
    try {
      const dateString = localStorage.getItem('lastSave');
      if (!dateString) {
        return parseInt(storedClicks);
      }
      const lastClick = new Date(dateString);
      const now = new Date();
      const diff: number = now.getTime() - lastClick.getTime();
      const seconds = (diff/1000)^exponent;
      return parseInt(storedClicks) + parseInt(seconds.toPrecision(1));
    } catch (error) {
      console.error(error);
      return parseInt(storedClicks);
    }
  }

  function fetchExponent(): number {
    const exponent = localStorage.getItem('exponent');
    if (!exponent) {
      return 1;
    }
    return parseInt(exponent);
  }

  function storeExponent(exponent: number): void {
    localStorage.setItem('exponent', String(exponent));
  }

  /**
   * Set Clicks in storage
   * @param clicks 
   */
  function setStoredClicks(clicks: number) {
    localStorage.setItem('clicks', String(clicks));
    localStorage.setItem('lastSave', new Date().toISOString());
  }

  useEffect(() => {
    setStoredClicks(clicks);
  }, [clicks]);

  useEffect(() => {
    storeExponent(exponent);
  }, [exponent]);

  return (
    <Stack>
      <Group>{clicks} Clicks</Group>
      <Group>Exponent^{exponent}</Group>
      <Group> Click is worth {10**exponent}</Group>
      <Button onClick={()=>setClicks(clicks+(10**exponent))}>Click</Button>
      <Button onClick={()=>setExponent(exponent+1)}>Exponent + 1</Button>
    </Stack>
  );
};

export default Clicker;