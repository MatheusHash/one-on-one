import { useEffect, useState } from "react";
import { DecodeData } from "../src/store/js-base64";

export function useGetFromStore(store: any, callback: any) {
  const result = store(callback);
  const [state, setState] = useState();
  useEffect(() => {
    setState(result);
  }, [result]);

  try {
    return DecodeData(state);
  } catch (error) {
    return null;
  }
}
