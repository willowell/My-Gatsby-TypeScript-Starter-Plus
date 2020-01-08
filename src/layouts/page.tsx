import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Footer from "../components/Footer"
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import MyNavbar from '../components/MyNavbar'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const PageLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PageLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <MyNavbar />
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingTop: "60px"
        }}>
          {children}
        </div>
        <Footer></Footer>
      </LayoutRoot>
    )}
  />
)

export default PageLayout
