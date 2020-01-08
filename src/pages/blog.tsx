import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import PageLayout from "../layouts/page"

const BlogIndexPage = () => {
  const data = useStaticQuery(graphql`
    query BlogIndexQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
                slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <PageLayout>
      <Page>
        <Container>
          <h1>Blog Posts</h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </Container>
      </Page>
    </PageLayout>
  )
}

export default BlogIndexPage
