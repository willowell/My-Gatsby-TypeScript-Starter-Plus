import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../layouts/page"
import Page from "../components/Page"
import Container from "../components/Container"

import { Table } from "react-bootstrap"

interface MyFilesProps {
  data: {
    allFile: {
      edges: {
        node: {
          relativePath: any
          prettySize: any
          extension: any
          birthTime: any
        }
      }
    }
  }
}

const MyFiles = ({ data }: MyFilesProps) => {
  console.log(data)
  return (
    <PageLayout>
      <Page>
        <Container>
          <div>
            <h1>My Site's Files</h1>
            <Table size="sm">
              <thead>
                <tr>
                  <th>relativePath</th>
                  <th>prettySize</th>
                  <th>extension</th>
                  <th>birthTime</th>
                </tr>
              </thead>
              <tbody>
                {data.allFile.edges.map(({ node }, index: number) => (
                  <tr key={index}>
                    <td>{node.relativePath}</td>
                    <td>{node.prettySize}</td>
                    <td>{node.extension}</td>
                    <td>{node.birthTime}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </Page>
    </PageLayout>
  )
}

export default MyFiles

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
