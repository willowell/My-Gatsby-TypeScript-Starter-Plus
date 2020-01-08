import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import PageLayout from "../layouts/page"

const AboutPage = () => (
  <PageLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
          <li>
            <Link to="/another-page/">Show me some more Markdown!</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </PageLayout>
)

export default AboutPage
