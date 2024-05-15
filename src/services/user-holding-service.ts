import { AxiosResponse } from "axios"

import { fetcher } from "../utils/fetcher"
import { UserHoldingResponse } from "../types/user-holding/response-type"

export const getUserHolding = async (): Promise<AxiosResponse<UserHoldingResponse>> => {
  return fetcher({ method: 'GET' })
}
