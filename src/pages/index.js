import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <div className="grid grid-cols-12 gap-4 container mx-auto p-4">
        <section className="col-span-12 md:col-span-9 grid grid-flow-row auto-rows-min gap-4">
          <h2 className="text-indigo-600">Blogs</h2>
          <p className="text-indigo-400 text-sm">
            Interesting stories I collected for you.
          </p>
          <ul className="grid grid-flow-row gap-4">
            {props.data.allDatoCmsBlog.edges.map((edge) => {
              console.log({ edge });
              return (
                <ol key={edge.node.id}>
                  <article className="p-4 bg-purple-50 border border-solid border-purple-300 rounded-xl">
                    <GatsbyImage
                      className="rounded-xl transition hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 ease-in-out"
                      image={edge.node.featureImage.gatsbyImageData}
                      alt={edge.node.featureImage.alt}
                    />
                    <h3 className="text-purple-700">{edge.node.title}</h3>
                    <p className="text-purple-500">{edge.node.content}</p>
                  </article>
                </ol>
              );
            })}
          </ul>
        </section>
        <aside className="col-span-12 md:col-span-3 grid grid-flow-row auto-rows-min gap-4">
          <h2>Useful Links</h2>
          <div className="p-4 bg-indigo-50 rounded-xl border border-solid border-indigo-300">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allDatoCmsBlog {
      edges {
        node {
          content
          slug
          featureImage {
            gatsbyImageData(width: 300)
            alt
          }
          id
          title
        }
      }
    }
  }
`;

export default IndexPage;
