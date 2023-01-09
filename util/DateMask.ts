export function DateMask(value: string){
        const rawValue = value;
        const mask = '##/##/####';
        let maskedValue = '';
        let i = 0;
        for (const char of mask) {
          if (rawValue[i] && char !== '#') {
            maskedValue += char;
          }
          if (rawValue[i]) {
            maskedValue += rawValue[i];
            i += 1;
          }
        }
    return maskedValue;
}