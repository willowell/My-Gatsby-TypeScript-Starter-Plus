import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import PageLayout from "../layouts/page"

const ContactPage = () => (
  <PageLayout>
    <Page>
      <Container>
        <h1>Hi from the contact page!</h1>
      </Container>
    </Page>
  </PageLayout>
)

export default ContactPage
