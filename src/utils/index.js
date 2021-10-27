import BigNumber from 'bignumber.js';
BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP });
export const getDisplayAddress = address => {
   return `${address.slice(0,8)}...${address.slice(-4)}`
}

export const getFomatedAmount = (amount, decimal) => {
   const fmt = {
      prefix: '',
      decimalSeparator: '',
      groupSeparator: '',
   }
   amount = new BigNumber(amount).multipliedBy(`1e${decimal}`)
   return amount.toFormat(fmt)
}