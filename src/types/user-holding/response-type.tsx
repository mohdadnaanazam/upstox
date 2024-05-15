export interface IUserHolding {
  symbol: string
  quantity: number
  ltp: number
  avgPrice: number
  close: number
}

export interface UserHoldingResponse {
  data: {
    userHolding: Array<IUserHolding>
  }
}