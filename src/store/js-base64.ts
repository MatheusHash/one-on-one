import { encode, decode } from "js-base64";

export function EncondeData(data: any) {
    try {
        const encodedString = encode(JSON.stringify(data).toString());
        return encodedString;
        
    } catch (error) {
        return "";
    }
}
export function DecodeData(data: any) {
  const decodeString = decode(data);
  const decodedString = JSON.parse(decodeString);
  return decodedString;
}
