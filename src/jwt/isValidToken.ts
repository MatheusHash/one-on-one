import * as jose from "jose";

export const isValid = async (cookie: string) => {
  // console.log("\n verifying : ", cookie);

  /**
   * Constante secret e a variavel utilizada para assinar o token jwt
   */
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT);

  /**
   * code
   * A constante jwt recebe o cookie pelo middleware
   */
  const jwt = cookie;

  /**
   * A constante payload armazena todos os dados referentes ao token
   * { user: 'Matheus', exp: 1671565250, iat: 1671561650, nbf: 1671561650 }
   *
   */
  const { payload } = await jose.jwtVerify(jwt, secret);

  console.log("payload exp: ", payload.exp);
  // console.log('PAYLOAD',payload);

  return payload;
};
