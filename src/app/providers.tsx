import GlobalStyles from '@/styles/global'
import type { PropsWithChildren, ReactElement } from 'react'

const Providers = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Providers
