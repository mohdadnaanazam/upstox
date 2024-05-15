/**
 * NOTE:
 * 1. Used BEM (Block Element Modifier) convention for naming css
 * 2. Imports are segerated by empty lines with first imports from 3rd party libraries followed by imports from internal modules
 * 3. Each component has a const export having an index.ts file in it if different variants came in we can export them from the same file
 *  3.1. This way we can keep the imports clean and easy to read
 *  3.2. This way we can also implement storybook easily
 * 4. All imports are sorted in ascending order
 */

import { View, FlatList, Text } from 'react-native'
import { useEffect, useState } from 'react'

import { AppBar } from '../../../src/components/AppBar'
import { colors } from '../../utils/colors'
import { Container } from '../../../src/components/Container'
import { getUserHolding } from '../../services/user-holding-service'
import { CardHolding } from '../../../src/components/Card/Holding'
import { IUserHolding } from '../../types/user-holding/response-type'
import { PortfolioBottomSheet } from '../../../src/components/Portfolio/BottomSheet'
import { PortfolioSummaryRow } from '../../../src/components/Portfolio/SummaryRow'
import { styles } from './Styles'

interface PortfolioData {
  calculatedData: IUserHolding[]
  currentValueTotal: number
  totalInvestment: number
  totalPnl: number
  todaysPnl: number
}

export function HoldingScreen(): JSX.Element {
  const [userHolding, setUserHolding] = useState<IUserHolding[]>([])
  const [portfolioData, setPortfolioData] = useState<PortfolioData>()
  const [isLoading, setIsLoading] = useState(true)

  // fetch user holding
  useEffect(() => {
    handleFetchUserHolding()
  }, [])

  // calculate portfolio
  useEffect(() => {
    if (userHolding.length > 0) {
      calculatePortfolio()
    }
  }, [userHolding.length])

  /**
   * @description Fetch user holding
   * @returns void
   */
  const handleFetchUserHolding = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const res = await getUserHolding()

      setUserHolding(res?.data?.data?.userHolding ?? [])
    } catch (error) {
      setIsLoading(false)
    }
  }

  /**
   * @description Calculate portfolio
   * @returns void
   */
  const calculatePortfolio = () => {
    const calculatedData = userHolding.map(item => {
      const currentValue = item.ltp * item.quantity
      const investmentValue = item.avgPrice * item.quantity
      const pnl = currentValue - investmentValue
      const todayPnl = (item.close - item.ltp) * item.quantity

      return { ...item, currentValue, investmentValue, pnl, todayPnl }
    })

    const currentValueTotal = calculatedData.reduce((acc, item) => acc + item.currentValue, 0)
    const totalInvestment = calculatedData.reduce((acc, item) => acc + item.investmentValue, 0)
    const totalPnl = currentValueTotal - totalInvestment
    const todaysPnl = calculatedData.reduce((acc, item) => acc + item.todayPnl, 0)

    const data = {
      calculatedData,
      currentValueTotal,
      totalInvestment,
      totalPnl,
      todaysPnl
    }

    setPortfolioData(data)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <Container backgroundColor={colors.white} statusBarBackgroundColor={colors.primary}>
        <AppBar />
        <View style={styles['container--loading']}>
          <Text>Loading ...</Text>
        </View>
      </Container>
    )
  }


  return (
    <View style={styles.container}>
      <Container backgroundColor={colors.white} statusBarBackgroundColor={colors.primary}>
        <AppBar />

        <FlatList
          data={userHolding}
          renderItem={({ item, index }) => <CardHolding {...item} isLast={index === userHolding.length - 1} />}
          keyExtractor={(item) => item.symbol}
          contentContainerStyle={styles.container__contentContainerStyle}
        />
      </Container>

      <PortfolioBottomSheet title={<PortfolioSummaryRow title='Profile & Loss:' value={portfolioData?.totalPnl || 0} />}>
        <View style={styles.portfolioBottomSheetContainer}>
          <PortfolioSummaryRow title='Current Value:' value={portfolioData?.currentValueTotal || 0} />
          <PortfolioSummaryRow title='Total Investment:' value={portfolioData?.totalInvestment || 0} />
          <PortfolioSummaryRow title="Today's Profit & Loss:" value={portfolioData?.todaysPnl || 0} />
          <PortfolioSummaryRow title='Profile & Loss:' value={portfolioData?.totalPnl || 0} extStyles={styles.portfolioBottomSheetContainer__profitLoss} />
        </View>
      </PortfolioBottomSheet>
    </View>
  )
}
